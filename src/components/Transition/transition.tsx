import React from "react";
import { CSSTransition } from "react-transition-group";
import { CSSTransitionProps } from "react-transition-group/CSSTransition";

type AnimationName = 'zoom-in-top'|'zoom-in-right'|'zoom-in-left'|'zoom-in-bottom'

type TransitionProps = CSSTransitionProps & {
    animation?:AnimationName,
    wrapper?:boolean,
    children:React.ReactNode
}
export const Transition :React.FC<TransitionProps> =(props)=>{
    const {
        children,
        classNames,
        animation,
        wrapper,
        ...restProps
    } = props
    return(
        <CSSTransition
        classNames={classNames?classNames:animation}
        {...restProps}>
          
            {wrapper?<div>{children}</div>:children}
        </CSSTransition>
    )
}

Transition.defaultProps={
    unmountOnExit:true,
    appear:true
}

