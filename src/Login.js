import './login.css';
import Button from 'react-bootstrap/Button';
import React, { useState, useEffect } from 'react';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  //useEffect(() => {
    //if (localStorage.getItem('isLoggedIn') === 'true') {
      //window.location.href = '/';
    //}
 // }, []);

  const handleLogin = (event) => {
    event.preventDefault();

    if (username === localStorage.getItem('username') && password === localStorage.getItem('password')) {
      localStorage.setItem('isLoggedIn', 'true');
      window.location.href = '/Home';
    } else {
      alert('Nome de usuário ou senha inválidos');
    }
  };

  return (
    <div className="App">
      <header className="App-header"></header>
      <body className="App-body fundo">
        <section className="area-login">
          <div className="login">
            <div>
              <img src="/imagens/EspoSkate.png"></img>
            </div>
            <form onSubmit={handleLogin}>
              <input
                type="text"
                name="nome"
                placeholder="Nome de utilizador"
                autoFocus
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              ></input>
              <input
                type="password"
                name="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              ></input>
              <input type="submit" value="Entrar"></input>
            </form>
            <p>
              Não tem conta?<a href="/SignIn">Criar Conta</a>
            </p>
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
              <h4>Suporte</h4>
              <a href='./Contact'>Contacta-nos</a>
              <p> </p>
              <a href='./Privacidade'>Privacidade</a>

            </div>
            <div class="fourth-info">
              <h4>Empresa</h4>
              <a href='./AboutUs'>Sobre</a>
              <p> </p>
              <a href='./Login'>Login</a>

            </div>
            <div class="five">
              <h4>Subscreve</h4>
              <p>Receba atualizações,Descontos, altas promoções no seu email</p>
              <p>Receive updates, discounts, high promotions in your email</p>
              <p>Recevez des mises à jour, des réductions, des promotions élevées dans votre e-mail</p>

            </div>
          </div>
        </section>
      </body>
      <footer> </footer>
    </div>
  );
}


export default Login;
