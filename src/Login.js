import './App.css';
import Button from 'react-bootstrap/Button';
import React, {useState} from 'react';

function Login() {

  return (
    <div className="App">
      <header className="App-header">
       
      </header>
      <body className='App-body'>
        <section class='area-login'>
          <div class="login">
            <div>
              <img src='/imagens/EspoSkate.png'></img>
            </div>
            <form method='POST'>
              <input type="text" name='nome' placeholder="Nome de utilizador" autoFocus></input>
              <input type="password" name='password' placeholder="Password" autoFocus></input>
              <input type="submit" value="Entrar"></input>
            </form>
            <p>Não tem conta?<a href="#">Criar Conta</a></p>
          </div>
      </section>
      </body>
      <footer> </footer>
    </div>
  );
}


export default Login;
