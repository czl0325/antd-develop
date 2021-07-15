import React, {Children, CSSProperties, useState} from "react";
import classNames from "classnames";

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
  onSelect?: (selectIndex:string|number)=>void
}
export const MenuContext = React.createContext<IMenuContext>({active: 0})

export const Menu: React.FC<MenuProps> = (props) => {
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
    onSelect: handleClick
  }

  return (
    <ul className={classes} style={style} >
      <MenuContext.Provider value={menuContext}>
        {children}
      </MenuContext.Provider>
    </ul>
  )
}

Menu.defaultProps = {}

export default Menu
