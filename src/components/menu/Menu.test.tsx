import React from "react";
import {fireEvent, render, RenderResult} from "@testing-library/react";
import Menu, {MenuProps} from "./Menu";
import MenuItem from "./MenuItem";

const defaultMenuProps:MenuProps = {
  active: 0,
  onSelect: jest.fn()
}
const generateMenu = (props: MenuProps) => {
  return (
    <Menu {...defaultMenuProps}>
      <MenuItem name={0}>
        Tab1
      </MenuItem>
      <MenuItem name={1} disabled>
        Tab2
      </MenuItem>
      <MenuItem name={2}>
        Tab3
      </MenuItem>
    </Menu>
  )
}
let wrapper:RenderResult, tab1:HTMLElement, tab2:HTMLElement, tab3:HTMLElement
describe('测试menu组件', () => {
  beforeEach(() => {
    wrapper = render(generateMenu(defaultMenuProps))
    tab1 = wrapper.getByText('Tab1')
    tab2 = wrapper.getByText('Tab2')
    tab3 = wrapper.getByText('Tab3')
  })
  it('测试横向menu', () => {
    expect(tab1).toBeInTheDocument()
    expect(tab2).toBeInTheDocument()
    expect(tab3).toBeInTheDocument()
    expect(tab1).toHaveClass('menu-item active')
    expect(tab2).toHaveClass('menu-item disabled')
    expect(tab3).toHaveClass('menu-item')
    fireEvent.click(tab2)
    expect(tab2).not.toHaveClass('active')
    fireEvent.click(tab3)
    expect(tab3).toHaveClass('active')
    expect(tab1).not.toHaveClass('active')
  })
})
