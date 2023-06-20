import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import { Link } from "react-router-dom";
import './App.css';
import Button from 'react-bootstrap/Button';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Figure from 'react-bootstrap/Figure';

function Thrasher() {

  var data = require('./Hoodies.json');

  return (
    <div className="App">
      <header className="App-header">

      </header>
      <body className='App-body'>
        <ul>
          <Container>
          <Row xs= {1} md={4}>
          {
            data.Thrasherhoodies.map(item => (
              <li key={item.id}> 
              <Link to={`/Produto/${item.id}`} className="productLink">
                <Figure>
                  <Figure.Image
                    width={350}
                    height={350}
                    src={item.imgsrc}
                  />
                  <Figure.Caption>
                  </Figure.Caption>
                </Figure>
                <h1>
                  {item.brand}
                </h1>
                <h5> 
                  {item.model}
                </h5>
                <p2> 
                  {item.price}
                </p2>
                </Link>
              </li>
            ))
          }
          </Row>
          </Container>
        </ul>
      </body>
      <footer>

      </footer>
    </div>
  );
}

export default Thrasher;