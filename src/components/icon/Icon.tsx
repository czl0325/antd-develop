import React from "react";
import classNames from "classnames";
import {FontAwesomeIcon, FontAwesomeIconProps} from "@fortawesome/react-fontawesome";
import {library} from "@fortawesome/fontawesome-svg-core";
import {fas} from '@fortawesome/free-solid-svg-icons'
library.add(fas)

type ThemeProps = "primary" | "secondary" | "success" | "info" | "warning" | "danger" | "light" | "dark"

export interface IconProps extends FontAwesomeIconProps{
  theme?: ThemeProps
}

const Icon: React.FC<IconProps> = (props) => {
  const { className, theme, ...restProps } = props
  const classes = classNames(className, 'icon', {
    [`icon-${theme}`]: theme
  })
  return (
    <FontAwesomeIcon className={classes} {...restProps}/>
  )
}

Icon.defaultProps = {

}

export default Icon
