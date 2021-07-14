import React from "react";
import classNames from 'classnames';

interface ButtonProps {
  className?: string;
  type?: string;
  size?: string;
  disabled?: boolean;
  children?: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = (props) => {
  const { type, size, disabled, children} = props
  const classes = classNames('btn', {
    [`btn-${type}`]: type, [`btn-${size}`]: size, 'disabled': disabled
  })
  return (
    <button className={classes} disabled={disabled}>{children}</button>
  )
}

Button.defaultProps = {
  disabled: false,
  type: 'default'
}

export default Button
