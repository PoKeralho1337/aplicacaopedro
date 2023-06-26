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
        <td className="cart-item-price">
          {item.price}
          <Button variant="danger" onClick={() => handleRemoveItem(item.id)} className="remove-button">
            Remover
          </Button>
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
    return totalPrice;
  };

  return (
    <div className='corfundo'>
      <div className="center-text">
        <h1 style={{ textTransform: 'uppercase' }}>Carrinho de<span> Compras</span></h1>
      </div>
      {items.length > 0 ? (
        <table className="cart-items-table">
          <thead>
            <tr>
              <th>Imagem</th>
              <th>Nome</th>
              <th>Tamanho</th>
              <th>Preço</th>
            </tr>
          </thead>
          <tbody>
            {renderCartItems()}
            <tr>
              <td colSpan="3">Quantidade de Produtos:</td>
              <td>{calculateTotalQuantity()}</td>
            </tr>
            <tr>
              <td colSpan="3">Total a Pagar:</td>
              <td className="cart-item-price">
                {calculateTotalPrice().toFixed(2)}
              </td>
            </tr>
          </tbody>
        </table>
      ) : (
        <h1>O carrinho está vazio.</h1>
      )}
      {items.length > 0 && (
        <Button variant="danger" onClick={handleClearCart}>
          Limpar Carrinho
        </Button>
      )}
    </div>
  );
}

export default Carrinho;