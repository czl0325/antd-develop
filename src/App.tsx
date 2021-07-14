import React from 'react';
import './styles/index.scss';
import Button from "./components/button/Button";

function App() {
  return (
    <div className="App">
      <Button type="default" size="lg">default</Button>
      <Button type="primary" size="lg" disabled>primary</Button>
      <Button type="warning" size="sm">warning</Button>
      <Button type="info" size="sm">info</Button>
      <Button type="danger" size="sm">danger</Button>
    </div>
  );
}

export default App;
