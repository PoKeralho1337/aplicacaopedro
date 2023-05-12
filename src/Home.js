import { Link } from 'react-router-dom';
import './App.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'



function Home() {
  return (
    <div className="App">
      <header className="App-header">
        <link rel="stylesheet"
          href="https://unpkg.com/boxicons@latest/css/boxicons.min.css" />
        <link rel='preconnect'
          href='https://fonts.googleapis.com' />
        <link rel='preconnect'
          href='https://fonts.gstatic.com' crossorigin />
        <link href='https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;500;600;700;800&display=swap' rel="stylesheet" />
      </header>
      <body class="corfundo">
        <section class="home" id="home">
          <div class="home-text">
            <h1>Noticias <span>Ler mais</span></h1>
            <p>Portugal faz história</p>
            <a href='/Noticias' class="btn">Ver noticias</a>
          </div>
        </section>

        <section class="trending-product" id="trending">
          <div class="center-text">
            <h2>Nova <span>Coleção</span></h2>
          </div>

          <div class="products">
            <div class="row">
              <img src='imagens/adidascasacos3.png' alt=""/>
              <div class="product-text">
                <h5>Novo</h5>
              </div>
            </div>
            <div class="price">
              <h4>Casaco Adidas</h4>
              <p>76$</p>

            </div>

            <div class="row">
              <img src='imagens/antixcalcas2.png' alt=""/>
              <div class="product-text">
                <h5>Novo</h5>
              </div>
            </div>
            <div class="price">
              <h4>Calcas Antix</h4>
              <p>87$</p>

            </div>

            <div class="row">
              <img src='imagens/rellcalcoes1.png' alt=""/>
              <div class="product-text">
                <h5>Novo</h5>
              </div>
            </div>
            <div class="price">
              <h4>Sapatos Nike</h4>
              <p>60$</p>

            </div>

            <div class="row">
              <img src='imagens/jart3.png' alt=""/>
              <div class="product-text">
                <h5>Novo</h5>
              </div>
            </div>
            <div class="price">
              <h4>Tábua Jart</h4>
              <p>120$</p>

            </div>

            <div class="row">
              <img src='imagens/jart1.png' alt=""/>
              <div class="product-text">
                <h5>Novo</h5>
              </div>
            </div>
            <div class="price">
              <h4>Tábua Jart</h4>
              <p>120$</p>

            </div>

            <div class="row">
              <img src='imagens/jart2.png' alt=""/>
              <div class="product-text">
                <h5>Novo</h5>
              </div>
            </div>
            <div class="price">
              <h4>Tábua Jart</h4>
              <p>120$</p>

            </div>



            
          </div>

        </section>

        <section class="contact">
          <div class="contact-info">
            <div class="first-info">
              <img src='/imagens/EspoSkate.png'/>

              <p>Praça do Município,<br />4740-223 Esposende</p>
              <p>966 597 688</p>
              <p>esposkate05@gmail.com</p>

              <div class="social-icon">
                <a href="https://www.facebook.com/profile.php?id=100092639252098"><i class='bx bxl-facebook'></i></a>
                <a href="https://www.instagram.com/esposendeskate/"><i class='bx bxl-instagram-alt' ></i></a>
                <a href="https://twitter.com/EsposendeSkate"><i class='bx bxl-twitter' ></i></a>
              </div>

            </div>
            <div class="second-info">
              <h4>Support</h4>
              <a href='./Contact'>Contact Us</a>
              <p>Siz Guide</p>
              <p>Privacy</p>

            </div>
            <div class="fourth-info">
              <h4>Company</h4>
              <p>About</p>
              <p>Affiliate</p>
              <p>Login</p>

            </div>
            <div class="five">
              <h4>Subscribe</h4>
              <p>Receba atualizações,Descontos, altas promoções no seu email</p>
              <p>Receive updates, discounts, high promotions in your email</p>
              <p>Recevez des mises à jour, des réductions, des promotions élevées dans votre e-mail</p>

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
