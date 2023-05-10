import { Link } from 'react-router-dom';
import './App2.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Noticias() {
    return (
        <body>
            <section class="banner">
                <div class="banner-main-content">
                    <h2>Receba as maiores noticias do mundo so Skate!</h2>
                    <h3>Maior site de noticias</h3>

                    <button>    
                        <a href="#">Sabe mais</a>
                    </button>

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
                </div>
            </section>

        </body>




    );
}
export default Noticias;