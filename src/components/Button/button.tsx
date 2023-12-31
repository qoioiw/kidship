import classNames from 'classnames';
import React from 'react'

export type ButtonSize = 'lg' | 'sm'
export type ButtonType = 'primary' | 'default' | 'danger' | 'link'

interface BaseButtonProps {
    /**设置 Button 的样式 */
    className?: string;
    /**设置 Button 的禁用 */
    disabled?: boolean;
    /**设置 Button 的尺寸 */
    size?: ButtonSize;
    /**设置 Button 的类型 */
    btnType?: ButtonType;
    children: React.ReactNode;
    /**设置 Button 的链接*/
    href?: string;
  }

// 合并 button的原生的属性
type NativeButtonProps =BaseButtonProps&React.ButtonHTMLAttributes<HTMLElement>
// 合并 a标签的原生的属性
type AnchorButtonProps =BaseButtonProps&React.AnchorHTMLAttributes<HTMLElement>
// Partial让里面的属性都变成可选的状态
export type ButtonProps = Partial<NativeButtonProps&AnchorButtonProps>
/**
 * 页面中最常用的的按钮元素，适合于完成特定的交互
 * ### 引用方法
 * 
 * ~~~js
 * import { Button } from 'vikingship'
 * ~~~
 */
export const Button:React.FC<ButtonProps> = (props) =>{
    const {
        btnType,
        className,
        disabled,
        size,
        children,
        href,
        ...restProps
    } = props

    const classes = classNames('btn',className,{
        [`btn-${btnType}`]:btnType,
        [`btn-${size}`]:size,
        'disabled':(btnType==='link')&&disabled
    })
    if(btnType === 'link'&&href)
    {
        return (
            <a 
            className={classes}
            href={href}
            {...restProps}
            >{children}</a>
        )
    }
    else{
        return (
            <button
            className={classes}
            disabled={disabled}
            {...restProps}
            >{children}</button>
        )
    }
}

Button.defaultProps ={
    disabled:false,
    btnType:'default'
}
