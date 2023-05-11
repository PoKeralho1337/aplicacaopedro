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

        </body>




    );
}
export default Noticias;