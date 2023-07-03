import React, { useState } from 'react';

function Checkout() {
  const [cardNumber, setCardNumber] = useState('');
  const [cardHolderName, setCardHolderName] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCvv] = useState('');
  const [address, setAddress] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log('Dados do formulário:', { cardNumber, cardHolderName, expiryDate, cvv, address, phoneNumber, email });
    // Redirecionar ou realizar outras ações necessárias após o envio do formulário.
  };

  return (
    <div classname="corfundo">
      <div className="center-text">
        <h1 className="uppercase">Checkout</h1>
      </div>
      <form className="checkout-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="cardNumber">Número do Cartão:</label>
          <input
            type="text"
            id="cardNumber"
            value={cardNumber}
            onChange={(e) => setCardNumber(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="cardHolderName">Nome do Titular:</label>
          <input
            type="text"
            id="cardHolderName"
            value={cardHolderName}
            onChange={(e) => setCardHolderName(e.target.value)}
            required
          />
        </div>
        <div className="form-group form-row">
          <div className="col">
            <label htmlFor="expiryDate">Data de Validade:</label>
            <input
              type="text"
              id="expiryDate"
              value={expiryDate}
              onChange={(e) => setExpiryDate(e.target.value)}
              required
            />
          </div>
          <div className="col">
            <label htmlFor="cvv">CVV:</label>
            <input
              type="text"
              id="cvv"
              value={cvv}
              onChange={(e) => setCvv(e.target.value)}
              required
            />
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="address">Endereço:</label>
          <input
            type="text"
            id="address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            required
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label htmlFor="phoneNumber">Número de Telefone:</label>
          <input
            type="tel"
            id="phoneNumber"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            required
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">E-mail:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="form-control"
          />
        </div>
        <button type="submit" className="btn btn-primary">Finalizar Compra</button>
      </form>
      <section class="contact">
        <div class="contact-info">
 
          <div class="first-info">
            <img src='/imagens/EspoSkate.png' alt="Logo" /> <br />
            <a href='https://www.google.com/maps/place/C%C3%A2mara+Municipal+de+Esposende/@41.5314358,-8.7801767,18.96z/data=!4m14!1m7!3m6!1s0xd244bba6d8c44a1:0xd3bfe8a5d9eb0d42!2sC%C3%A2mara+Municipal+de+Esposende!8m2!3d41.531351!4d-8.7806344!16s%2Fg%2F1tfjmdhm!3m5!1s0xd244bba6d8c44a1:0xd3bfe8a5d9eb0d42!8m2!3d41.531351!4d-8.7806344!16s%2Fg%2F1tfjmdhm'>Praça do Município,<br />4740-223 Esposende</a>
            <p>966 597 688</p>
            <p>esposkate05@gmail.com</p>
            <div class="social-icon">
              <a href="https://www.facebook.com/profile.php?id=100092639252098"><i class='bx bxl-facebook'></i></a>
              <a href="https://www.instagram.com/esposendeskate/"><i class='bx bxl-instagram-alt'></i></a>
              <a href="https://twitter.com/EsposendeSkate"><i class='bx bxl-twitter'></i></a>
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
    </div>
  );
}

export default Checkout;
