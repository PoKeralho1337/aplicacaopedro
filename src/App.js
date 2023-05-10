import logo from './logo.svg';
import './App.css';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Home from './Home.js';
import Acessorios from './Acessorios.js';
import Vestuario from './Vestuario.js';
import Marcas from './Marcas.js';
import Lixa from './Lixa.js';
import Tabuas from './Tabuas.js';
import Rolamentos from './Rolamentos.js';
import Trucks from './Trucks.js';
import Rodas from './Rodas.js';
import Antix from './Antix.js';
import Independent from './Independent';
import Thrasher from './Thrasher';
import Vans from './Vans';
import Element from './Element';
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


import { Route, Routes } from 'react-router-dom';
import { Link } from 'react-router-dom';

function App() {
  return (
    <div>
      <header className="App-header nav__link">
        <Navbar bg="white" variant='white' expand="lg" >
            <Navbar.Brand href="#home" ></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link as={Link} to='/'><img src='/imagens/EspoSkate.png' width="260" heigh='260' ></img></Nav.Link>
                <NavDropdown title="SkateBoard" id="collasible-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">
                  <div>

                  </div>
                </NavDropdown.Item>
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
                <NavDropdown.Divider />
              </NavDropdown>
              <NavDropdown title="Vestuário" id="collasible-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">
                  <div>
                  </div>
                </NavDropdown.Item>
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
                <NavDropdown.Divider />
              </NavDropdown>
              <NavDropdown title="Acessórios" id="collasible-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">
                  <div>
                  </div>
                </NavDropdown.Item>
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
                    <img src='/imagens/capacete.jpg' width="60" heigh='60' ></img> Proteção
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
                <NavDropdown.Divider />
              </NavDropdown>
              </Nav>
              <Nav>
              <Nav.Link as={Link} to='/Login'><img src='/imagens/login.png' width="55" heigh='55' ></img></Nav.Link>
              <Nav.Link as={Link} to='/Carrinho'><img src='/imagens/carrinho.png' width="55" heigh='55' ></img></Nav.Link>
              </Nav>
            </Navbar.Collapse>
        </Navbar>


      </header>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Vestuario' element={<Vestuario />} />
        <Route path='/Acessorios' element={<Acessorios />} />
        <Route path='/Marcas' element={<Marcas />} />
        <Route path='/Tabuas' element={<Tabuas />} />
        <Route path='/Trucks' element={<Trucks />} />
        <Route path='/Rolamentos' element={<Rolamentos />} />
        <Route path='/Lixa' element={<Lixa />} />
        <Route path='/Rodas' element={<Rodas />} />
        <Route path='/Antix' element={<Antix />} />
        <Route path='/Polar' element={<Polar />} />
        <Route path='/Vans' element={<Vans />} />
        <Route path='/Element' element={<Element />} />
        <Route path='/Thrasher' element={<Thrasher />} />
        <Route path='/Independent' element={<Independent />} />
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

      </Routes>

    </div>
  );
}

export default App;
