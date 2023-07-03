import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import './App.css';

function Carrinho() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const carrinho = JSON.parse(localStorage.getItem('carrinho'));
    if (carrinho) {
      setItems(carrinho);
    }
  }, []);

  const handleClearCart = () => {
    setItems([]);
    localStorage.removeItem('carrinho');
  };

  const renderCartItems = () => {
    const handleRemoveItem = (itemId) => {
      const updatedItems = items.filter((item) => item.id !== itemId);
      setItems(updatedItems);
      localStorage.setItem('carrinho', JSON.stringify(updatedItems));
    };

    return items.map((item) => (
      <tr key={item.id}>
        <td>
          <Link to={`/produto/${item.id}`}>
            <img src={item.img} alt={item.name} className="cart-item-image" />
          </Link>
        </td>
        <td className="cart-item-name">{item.name}</td>
        <td className="cart-item-size">Tamanho: {item.size}</td>
        <td className="cart-item-quantity">{item.quantity}</td>
        <td className="cart-item-price">
          <div className="price-and-button">
            <span>{item.price}</span>
            <Button
              variant="danger"
              onClick={() => handleRemoveItem(item.id)}
              className="remove-button"
            >
              Remover
            </Button>
          </div>
        </td>
      </tr>
    ));
  };

  const calculateTotalQuantity = () => {
    let totalQuantity = 0;
    items.forEach((item) => {
      totalQuantity += item.quantity;
    });
    return totalQuantity;
  };

  const calculateTotalPrice = () => {
    let totalPrice = 0;
    items.forEach((item) => {
      const price = parseFloat(item.price);
      totalPrice += price * item.quantity;
    });
    return totalPrice.toFixed(2);
  };

  const handleCheckout = () => {
    // Implemente a funcionalidade de checkout aqui
  };

  return (
    <div>
      <div className="cart-container">
        <div className="cart-items">
          <div className="center-text">
            <h1 style={{ textTransform: 'uppercase' }}>
              Carrinho de<span> Compras</span>
            </h1>
          </div>
          {items.length > 0 ? (
            <table className="cart-items-table">
              <thead>
                <tr>
                  <th>Imagem</th>
                  <th>Nome</th>
                  <th>Tamanho</th>
                  <th>Quantidade</th>
                  <th>Preço</th>
                </tr>
              </thead>
              <tbody>{renderCartItems()}</tbody>
            </table>
          ) : (
            <h1 className="empty-cart-message">O carrinho está vazio.</h1>
          )}
        </div>
        <div className="cart-summary">
          <div className="cart-summary-details">
            <div className="cart-summary-item">
              <span>Quantidade de Produtos:</span>
              <span>{calculateTotalQuantity()}</span>
            </div>
            <div className="cart-summary-item">
              <span>Total a Pagar:</span>
              <span className="cart-summary-price">
                {calculateTotalPrice()}
              </span>
            </div>
          </div>
          {items.length > 0 && (
            <Link to="/Checkout" className="checkout-button red-text">
              Checkout
            </Link>
          )}
        </div>
      </div>
      <section className="contact">
        <div className="contact-info">
          <div className="first-info">
            <img src="/imagens/EspoSkate.png" alt="Logo" />
            <br />
            <a href="https://www.google.com/maps/place/C%C3%A2mara+Municipal+de+Esposende/@41.5314358,-8.7801767,18.96z/data=!4m14!1m7!3m6!1s0xd244bba6d8c44a1:0xd3bfe8a5d9eb0d42!2sC%C3%A2mara+Municipal+de+Esposende!8m2!3d41.531351!4d-8.7806344!16s%2Fg%2F1tfjmdhm!3m5!1s0xd244bba6d8c44a1:0xd3bfe8a5d9eb0d42!8m2!3d41.531351!4d-8.7806344!16s%2Fg%2F1tfjmdhm">
              Praça do Município,<br />
              4740-223 Esposende
            </a>
            <p>966 597 688</p>
            <p>esposkate05@gmail.com</p>
            <div className="social-icon">
              <a href="https://www.facebook.com/profile.php?id=100092639252098">
                <i className="bx bxl-facebook"></i>
              </a>
              <a href="https://www.instagram.com/esposendeskate/">
                <i className="bx bxl-instagram-alt"></i>
              </a>
              <a href="https://twitter.com/EsposendeSkate">
                <i className="bx bxl-twitter"></i>
              </a>
            </div>
          </div>
          <div className="second-info">
            <h4>Suporte</h4>
            <Link to="./Contact">Contacta-nos</Link>
            <p> </p>
            <Link to="./Privacidade">Privacidade</Link>
          </div>
          <div className="fourth-info">
            <h4>Empresa</h4>
            <Link to="./AboutUs">Sobre</Link>
            <p> </p>
            <Link to="./Login">Login</Link>
          </div>
          <div className="five">
            <h4>Subscreve</h4>
            <p>
              Receba atualizações, Descontos, altas promoções no seu email
            </p>
            <p>
              Receive updates, discounts, high promotions in your email
            </p>
            <p>
              Recevez des mises à jour, des réductions, des promotions
              élevées dans votre e-mail
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Carrinho;