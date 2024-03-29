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

function Casacos() {

  var data = require('./Casacos.json');

  return (
    <div className="App">
      <header className="App-header">

      </header>
      <body className='App-body'>
        <ul className='productList'>
          <Container>
            <Row xs={1} md={4} className="row-2">
              {
                data.Adidas.map(item => (
                  <li key={item.id} className="productCard">
                    <Link to={`/Produto/${item.id}`} className="productLink">
                    <Figure>
                      <Figure.Image
                        width={250}
                        height={250}
                        src={item.imgsrc}
                        className="productImage"
                      />
                      <Figure.Caption>
                      </Figure.Caption>
                    </Figure>
                    <h1 className="productName">
                      {item.brand}
                    </h1>
                    <h5>
                      {item.name}
                    </h5>
                    <p2 className="productPrice"> 
                      {item.price}
                    </p2>
                    </Link>
                  </li>
                ))
              }
              {
                data.Antix.map(item => (
                  <li key={item.id} className="productCard">
                    <Link to={`/Produto/${item.id}`} className="productLink">
                    <Figure>
                      <Figure.Image
                        width={250}
                        height={250}
                        src={item.imgsrc}
                        className="productImage"
                      />
                      <Figure.Caption>
                      </Figure.Caption>
                    </Figure>
                    <h1 className="productName">
                      {item.brand}
                    </h1>
                    <h5>
                      {item.name}
                    </h5>
                    <p2 className="productPrice">
                      {item.price}
                    </p2>
                    </Link>
                  </li>
                ))
              }
              {
                data.Carhartt.map(item => (
                  <li key={item.id} className="productCard">
                    <Link to={`/Produto/${item.id}`} className="productLink">
                    <Figure>
                      <Figure.Image
                        width={250}
                        height={250}
                        src={item.imgsrc}
                        className="productImage"
                      />
                      <Figure.Caption>
                      </Figure.Caption>
                    </Figure>
                    <h1 className="productName">
                      {item.brand}
                    </h1>
                    <h5>
                      {item.name}
                    </h5>
                    <p2 className="productPrice">
                      {item.price}
                    </p2>
                    </Link>
                  </li>
                ))
              }
              {
                data.Dickies.map(item => (
                  <li key={item.id} className="productCard">
                    <Link to={`/Produto/${item.id}`} className="productLink">
                    <Figure>
                      <Figure.Image
                        width={250}
                        height={250}
                        src={item.imgsrc}
                        className="productImage"
                      />
                      <Figure.Caption>
                      </Figure.Caption>
                    </Figure>
                    <h1 className="productName">
                      {item.brand}
                    </h1>
                    <h5>
                      {item.name}
                    </h5>
                    <p2 className="productPrice">
                      {item.price}
                    </p2>
                    </Link>
                  </li>
                ))
              }
               {
                data.Element.map(item => (
                  <li key={item.id} className="productCard">
                    <Link to={`/Produto/${item.id}`} className="productLink">
                    <Figure>
                      <Figure.Image
                        width={250}
                        height={250}
                        src={item.imgsrc}
                        className="productImage"
                      />
                      <Figure.Caption>
                      </Figure.Caption>
                    </Figure>
                    <h1 className="productName">
                      {item.brand}
                    </h1>
                    <h5>
                      {item.name}
                    </h5>
                    <p2 className="productPrice">
                      {item.price}
                    </p2>
                    </Link>
                  </li>
                ))
              }
              {
                data.Nike.map(item => (
                  <li key={item.id} className="productCard">
                    <Link to={`/Produto/${item.id}`} className="productLink">
                    <Figure>
                      <Figure.Image
                        width={250}
                        height={250}
                        src={item.imgsrc}
                        className="productImage"
                      />
                      <Figure.Caption>
                      </Figure.Caption>
                    </Figure>
                    <h1 className="productName">
                      {item.brand}
                    </h1>
                    <h5>
                      {item.name}
                    </h5>
                    <p2 className="productPrice">
                      {item.price}
                    </p2>
                    </Link>
                  </li>
                ))
              }
              {
                data.TheNorthFace.map(item => (
                  <li key={item.id} className="productCard">
                    <Link to={`/Produto/${item.id}`} className="productLink">
                    <Figure>
                      <Figure.Image
                        width={250}
                        height={250}
                        src={item.imgsrc}
                        className="productImage"
                      />
                      <Figure.Caption>
                      </Figure.Caption>
                    </Figure>
                    <h1 className="productName">
                      {item.brand}
                    </h1>
                    <h5>
                      {item.name}
                    </h5>
                    <p2 className="productPrice">
                      {item.price}
                    </p2>
                    </Link>
                  </li>
                ))
              }
            </Row>
          </Container>
        </ul>
        <section class="contact">
          <div class="contact-info">
            <div class="first-info">
              <img src='/imagens/EspoSkate.png'/> <br></br>

              <a href='https://www.google.com/maps/place/C%C3%A2mara+Municipal+de+Esposende/@41.5314358,-8.7801767,18.96z/data=!4m14!1m7!3m6!1s0xd244bba6d8c44a1:0xd3bfe8a5d9eb0d42!2sC%C3%A2mara+Municipal+de+Esposende!8m2!3d41.531351!4d-8.7806344!16s%2Fg%2F1tfjmdhm!3m5!1s0xd244bba6d8c44a1:0xd3bfe8a5d9eb0d42!8m2!3d41.531351!4d-8.7806344!16s%2Fg%2F1tfjmdhm'>Praça do Município,<br />4740-223 Esposende</a>
              <p>966 597 688</p>
              <p>esposkate05@gmail.com</p>

              <div class="social-icon">
                <a href="https://www.facebook.com/profile.php?id=100092639252098"><i class='bx bxl-facebook'></i></a>
                <a href="https://www.instagram.com/esposendeskate/"><i class='bx bxl-instagram-alt' ></i></a>
                <a href="https://twitter.com/EsposendeSkate"><i class='bx bxl-twitter' ></i></a>
              </div>

            </div>
            <div class="second-info">
              <h4>Suporte</h4>
              <a href='./Contact'>Contacta-nos</a>
              <p> </p>
              <a href='./Privacidade'>Privacidade</a>

            </div>
            <div class="fourth-info">
              <h4>Empresa</h4>
              <a href='./AboutUs'>Sobre</a>
              <p> </p>
              <a href='./Login'>Login</a>

            </div>
            <div class="five">
              <h4>Subscreve</h4>
              <p>Receba atualizações,Descontos, altas promoções no seu email</p>
              <p>Receive updates, discounts, high promotions in your email</p>
              <p>Recevez des mises à jour, des réductions, des promotions élevées dans votre e-mail</p>

            </div>
          </div>
        </section>
      </body>
      <footer>

      </footer>
    </div>
  );
}

export default Casacos;