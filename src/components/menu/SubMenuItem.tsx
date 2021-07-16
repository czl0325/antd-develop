import React, {CSSProperties, ReactNode, useContext, useState} from "react";
import classNames from "classnames";
import MenuItem, {MenuItemProps} from "./MenuItem";
import {MenuContext} from "./Menu";

export interface SubMenuItemProps {
  name?: string|number;
  className?: string;
  style?: CSSProperties;
  open?: boolean;
  title?: string;
  children?: ReactNode;
}

const SubMenuItem: React.FC<SubMenuItemProps> = (props) => {
  const { name, className, style, open, title, children } = props
  const context = useContext(MenuContext)
  const [menuOpen, setMenuOpen] = useState(false)
  const subClasses = classNames(className, 'menu-item', 'submenu', {
    'active': context.active === name
  })
  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault()
    setMenuOpen(!menuOpen)
  }
  let timer: any = null
  const handleMouse = (e: React.MouseEvent, toggle: boolean) => {
    clearTimeout(timer)
    timer = setTimeout(() => {
      e.preventDefault()
      setMenuOpen(toggle)
    }, 300)
  }
  const hoverEvents = context.direction !== 'vertical' ? {
    onMouseEnter: (e: React.MouseEvent) => handleMouse(e, true),
    onMouseLeave: (e: React.MouseEvent) => handleMouse(e, false)
  } : {}
  const renderChildren = () => {
    const subclasses = classNames('submenu-popup', {'menu-open':menuOpen})
    const childrenComponents = React.Children.map(children, (child, index) => {
      const childElement = child as React.FunctionComponentElement<MenuItemProps>
      if (childElement.type.displayName === 'MenuItem') {
        return childElement
      } else {
        console.error("SubMenuItem只允许包含MenuItem组件")
      }
    })
    return (
      <ul className={subclasses}>
        {childrenComponents}
      </ul>
    )
  }
  return (
    <li key={name} className={subClasses} style={style} {...hoverEvents}>
      <div className="submenu-title" >{title}</div>
      {renderChildren()}
    </li>
  )
}

SubMenuItem.defaultProps = {}
SubMenuItem.displayName = "SubMenuItem"

export default SubMenuItem
