import { Link } from 'react-router-dom';
import './Noticias.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Noticias() {
    return (
        <div className="noticias-container body2 ">
        <h1>Notícias de Skate</h1>
  
        <div className="news-container">
          <div className="news-item">
            <h2>Skatista brasileira vence campeonato mundial</h2>
            <center>
            <img src='/imagens/skatistabrasileira.png' height={200} />
            </center> <br></br>
            <p>A skatista brasileira Leticia Bufoni entrou mais uma vez para o Guinness World Records, o Livro dos Recordes, por suas conquistas no X-Games, principal competição mundial na categoria de esportes radicais.</p>
          </div>
  
          <div className="news-item">
            <h2>Novo parque de skate é inaugurado na cidade</h2>
            <center>
            <img src='/imagens/skatepark.jpg' height={200}/>
            </center> <br></br>
            <p>Abriu ao público este sábado um novo skate parque no Campo do Castelo, em Vila Praia de Âncora, um projeto que obteve apoio de fundos europeus.</p>
          </div>
  
          <div className="news-item">
            <h2>Gustavo Ribeiro Campeão Mundial</h2>
            <center> 
            <img src='/imagens/home.png' height={200}/>
            </center> <br></br>
            <p>O português Gustavo Ribeiro arrebatou, no Rio de Janeiro, a “Super Crown”, etapa decisiva da edição de 2022 da “Street League”, circuito mundial da modalidade.</p>
          </div>

          <div className="news-item">
            <h2>Skateboarder profissional lança novo modelo de shape</h2>
            <center> 
            <img src='/imagens/skate4.jpg' height={200}/>
            </center> <br></br>
            <p>Tom Henderson apareceu novamente em finais de Junho de 2022 para relatar que espera uma revelação para o Skate 4 a chegar em Julho de 2022, fixando o jogo para uma janela de lançamento de 2023 e, esperemos, mostrando os primeiros vislumbres da jogabilidade polida, por isso, fique atento a isso.</p>
          </div>
  
        </div>
        <section class="contact">
          <div class="contact-info">
            <div class="first-info">
              <img src='/imagens/EspoSkate.png'/> <br/>

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
      </div>



    );
}
export default Noticias;