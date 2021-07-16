import React, {CSSProperties, useState} from "react";
import classNames from "classnames";
import {MenuItemProps} from "./MenuItem";

type menuDirection = 'horizontal' | 'vertical'
export interface MenuProps {
  className?: string;
  active?: string|number;
  style?: CSSProperties;
  direction?: menuDirection;
  onSelect?: (selectIndex:string|number)=>void,
  children?: React.ReactNode;
}

interface IMenuContext {
  active: string|number;
  direction?: menuDirection;
  onSelect?: (selectIndex:string|number)=>void
}
export const MenuContext = React.createContext<IMenuContext>({active: 0})

const Menu: React.FC<MenuProps> = (props) => {
  const {className, active, style, direction, onSelect, children} = props
  const classes = classNames('menu', className, {
    'menu-vertical': direction === 'vertical',
    'menu-horizontal': direction === 'horizontal'
  })
  const [current, setActive] = useState(active)
  const handleClick = (selected: string|number) => {
    setActive(selected)
    if (onSelect) {
      onSelect(selected)
    }
  }
  const menuContext:IMenuContext = {
    active: current ? current : 0,
    onSelect: handleClick,
    direction: props.direction
  }
  const renderChildren = () => {
    return React.Children.map(children, (child, index) => {
      const childElement = child as React.FunctionComponentElement<MenuItemProps>
      if (childElement.type.displayName === 'MenuItem' || childElement.type.displayName === 'SubMenuItem') {
        return React.cloneElement(childElement, {
          name: childElement.props.name ? childElement.props.name : index
        })
      } else {
        console.error('Menu组件内只能包含MenuItem或者SubMenuItem')
      }
    })
  }
  return (
    <ul className={classes} style={style} >
      <MenuContext.Provider value={menuContext}>
        {renderChildren()}
      </MenuContext.Provider>
    </ul>
  )
}

Menu.defaultProps = {
  direction: 'horizontal'
}

export default Menu
