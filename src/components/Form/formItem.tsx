import React, { FC, ReactNode, useContext, useEffect } from "react";
import classNames from "classnames";
import { FormContext } from "./form";
import { CustomRule } from "./useStore";
export type SomeRequired<T, K extends keyof T> = Required<Pick<T, K>> &
  Omit<T, K>;

export interface FormItemProps {
  name: string;
  label?: string;
  children: ReactNode;
  /**子节点的值的属性，如 checkbox 的是 'checked' */
  valuePropName?: string;
  /**设置收集字段值变更的时机 */
  trigger?: string;
  /**设置如何将 event 的值转换成字段值 */
  getValueFromEvent?: (event: any) => any;
  rules?: CustomRule[];
  validateTrigger?: string;
}

export const FormItem: FC<FormItemProps> = (props) => {
  const {
    label,
    children,
    name,
    valuePropName,
    trigger,
    getValueFromEvent,
    rules,
    validateTrigger,
  } = props as SomeRequired<
    FormItemProps,
    "getValueFromEvent" | "trigger" | "valuePropName" | "validateTrigger"
  >;
  const { dispatch, fields,initialValues ,validateField } = useContext(FormContext);
  const rowClass = classNames('viking-row', {
    'viking-row-no-label': !label   
  })
  useEffect(() => {
    const value = (initialValues && initialValues[name]) || ''
    dispatch({ type: "addField", name, value: { label, name, value, rules:rules||[],errors: [], isValid: true } });
  }, []);
  // 获取store 对应的 value
  const fieldState = fields[name];
  const value = fieldState && fieldState.value;
  const errors = fieldState && fieldState.errors;
  const isRequired = rules?.some(
    (rule) => typeof rule !== "function" && rule.required
  );
  const hasError = errors && errors.length > 0;
  const labelClass = classNames({
    "viking-form-item-required": isRequired,
  });
  const itemClass = classNames("viking-form-item-control", {
    "viking-form-item-has-error": hasError,
  });

  const onValueUpdate = (e: any) => {
    const value = getValueFromEvent(e)
    console.log("new value", value);
    dispatch({ type: "updateValue", name, value });
  };
  const onValueValidate = async () => {
    await validateField(name);
  };
  // 1 手动的创建一个属性列表，需要有 value 以及 onChange 属性
  const controlProps: Record<string, any> = {};
  //  这里定义自定义事件 controlProps[trigger!]是事件名字 如'onChange'   则是onChange触发时触发的事件onValueUpdate
  // 以及value值  赋值给formItem
  controlProps[valuePropName] = value
  controlProps[trigger] = onValueUpdate
  if (rules) {
    controlProps[validateTrigger] = onValueValidate;
  }
  // todo 适应不同的事件以及 value 属性名称
  // 2 获取 children 数组的第一个元素
  const childList = React.Children.toArray(children);
  // todo 判断 children 的类别 显示警告
  // 没有子组件
  if (childList.length === 0) {
    console.error(
      "No child element found in Form.Item, please provide one form component"
    );
  }
  // 子组件大于一个
  if (childList.length > 1) {
    console.warn(
      "Only support one child element in Form.Item, others will be omitted"
    );
  }
  // 不是 ReactElement 的子组件
  if (!React.isValidElement(childList[0])) {
    console.error("Child component is not a valid React Element");
  }
  const child = childList[0] as React.ReactElement;
  // 3 cloneElement，混合这个child 以及 手动的属性列表
  const returnChildNode = React.cloneElement(child, {
    ...child.props, 
    ...controlProps,
  });
  return (
    <div className={rowClass}>
      {label && (
        <div className="viking-form-item-label">
          <label title={label} className={labelClass}>{label}</label>
        </div>
      )}  
      <div className="viking-form-item" > 
        <div className={itemClass}>
        {returnChildNode}
        </div>
        { hasError && 
          <div className='viking-form-item-explain'>
            <span>{errors[0].message}</span>
          </div>
        }
      </div>
    </div>
  );
};

FormItem.defaultProps = {
  valuePropName: "value",
  trigger: "onChange",
  validateTrigger: "onBlur",
  getValueFromEvent: (e) => e.target.value,
};
