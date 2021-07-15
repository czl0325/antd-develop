import React from 'react';
import './styles/index.scss';
import Button from "./components/button/Button";
import Menu from "./components/menu/Menu";
import MenuItem from "./components/menu/MenuItem";

function App() {
  return (
    <div className="App">
      <Button genre="default" size="lg">default</Button>
      <Button genre="primary" size="lg" disabled>primary</Button>
      <Button genre="warning" size="sm">warning</Button>
      <Button genre="info" size="sm">info</Button>
      <Button genre="danger" size="sm" onClick={()=>alert('danger')}>danger</Button>
      <br /><br /><br /><br /><hr /><br /><br /><br /><br />
      <Menu active={0} onSelect={(name)=>alert(name)}>
        <MenuItem name={0}>Tab1</MenuItem>
        <MenuItem name={1}>Tab2</MenuItem>
        <MenuItem name={2}>Tab3</MenuItem>
      </Menu>
    </div>
  );
}

export default App;
