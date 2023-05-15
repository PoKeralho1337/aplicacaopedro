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
      <footer></footer>
    </div>
  );
}

export default Contact;