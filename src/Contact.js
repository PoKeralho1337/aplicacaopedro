import './App.css';
import Button from 'react-bootstrap/Button';
import React, { useState } from 'react';
import emailjs from 'emailjs-com';

function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');

  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm('service_7hh1l6d', 'template_nmo5khq', e.target, 'y7z463YXSwlXxnZKm')
      .then(
        (result) => {
          console.log(result.text);
          alert('O email foi enviado com sucesso!');
        },
        (error) => {
          console.log(error.text);
          alert('Falha ao mandar o email, tente novamente mais tarde.');
        }
      );
  }

  return (
    <div className="App">
      <header className="App-header"></header>
      <body className="App-body fundo">
        <section className="area-login">
          <div className="login">
            <div>
              <img src="/imagens/EspoSkate.png" alt="Logo" />
            </div>
            <form onSubmit={sendEmail}>
              <input
                type="text"
                name="name"
                placeholder="O seu nome"
                autoFocus
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <input
                type="email"
                name="email"
                placeholder="Endereço Email"
                autoFocus
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                type="text"
                name="phone"
                placeholder="Numero Telemóvel"
                autoFocus
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
              <textarea
                id="message"
                name="message"
                rows="4"
                placeholder="Como é que o podemos ajudar?"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              ></textarea>
              <input type="submit" value="Enviar" />
            </form>
          </div>
        </section>
      </body>
      <footer></footer>
    </div>
  );
}

export default Contact;

