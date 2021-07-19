import React, {CSSProperties, ReactNode, useContext, useState} from "react";
import classNames from "classnames";
import MenuItem, {MenuItemProps} from "./MenuItem";
import {MenuContext} from "./Menu";
import Icon from '../icon/Icon';
import Transition from "../transition/Transition";

export interface SubMenuItemProps {
  name?: string|number;
  className?: string;
  style?: CSSProperties;
  menuOpen?: boolean;
  title?: string;
  children?: ReactNode;
}

const SubMenuItem: React.FC<SubMenuItemProps> = (props) => {
  const { name, className, style, menuOpen, title, children } = props
  const context = useContext(MenuContext)
  const [open, setMenuOpen] = useState(menuOpen)
  const subClasses = classNames(className, 'menu-item', 'submenu', {
    'active': context.active === name
  })
  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault()
    setMenuOpen(!open)
  }
  let timer: any = null
  const handleMouse = (e: React.MouseEvent, toggle: boolean) => {
    clearTimeout(timer)
    timer = setTimeout(() => {
      e.preventDefault()
      setMenuOpen(toggle)
    }, 300)
  }
  const clickEvents = context.direction === 'vertical' ? {
    onClick: (e: React.MouseEvent) => handleClick(e)
  }: {}
  const hoverEvents = context.direction !== 'vertical' ? {
    onMouseEnter: (e: React.MouseEvent) => handleMouse(e, true),
    onMouseLeave: (e: React.MouseEvent) => handleMouse(e, false)
  } : {}
  const renderChildren = () => {
    const subclasses = classNames('submenu-popup', {'menu-open':open})
    const childrenComponents = React.Children.map(children, (child, index) => {
      const childElement = child as React.FunctionComponentElement<MenuItemProps>
      if (childElement.type.displayName === 'MenuItem') {
        return childElement
      } else {
        console.error("SubMenuItem只允许包含MenuItem组件")
      }
    })
    return (
      <Transition in={open} timeout={300} animation="zoom-in-top">
        <ul className={subclasses}>
          {childrenComponents}
        </ul>
      </Transition>
    )
  }
  return (
    <li key={name} className={subClasses} style={style} {...hoverEvents} >
      <div className="submenu-title" {...clickEvents}>
        {title}
        <Icon icon="angle-down" size="sm" className="arrow-icon"/>
      </div>
      {renderChildren()}
    </li>
  )
}

SubMenuItem.defaultProps = {
  menuOpen: false,
}
SubMenuItem.displayName = "SubMenuItem"

export default SubMenuItem
