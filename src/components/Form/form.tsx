import React, { FC, ReactNode,createContext, forwardRef,useImperativeHandle } from "react";
import useStore, { FormState }from './useStore';
import { ValidateError } from 'async-validator'
export type RenderProps = (form: FormState) => ReactNode


export interface FormProps {
  name?: string;
  initialValues?: Record<string, any>;
  children?: ReactNode | RenderProps;
   /**提交表单且数据验证成功后回调事件 */
   onFinish?: (values: Record<string, any>) => void;
   /**提交表单且数据验证失败后回调事件 */
   onFinishFailed?: (values: Record<string, any>, errors: Record<string, ValidateError[]>) => void;
}
export type IFormContext = Pick<ReturnType<typeof useStore>,'dispatch'|'fields'|'validateField'> & Pick<FormProps, 'initialValues'>
export const FormContext = createContext<IFormContext>({} as IFormContext)
export type IFormRef = Omit<ReturnType<typeof useStore>, 'fields' | 'dispatch' | 'form'>
export const Form: React.FC<FormProps> = forwardRef<HTMLFormElement,FormProps>((props,ref) => {
  const { name, children,initialValues, onFinishFailed ,onFinish} = props;
  const { form, fields, dispatch,...restProps} = useStore(initialValues)
  const { validateField, validateAllFields } = restProps
  useImperativeHandle(ref,  () => {
    const restProps1: any = {
      // 在这里添加 HTMLFormElement 的属性和方法
      // 例如 acceptCharset, action, autocomplete 等等
      // 以及你自定义的属性和方法
      ...restProps
    };
  
    return restProps1;
  })
  const passedContext:IFormContext = {
    dispatch,
    fields,
    initialValues,
    validateField
  }
  const submitForm = async (e: React.FormEvent<HTMLFormElement>) => {
    // 阻止默认事件
    e.preventDefault()
    // 组织冒泡事件
    e.stopPropagation()
    const { isValid, errors, values } = await validateAllFields()
    if (isValid && onFinish) {
      onFinish(values)
    } else if(!isValid && onFinishFailed) {
      onFinishFailed(values, errors)
    }
  }
  let childrenNode: ReactNode
  if (typeof children === 'function') {
    childrenNode = children(form)
  } else {
    childrenNode = children
  }
  return (
    <>
    <form name={name} className="viking-form" onSubmit={submitForm} >
      <FormContext.Provider value={passedContext}>
      {childrenNode}
      </FormContext.Provider>  
    </form>
    {/* <div>
      <pre style={{whiteSpace:'pre-wrap'}}>{JSON.stringify(fields)}</pre>
       <pre style={{whiteSpace:'pre-wrap'}}>{JSON.stringify(form)}</pre>
      </div> */}
      </>
  );
});
