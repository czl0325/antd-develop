import React, {ChangeEvent, InputHTMLAttributes} from "react";
import classNames from "classnames";
import Icon from "../icon/Icon";
import {IconProp} from "@fortawesome/fontawesome-svg-core";

type InputSize = 'lg' | 'sm'
export interface InputProps extends Omit<InputHTMLAttributes<HTMLElement>, 'size'>{
  /**是否禁用 Input */
  disabled?: boolean;
  /**设置 input 大小，支持 lg 或者是 sm*/
  size?: InputSize;
  /**Input组件左侧图标*/
  icon?: IconProp;
  /**Input左侧文字*/
  prefix?: string;
  /**Input右侧文字*/
  suffix?: string;
  /**Input文字改变事件*/
  onChange?: (e:ChangeEvent<HTMLInputElement>)=>void;
}

const Input: React.FC<InputProps> = (props) => {
  const {disabled, size, icon, prefix, suffix, ...restProps} = props
  const classes = classNames('ant-input-wrapper', {
    [`input-size-${size}`]: size
  })
  if ('value' in props) {
    delete restProps.defaultValue
    restProps.value = props.value || ''
  }
  return (
    <div className={classes} data-testid="input-wrapper">
      {icon && <Icon icon={icon} />}
      {prefix && <span className='prefix-wrapper'>{prefix}</span>}
      <input disabled={disabled} {...restProps}/>
      {suffix && <span className='suffix-wrapper'>{suffix}</span>}
    </div>
  )
}

Input.defaultProps = {
  disabled: false,
  size: "sm"
}

export default Input
