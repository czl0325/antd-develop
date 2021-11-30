import React from "react";
import Input, {InputProps} from "./Input";
import {fireEvent, render} from "@testing-library/react";

const defaultProps: InputProps = {
  onChange: jest.fn(),
  placeholder: '请输入'
}
describe("测试Input组件", () => {
  test("默认input", () => {
    const wrapper = render(<Input {...defaultProps}></Input>)
    const wrapperNode = wrapper.getByTestId('input-wrapper')
    const inputNode = wrapper.getByPlaceholderText('请输入') as HTMLInputElement
    expect(wrapperNode).toBeInTheDocument()
    expect(inputNode).toBeInTheDocument()
    expect(wrapperNode).toHaveClass('ant-input-wrapper')
    fireEvent.change(inputNode, {target: {value: '123'}})
    expect(defaultProps.onChange).toHaveBeenCalled()
    expect(inputNode.value).toEqual('123')
  })
})
