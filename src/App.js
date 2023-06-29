import logo from './logo.svg';
import './App.css';
import './Noticias.css';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import 'boxicons/css/boxicons.min.css';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Home from './Home.js';
import Acessorios from './Acessorios.js';
import Marcas from './Marcas.js';
import Lixa from './Lixa.js';
import Tabuas from './Tabuas.js';
import Rolamentos from './Rolamentos.js';
import Trucks from './Trucks.js';
import Rodas from './Rodas.js';
import Antix from './Antix.js';
import Thrasher from './Thrasher';
import Polar from './Polar';
import Tshirt from './Tshirt';
import Hoodies from './Hoodies';
import Casacos from './Casacos';
import Calcas from './Calcas';
import Calcoes from './Calcoes';
import Sapatos from './Sapatos';
import Meias from './Meias';
import Gorros from './Gorros';
import Chapeus from './Chapeus';
import Protecao from './Protecao';
import Cintos from './Cintos';
import Ferramentas from './Ferramentas';
import Carrinho from './Carrinho';
import Login from './Login';
import Noticias from './Noticias';
import Contact from './Contact';
import Produto from './Produto';
import SignIn from './SignIn';
import AboutUs from './AboutUs';
import Privacidade from './Privacidade';
import Affiliate from './Affiliate';
import { Route, Routes } from 'react-router-dom';
import { Link } from 'react-router-dom';
import AffiliatePage from './Affiliate';
import React, { useState, useEffect } from 'react';
import ProductDetails from './Produto';
import UserPage from './User';

function App() {
  const [navbarFixed, setNavbarFixed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setNavbarFixed(true);
      } else {
        setNavbarFixed(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


  return (
    <div>
      <header className={`App-header nav__link ${navbarFixed ? 'fixed' : ''}`}>
        <Navbar bg="white" variant='white' expand="lg" >
            <Navbar.Brand href="#home" ></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link as={Link} to='/'><img src='/imagens/EspoSkate.png' width="240" heigh='240' ></img></Nav.Link>
                <NavDropdown title="SkateBoard" id="collasible-nav-dropdown" className="custom-toggle" noCaret>
                <NavDropdown.Item href="/Tabuas">
                  <div>
                    <img src='/imagens/icon.png' width="60" heigh='60' ></img>Tábuas
                  </div>
                </NavDropdown.Item>
                <NavDropdown.Item href="/Trucks">
                  <div>
                    <img src='/imagens/trucks.png' width="60" heigh='60' ></img>Trucks
                  </div>
                </NavDropdown.Item>
                <NavDropdown.Item href="/Rodas">
                  <div>
                    <img src='/imagens/rodas.png' width="60" heigh='60' ></img>Rodas
                  </div>
                </NavDropdown.Item>
                <NavDropdown.Item href="/Rolamentos">
                  <div>
                    <img src='/imagens/rolamentos.jpg' width="60" heigh='60' ></img>Rolamentos
                  </div>
                </NavDropdown.Item>
                <NavDropdown.Item href="/Lixa">
                  <div>
                    <img src='/imagens/lixa.png' width="60" heigh='60' ></img>Lixa
                  </div>
                </NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="Vestuário" id="collasible-nav-dropdown">
                <NavDropdown.Item href="/Tshirt">
                  <div>
                    <img src='/imagens/tshirt.png' width="60" heigh='60' ></img> T-shirts
                  </div>
                </NavDropdown.Item>
                <NavDropdown.Item href="/Hoodies">
                  <div>
                    <img src='/imagens/hoodie.png' width="60" heigh='60' ></img> Hoodies
                  </div>
                </NavDropdown.Item>
                <NavDropdown.Item href="/Casacos  ">
                  <div>
                    <img src='/imagens/casaco.png' width="60" heigh='60' ></img> Casacos
                  </div>
                </NavDropdown.Item>
                <NavDropdown.Item href="/Calcas">
                  <div>
                    <img src='/imagens/calças.png' width="60" heigh='60' ></img> Calças
                  </div>
                </NavDropdown.Item>
                <NavDropdown.Item href="/Calcoes">
                  <div>
                    <img src='/imagens/calçoes.png' width="60" heigh='60' ></img> Calções
                  </div>
                </NavDropdown.Item>
                <NavDropdown.Item href="/Sapatos">
                  <div>
                    <img src='/imagens/sapatos.png' width="60" heigh='60' ></img> Sapatos
                  </div>
                </NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="Acessórios" id="collasible-nav-dropdown">
                <NavDropdown.Item href="/Meias">
                  <div>
                    <img src='/imagens/meias.png' width="60" heigh='60' ></img> Meias
                  </div>
                </NavDropdown.Item>
                <NavDropdown.Item href="/Gorros">
                  <div>
                    <img src='/imagens/gorro.png' width="60" heigh='60' ></img> Gorros
                  </div>
                </NavDropdown.Item>
                <NavDropdown.Item href="/Chapeus">
                  <div>
                    <img src='/imagens/chapeu.png' width="60" heigh='60' ></img> Chapéus
                  </div>
                </NavDropdown.Item>
                <NavDropdown.Item href="/Protecao">
                  <div>
                    <img src='/imagens/capacete.jpg' width="60" heigh='60' ></img> Capacetes
                  </div>
                </NavDropdown.Item>
                <NavDropdown.Item href="/Cintos">
                  <div>
                    <img src='/imagens/cinto.png' width="60" heigh='60' ></img> Cintos
                  </div>
                </NavDropdown.Item>
                <NavDropdown.Item href="/Ferramentas">
                  <div>
                    <img src='/imagens/ferramenta.png' width="60" heigh='60' ></img> Ferramentas
                  </div>
                </NavDropdown.Item>
              </NavDropdown>
              </Nav>
              <Nav>
              <Nav.Link as={Link} to='/Login'><i class='bx bx-user'></i></Nav.Link>
              <Nav.Link as={Link} to='/Carrinho'><i class='bx bx-cart'></i></Nav.Link>
              </Nav>
            </Navbar.Collapse>
        </Navbar>

      </header>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Acessorios' element={<Acessorios />} />
        <Route path='/Marcas' element={<Marcas />} />
        <Route path='/Tabuas' element={<Tabuas />} />
        <Route path='/Trucks' element={<Trucks />} />
        <Route path='/Rolamentos' element={<Rolamentos />} />
        <Route path='/Lixa' element={<Lixa />} />
        <Route path='/Rodas' element={<Rodas />} />
        <Route path='/Antix' element={<Antix />} />
        <Route path='/Polar' element={<Polar />} />
        <Route path='/Thrasher' element={<Thrasher />} />
        <Route path='/Tshirt' element={<Tshirt />} />
        <Route path='/Hoodies' element={<Hoodies />} />
        <Route path='/Casacos' element={<Casacos/>} />
        <Route path='/Calcas' element={<Calcas />} />
        <Route path='/Calcoes' element={<Calcoes />} />
        <Route path='/Sapatos' element={<Sapatos />} />
        <Route path='/Meias' element={<Meias />} />
        <Route path='/Gorros' element={<Gorros />} />
        <Route path='/Chapeus' element={<Chapeus />} />
        <Route path='/Protecao' element={<Protecao />} />
        <Route path='/Cintos' element={<Cintos />} />
        <Route path='/Ferramentas' element={<Ferramentas />} />
        <Route path='/Carrinho' element={<Carrinho />} />
        <Route path='/Login' element={<Login />} />
        <Route path='/Noticias' element={<Noticias />} />
        <Route path='/Contact' element={<Contact />} />
        <Route path='/Produto' element={<Produto />} />
        <Route path='/SignIn' element={<SignIn />} />
        <Route path='/AboutUs' element={<AboutUs />} />
        <Route path='/Privacidade' element={<Privacidade />} />
        <Route path='/Affiliate' element={<Affiliate />} />
        <Route path='/Tshirt/:categoryId' element={<Tshirt />} />
        <Route path='/Tabuas/:categoryId' element={<Tabuas />} />
        <Route path='/Trucks/:categoryId' element={<Trucks />} />
        <Route path='/Rolamentos/:categoryId' element={<Rolamentos />} />
        <Route path='/Lixa/:categoryId' element={<Lixa />} />
        <Route path='/Rodas/:categoryId' element={<Rodas />} />
        <Route path='/Hoodies/:categoryId' element={<Hoodies />} />
        <Route path='/Casacos/:categoryId' element={<Casacos/>} />
        <Route path='/Calcas/:categoryId' element={<Calcas />} />
        <Route path='/Calcoes/:categoryId' element={<Calcoes />} />
        <Route path='/Sapatos/:categoryId' element={<Sapatos />} />
        <Route path='/Meias/:categoryId' element={<Meias />} />
        <Route path='/Gorros/:categoryId' element={<Gorros />} />
        <Route path='/Chapeus/:categoryId' element={<Chapeus />} />
        <Route path='/Protecao/:categoryId' element={<Protecao />} />
        <Route path='/Cintos/:categoryId' element={<Cintos />} />
        <Route path='/Ferramentas/:categoryId' element={<Ferramentas />} />
        <Route path="/Produto/:id" element={<ProductDetails />} />
        <Route path="/User" element={<UserPage/>} />
      </Routes>

    </div>
  );
}

export default App;
