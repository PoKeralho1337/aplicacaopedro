import { Link } from 'react-router-dom';
import './App.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'



function Home   () {
    return (
      <div className="App">
        <header className="App-header">
         
        </header>
        <body>
          <section class="home" id="home">
            <div class="home-text">
              <h1>Noticias <span>Ler mais</span></h1>
              <p>Portugal faz história</p>
              <a href='#' class="btn">Ver noticias</a>

            </div>
          </section>
        </body>
        <footer> </footer>
        
      </div>
    );
  }
export default Home;
