import { Link } from 'react-router-dom';
import './Produtos.css';
import './App';
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
            <span>Bem-Vindo Ao</span> 
            <h1>EspoSkate</h1>
            <h2>Melhor Loja Online<br></br>De Skates</h2>
            <a href='' className="my-btn">Continuar</a>
          </div>
          <div class="home-img">
            <img src='imagens/home.png'></img>
          </div>
        </section>

        <section class="trending-product" id="trending">
          <div class="center-text">
            <h1>Nova <span>Coleção</span></h1>
          </div>

          <div class="products">
            <Container>
            <Row>
              <Col>
              <table>
            <div className='box1'>
            <div class="imagens-box1">
              <img src='imagens/adidascasacos3.png' alt=""/>
              <div class="product-text">
              </div>
            </div>
            <div className='bottom'>
              <h4>Casaco Adidas</h4>
              <p>76$</p>
            </div>
            </div>
            </table>
            </Col>
            <Col>
            <table>
            <div className='box1'>
            <div class="imagens-box1">
              <img src='imagens/antixcalcas2.png' alt=""/>
              <div class="product-text">
              </div>
            </div>
            <div class="bottom">
              <h4>Calcas Antix</h4>
              <p>87$</p>
            </div>
            </div>
            </table>
            </Col>
            <Col>
            <table>
            <div className='box1'>
            <div class="imagens-box1">
              <img src='imagens/rellcalcoes1.png' alt=""/>
              <div class="product-text">
              </div>
            </div>
            <div class="bottom">
              <h4>Sapatos Nike</h4>
              <p>60$</p>
            </div>
            </div>
            </table>
            </Col>
            </Row>
            <Row>
            <Col>
            <table>
            <div className='box1'>
            <div class="imagens-box1">
              <img src='imagens/jart3.png'/>
              <div class="product-text">
              </div>
            </div>
            <div class="bottom">
              <h4>Tábua Jart</h4>
              <p>120$</p>
            </div>
            </div>
            </table>
            </Col>
            <Col>
            <table>
            <div className='box1'>
            <div class="imagens-box1">
              <img src='imagens/jart1.png' alt=""/>
              <div class="product-text">
              </div>
            </div>
            <div class="bottom">
              <h4>Tábua Jart</h4>
              <p>120$</p>
            </div>
            </div>
            </table>
            </Col>
            <Col>
            <table>
            <div className='box1'>
            <div class="imagens-box1">
              <img src='imagens/jart2.png' alt=""/>
              <div class="product-text">
              </div>
            </div>
            <div class="bottom">
              <h4>Tábua Jart</h4>
              <p>120$</p>
            </div>
            </div>
            </table>
            </Col>
            </Row>
            </Container>       
          </div>

        </section>

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
              <h4>Support</h4>
              <a href='./Contact'>Contact Us</a>
              <p> </p>
              <a href='./Privacidade'>Privacy</a>

            </div>
            <div class="fourth-info">
              <h4>Company</h4>
              <a href='./AboutUs'>About</a>
              <p> </p>
              <a href='./Login'>Login</a>

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
