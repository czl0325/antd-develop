import React from 'react';
import './styles/index.scss';
import Button from "./components/button/Button";

function App() {
  return (
    <div className="App">
      <Button genre="default" size="lg">default</Button>
      <Button genre="primary" size="lg" disabled>primary</Button>
      <Button genre="warning" size="sm">warning</Button>
      <Button genre="info" size="sm">info</Button>
      <Button genre="danger" size="sm" onClick={()=>alert('danger')}>danger</Button>
    </div>
  );
}

export default App;
