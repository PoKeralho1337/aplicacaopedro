import './App.css';
import Button from 'react-bootstrap/Button';
import React, {useState} from 'react';

function Carrinho() {

  const [count, setCount] = useState(0);

  const increase = () => setCount(count + 1);

  return (
    <div className="App">
      <header className="App-header">

      </header>
      <body>
        <p>{count}</p>
        <Button onClick={increase} variant='primary'>click me</Button>
      </body>
      <footer>

      </footer>
    </div>
  );
}

export default Carrinho;
