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
        <body className='App-body'>
        <div>
          <video autoPlay loop muted width="100%" className='banner'>
            <source src='./imagens/video1.mp4' type="video/mp4" />
          </video>
          <div className='banner-overlay'>
          </div>
        </div>
        </body>
        <footer> </footer>
        
      </div>
    );
  }
export default Home;
