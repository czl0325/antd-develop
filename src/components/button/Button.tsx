import React from "react";
import classNames from 'classnames';

type ButtonSize = "sm" | "lg"
type ButtonType = 'default' | 'primary' | 'success' | 'danger' | 'warning' | 'info' | 'dark' | 'light'
interface BaseButtonProps {
  className?: string;
  genre?: ButtonType;
  size?: ButtonSize;
  disabled?: boolean;
  children?: React.ReactNode;
}

export type ButtonProps = BaseButtonProps & React.ButtonHTMLAttributes<HTMLButtonElement>

export const Button: React.FC<ButtonProps> = (props) => {
  const { className, genre, size, disabled, children, ...restProps} = props
  const classes = classNames('btn', className, {
    [`btn-${genre}`]: genre, [`btn-${size}`]: size, 'disabled': disabled
  })
  return (
    <button className={classes} disabled={disabled} {...restProps}>{children}</button>
  )
}

Button.defaultProps = {
  disabled: false,
  genre: 'default'
}

export default Button
