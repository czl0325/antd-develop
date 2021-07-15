import React, {CSSProperties, useContext} from "react";
import classNames from "classnames";
import {MenuContext} from "./Menu";

export interface MenuItemProps {
  name: string|number;
  disabled?: boolean;
  className?: string;
  style?: CSSProperties;
  children?: React.ReactNode
}

export const MenuItem: React.FC<MenuItemProps> = (props) => {
  const { name, disabled, className, style, children } = props
  const context = useContext(MenuContext)
  const classes = classNames('menu-item', className, {
    'disabled': disabled,
    'active': context.active === name
  })
  const handleClick = () => {
    if (context.onSelect && !disabled) {
      context.onSelect(name)
    }
  }
  return (
    <li className={classes} style={style} onClick={handleClick}>
      {children}
    </li>
  )
}

MenuItem.defaultProps = {}
MenuItem.displayName = 'MenuItem'
export default MenuItem
