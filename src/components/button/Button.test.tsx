import React from "react";
import {fireEvent, render} from "@testing-library/react";
import Button, {ButtonProps} from "./Button";

const defaultProps:ButtonProps = {
  onClick: jest.fn()
}
describe('测试button组件', () => {
  test('渲染默认按钮', () => {
    const wrapper = render(<Button {...defaultProps}>默认按钮</Button>)
    const element = wrapper.getByText('默认按钮') as HTMLButtonElement
    expect(element).toBeInTheDocument()
    expect(element).toHaveClass('btn btn-default')
    expect(element.disabled).toBeFalsy()
    fireEvent.click(element)
    expect(defaultProps.onClick).toHaveBeenCalled()
  })
})
