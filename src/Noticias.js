import { Link } from 'react-router-dom';
import './App2.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Noticias() {
    return (
        <body>
            <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&family=Raleway:wght@300;400;500;700;900&display=swap" rel='stylesheet'/>
            <script src='https://kit.fontawesome.com/dbed6b6114.js' crossOrigin='anonymous'></script>
            <section class="banner">
                <div class="banner-main-content">
                    <h2>Receba as maiores noticias do mundo so Skate!</h2>
                    <h3>Maior site de noticias</h3>

                    <div class="current-news-head">
                        <h3>Gustavo Ribeiro novo campeão do mundo.</h3>

                        <h3>Brasileira de 13 anos conquista novo titulo.</h3>

                        <h3>O skate para pessoas de meia-idade os ajuda a enfrentar problemas de saúde, se relacionar com seus filhos e lidar com desafios pessoais,descobriu um estudo.</h3>

                        
                    </div>
                </div>

                <div class="banner-sub-content">
                    <div class="hot-topic">
                        <img src='imagens/home.png' alt=""/>

                        <div class="hot-topic-content">
                            <h2>Gustavo Ribeiro novo campeão do mundo</h2>
                            <h3>Brasileira de 13 anos conquista novo titulo</h3>
                            <p>O skate para pessoas de meia-idade os ajuda a enfrentar problemas de saúde, se relacionar com seus filhos e lidar com desafios pessoais,descobriu um estudo</p>
                            <a href='#'>ler mais</a>
                        </div>

                    </div>

                    <div class="hot-topic">
                        <img src='imagens/home.png' alt=''/>

                        <div class="hot-topic-content">
                            <h2>Gustavo Ribeiro novo campeão do mundo</h2>
                            <h3>Brasileira de 13 anos conquista novo titulo</h3>
                            <p>O skate para pessoas de meia-idade os ajuda a enfrentar problemas de saúde, se relacionar com seus filhos e lidar com desafios pessoais,descobriu um estudo</p> 
                            <a href="#">ler mais</a>
                        </div>

                    </div>
                    <div class="hot-topic">
                        <img src='imagens/home.png' alt=''/>

                        <div class="hot-topic-content">
                            <h2>Gustavo Ribeiro novo campeão do mundo</h2>
                            <h3>Brasileira de 13 anos conquista novo titulo</h3>
                            <p>O skate para pessoas de meia-idade os ajuda a enfrentar problemas de saúde, se relacionar com seus filhos e lidar com desafios pessoais,descobriu um estudo</p> 
                            <a href="#">ler mais</a>
                        </div>

                    </div>
                    <div class="hot-topic">
                        <img src='imagens/home.png' alt=''/>

                        <div class="hot-topic-content">
                            <h2>Gustavo Ribeiro novo campeão do mundo</h2>
                            <h3>Brasileira de 13 anos conquista novo titulo</h3>
                            <p>O skate para pessoas de meia-idade os ajuda a enfrentar problemas de saúde, se relacionar com seus filhos e lidar com desafios pessoais,descobriu um estudo</p> 
                            <a href="#">ler mais</a>
                        </div>

                    </div>
                </div>
            </section>

            <main>
                <section class="main-container-left">
                    <h2>Top Stories</h2>
                    <div class="container-top-left">
                        <article>
                            <img src='imagens/home.png'/>
                            <div>
                                <h3>Melhores Skatistas do mundo segundo estatisticas</h3>
                                <p>Tony Hawk,Bob Burnquist,Rodney Mullen,Danny Way,Nyjah Huston,Ryan Sheckler,Bucky Lasek,Paul Rodriguez.</p>
                            </div>
                        </article>
                    </div>
                    <div class="container-bottom-left">
                        <article> 
                            <img src='imagens/home.png'/>
                            <div>
                                <h3>Melhores tabuas de skate</h3>
                                <p>As melhores marcas de skate sao, Santa Cruz, Baker, Flip, Element, Jart, Trasher, Vans</p>
                            </div>
                        </article>

                        <article> 
                            <img src='imagens/home.png'/>
                            <div>
                                <h3>Melhores momentos de 2023</h3>
                                <p>As melhores marcas de skate sao, Santa Cruz, Baker, Flip, Element, Jart, Trasher, Vans</p>
                            </div>
                        </article>
                    </div>
                </section>
            </main>
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
              <p>Contact Us</p>
              <p>Siz Guide</p>
              <p>Privacy</p>

            </div>
            <div class="thirds-info">
              <h4>Support</h4>
              <p>Contact Us</p>
              <p>Siz Guide</p>
              <p>Privacy</p>

            </div>
            <div class="fourth-info">
              <h4>Company</h4>
              <p>About</p>
              <p>Affiliate</p>
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
        </body>




    );
}
export default Noticias;