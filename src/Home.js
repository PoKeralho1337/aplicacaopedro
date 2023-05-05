import { Link } from 'react-router-dom';
import './App.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'



function Home   () {
    return (
      <div className="App">
        <header className="App-header">
         <link rel="stylesheet"
          href="https://unpkg.com/boxicons@latest/css/boxicons.min.css"/>
          <link rel='preconnect'
          href='https://fonts.googleapis.com'/>
          <link rel='preconnect'
          href='https://fonts.gstatic.com' crossorigin/>
          <link href='https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;500;600;700;800&display=swap' rel="stylesheet"/>        
        </header>
        <body>
          <section class="home" id="home">
            <div class="home-text">
              <h1>Noticias <span>Ler mais</span></h1>
              <p>Portugal faz história</p>
              <a href='#' class="btn">Ver noticias</a>
            </div>
          </section>
          <section class="newcollection" id="newcollection">
            <div class='center-text'>
              <h2>Nova Coleção</h2>
            </div> 
            <div class="newcollection-content">
              <div class="row">
                <img src='/imagens/polarcalcas1.png'/>
              </div>

            </div>
          </section>
          <section class="contact" id='contact'>
            <div class="main-contact">
              <h3>Classix</h3>
              <h5>Lets Connect With Us</h5>
              <div class="icon">
                <a href='https://www.instagram.com/esposendeskate/'><img src='/imagens/instagram.png' width={40} height={40}></img></a>
                <a href='https://twitter.com/EsposendeSkate'><img src='/imagens/twitter.png'width={40} height={40}></img></a>
                <a href='https://www.facebook.com/profile.php?id=100092639252098'><img src='/imagens/facebook.png'width={40} height={40}></img></a>
              </div>

            </div>

          </section>
          <script src='src/script.js'></script>
        </body>
        <footer> </footer>
        
      </div>
    );
  }
export default Home;
