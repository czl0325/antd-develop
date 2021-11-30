import React, {ChangeEvent, CSSProperties} from "react";
import Input from "../input/Input";
import Transition from "../transition/Transition";

export interface AutoCompleteProps {
  className?: string;
  style?: CSSProperties;
  inputValue?: string;
}

const AutoComplete: React.FC<AutoCompleteProps> = (props) => {
  const {className, style, inputValue} = props
  const handleChange = (e:ChangeEvent<HTMLInputElement>) => {

  }
  const generateDropdown = () => {
    return (
      <Transition timeout={300} >

      </Transition>
    )
  }
  return (
    <div className="auto-complete-wrapper">
      <Input value={inputValue} onChange={handleChange}/>
      <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
      </ul>
    </div>
  )
}

AutoComplete.defaultProps = {}

export default AutoComplete
