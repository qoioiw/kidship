import React from 'react'
import classNames from 'classnames'
import {FontAwesomeIcon,FontAwesomeIconProps} from "@fortawesome/react-fontawesome"


export type ThemeProps = 'primary' | 'secondary' | 'success' | 'info' | 'warning' | 'danger' | 'light' | 'dark'

export interface IconProps extends FontAwesomeIconProps{
    /**设置 icon 的主题*/
    theme?:'primary' | 'secondary' | 'success' | 'info' | 'warning' | 'danger' | 'light' | 'dark'
}

/**
 * 提供了一套常用的图标集合 基于 react-fontawesome。
 *
 * 支持 react-fontawesome的所有属性 可以在这里查询 https://github.com/FortAwesome/react-fontawesome#basic
 *
 * 支持 fontawesome 所有 free-solid-icons，可以在这里查看所有图标 https://fontawesome.com/icons?d=gallery&s=solid&m=free
 * 
 * ### 引用方法
 * 
 * ~~~js
 * import { Icon } from 'vikingship'
 * ~~~
 */

 export const Icon :React.FC<IconProps> =(props)=>{
    // icon-primary
    const {className,theme ,...restprops}  = props
    const classes = classNames('viking-icon',className,{
        [`icon-${theme}`] :theme
    })
    return(
        <FontAwesomeIcon className={classes} {...restprops}></FontAwesomeIcon>
    )
}
