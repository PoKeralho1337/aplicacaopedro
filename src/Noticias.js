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
            <h2>Skatista brasileiro vence campeonato mundial</h2>
            <p>Descrição da notícia...</p>
          </div>
  
          <div className="news-item">
            <h2>Novo parque de skate é inaugurado na cidade</h2>
            <img src='/imagens/gustavo.jpg'/>
            <p>Descrição da notícia...</p>
          </div>
  
          <div className="news-item">
            <h2>Skateboarder profissional lança novo modelo de shape</h2>
            <p>Descrição da notícia...</p>
          </div>
  
          {/* Adicione mais notícias aqui */}
  
        </div>
      </div>



    );
}
export default Noticias;