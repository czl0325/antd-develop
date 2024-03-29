import React, {useState} from 'react';
import './styles/index.scss';
import Button from "./components/button/Button";
import Menu from "./components/menu/Menu";
import MenuItem from "./components/menu/MenuItem";
import SubMenuItem from "./components/menu/SubMenuItem";
import Icon from "./components/icon/Icon"
import Input from "./components/input/Input";
import AutoComplete from "./components/autocomplete/AutoComplete";

function App() {
  const [inputValue, setInputValue] = useState('123')
  return (
    <div className="App">
      <Button genre="default" size="lg">default</Button>
      <Button genre="primary" size="lg" disabled>primary</Button>
      <Button genre="warning" size="sm">warning</Button>
      <Button genre="info" size="sm">info</Button>
      <Button genre="danger" size="sm" onClick={()=>alert('danger')}>danger</Button>
      <br /><hr /><br />
      <Menu active={0} onSelect={(name)=>alert(name)}>
        <MenuItem name={0}>Tab1</MenuItem>
        <MenuItem name={1}>Tab2</MenuItem>
        <MenuItem name={2}>Tab3</MenuItem>
        <SubMenuItem name={3} title="Tab4">
          <MenuItem name="4-1">4-1</MenuItem>
          <MenuItem name="4-2">4-2</MenuItem>
          <MenuItem name="4-3">4-3</MenuItem>
        </SubMenuItem>
      </Menu>
      <Menu active={0} direction='vertical' style={{width: '200px'}}>
        <MenuItem name={0} >Tab1</MenuItem>
        <MenuItem name={1}>Tab2</MenuItem>
        <SubMenuItem name={2} title="Tab3">
          <MenuItem name="3-1">3-1</MenuItem>
          <MenuItem name="3-2">3-2</MenuItem>
          <MenuItem name="3-3">3-3</MenuItem>
        </SubMenuItem>
        <MenuItem name={3}>Tab4</MenuItem>
      </Menu>
      <Icon icon="coffee" size="lg" theme="primary"/>
      <Input prefix="前缀" suffix="后缀" icon="coffee" placeholder="请输入..." value={inputValue} onChange={(e)=>setInputValue(e.target.value)}/>
      <span>输入框的值是：{inputValue}</span>
      <AutoComplete />
    </div>
  );
}

export default App;
