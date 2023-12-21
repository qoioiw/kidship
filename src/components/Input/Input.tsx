import React, {
  ChangeEvent,
  FC,
  InputHTMLAttributes,
  ReactElement,
} from "react";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import classNames from "classnames";
import {Icon} from '../Icon/icon'

type InputSize = "lg" | "sm";
export interface InputProps
  extends Omit<InputHTMLAttributes<HTMLElement>, "size"> {
  /**是否禁用 Input */
  disabled?: boolean;
  /**设置 input 大小，支持 lg 或者是 sm */
  size?: InputSize;
  /**添加图标，在右侧悬浮添加一个图标，用于提示 */
  icon?: IconProp;
  /**添加前缀 用于配置一些固定组合 */
  prepend?: string | ReactElement;
  /**添加后缀 用于配置一些固定组合 */
  append?: string | ReactElement;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
}

export const Input: FC<InputProps> = (props) => {
  // 取出各种的属性
  const { disabled, size, icon, prepend, append, style, ...restProps } = props;

  // 根据属性计算不同的className
  const cnames = classNames("viking-input-wrapper", {
    [`input-size-${size}`]: size,
    'is-disabled':disabled,
    'input-group':prepend||append,
    'input-group-append':!!append,
    'input-group-prepend':!!prepend,
  });

  const fixControlldeValue  =(value:any)=>{
    if(typeof value === 'undefined'||value ===null){
        return ''
    }
    return value
  }

  if('value' in props){
    delete restProps.defaultValue 
    restProps.value = fixControlldeValue(props.value)
  }

  return (
    <div className={cnames} style={style}>
        {prepend && <div className="viking-input-group-prepend">{prepend}</div>}
        {icon && <div className="icon-wrapper"><Icon icon={icon} title={`title-${icon}`}></Icon></div>}
        <input className="viking-input-inner" disabled={disabled} {...restProps} />
        {append && <div className="viking-input-group-append">{append}</div>}
    </div>
  );
};

