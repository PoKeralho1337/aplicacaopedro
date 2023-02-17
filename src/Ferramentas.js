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

function Ferramentas() {

  var data = require('./Ferramentas.json');

  return (
    <div className="App">
      <header className="App-header">

      </header>
      <body className='App-body App-Card.Body App-listar'>
        <ul>
          <Container>
          <Row xs= {1} md={4}>
          {
            data.Independent.map(item => (
              <li key={item.id}> 
                <Figure>
                  <Figure.Image
                    className='img'
                    width={200}
                    height={200}
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
              </li>
            ))
          }
          {
            data.Pig.map(item => (
              <li key={item.id}> 
                <Figure>
                  <Figure.Image
                    width={200}
                    height={200}
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
              </li>
            ))
          }
           {
            data.Silver.map(item => (
              <li key={item.id}> 
                <Figure>
                  <Figure.Image
                    width={200}
                    height={200}
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
              </li>
            ))
          }
          {
            data.Spitfire.map(item => (
              <li key={item.id}> 
                <Figure>
                  <Figure.Image
                    width={200}
                    height={200}
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
              </li>
            ))
          }
            {
            data.SkateDeluxe.map(item => (
              <li key={item.id}> 
                <Figure>
                  <Figure.Image
                    width={200}
                    height={200}
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

export default Ferramentas;