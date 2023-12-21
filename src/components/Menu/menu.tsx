import React,{useState,createContext} from "react";
import classNames from "classnames";
import { MenuItemProps } from "./menuItem";

type MenuMode ='horizontal'|'vertical'
type selectedCallback =(selectedIndex:string) => void

export interface MenuProps{
    /** 默认选中*/
    defaultIndex?:string;
    className?:string;
    // 表单类型
    mode?:MenuMode;
    style?:React.CSSProperties;
    // 回调事件
    onSelect?:selectedCallback;
    /** 只能放 MenuItem 或者 SubMenu*/
    children?:React.ReactNode;
    /** 默认展开*/
    defaultOpenSubMenus?:string[];
}

interface IMenuContext{
    index:string;
    onSelect?:selectedCallback;
    mode?:MenuMode;
    defaultOpenSubMenus?:string[];
}

export const MenuContext = createContext<IMenuContext>({index:"0"})
/**
 * 为网站提供导航功能的菜单。支持横向纵向两种模式，支持下拉菜单。
 * ### 引用方法
 * 
 * ~~~js
 * import { Menu } from 'vikingship'

//然后可以使用 Menu.Item 和 Menu.Submenu 访问选项和子下拉菜单组件
 * ~~~
 */
export const Menu:React.FC<MenuProps> =(props)=>{
    const {className,mode,style,children,defaultIndex,onSelect,defaultOpenSubMenus} = props
    const [currentAvtive,setActive] = useState(defaultIndex)
    const classes = classNames('viking-menu',className,{
        'menu-vertical':mode==='vertical',
        'menu-horizontal':mode!=='vertical',
    })
    const handleClick = (index:string) =>{
        setActive(index)
        if(onSelect)
        {
            onSelect(index)
        }

    }
    const passedContext:IMenuContext ={
        index:currentAvtive?currentAvtive:"0",
        onSelect:handleClick,
        mode,
        defaultOpenSubMenus,
    }

    const renderChild = ()=>{
        return React.Children.map(children,(child,index)=>{
            const childElement = child as React.FunctionComponentElement<MenuItemProps>
            const {displayName}= childElement.type
            if(displayName === 'MenuItem'|| displayName === 'SubMenu' ){
                return React.cloneElement(childElement,{
                    index:index.toString()
                })
            }
            else {
                console.error('Warning: Menu has a child which is not a MenuItem component')
            }
        }
        )
    }

    return (
        <ul className={classes} style={style} data-testid='test-menu'>
            <MenuContext.Provider value={passedContext}>
                {renderChild()}
            </MenuContext.Provider>
        </ul>
    )
}

Menu.defaultProps ={
    defaultIndex:"0",
    mode:'horizontal',
    defaultOpenSubMenus:[],
}
