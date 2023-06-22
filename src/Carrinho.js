import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';

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
    return items.map(item => (
      <div key={item.id} className="cart-item">
        <Link to={`/produto/${item.id}`}>
          <img src={item.img} alt={item.name} />
        </Link>
        <div className="cart-item-details">
          <h3>{item.name}</h3>
          <p>{item.price}</p>
        </div>
      </div>
    ));
  };

  return (
    <div>
        <h1>Carrinho de compras</h1>
      {items.length > 0 ? (
        <div className="cart-items-container">{renderCartItems()}</div>
      ) : (
        <p>O carrinho está vazio.</p>
      )}
      <Button variant="danger" onClick={handleClearCart}>
        Limpar Carrinho
      </Button>
    </div>
  );
}

export default Carrinho;