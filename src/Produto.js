import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import ProdutosData from './Produto.json';
import './App.css';
import { Col, Row, Button, Form } from 'react-bootstrap';

function ProductDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const product = ProdutosData.Produtos.find(item => item.id === parseInt(id));

  const [isAddedToCart, setIsAddedToCart] = useState(false);
  const [selectedSize, setSelectedSize] = useState('');

  const handleAddToCart = () => {
    const cartItem = {
      id: product.id,
      name: product.model,
      price: product.price,
      img: product.imgsrc,
      size: selectedSize // Adiciona o tamanho selecionado ao objeto do carrinho
    };
    const existingCartItems = JSON.parse(localStorage.getItem('carrinho')) || [];
    const updatedCartItems = [...existingCartItems, cartItem];
    localStorage.setItem('carrinho', JSON.stringify(updatedCartItems));
    setIsAddedToCart(true);
    navigate('/carrinho');
  };

  const handleSizeChange = (e) => {
    setSelectedSize(e.target.value); // Atualiza o tamanho selecionado no estado
  };

  return (
    <div>
      <div className="product-container">
        <Row className="row-2">
          <Col>
            <div className="product-image product-details">
              <img src={product.imgsrc} alt={product.model} />
            </div>
          </Col>
          <Col>
            <div className="product-info">
              <h1>{product.brand}</h1>
              <h2>{product.model}</h2>
              <p>{product.price}</p>
              {product.category === 'roupa' && (
                <div>
                  <h3>Tamanhos disponíveis:</h3>
                  <div className="clothing-sizes">
                    <Form.Check
                      type="radio"
                      label="M"
                      name="size"
                      value="M"
                      checked={selectedSize === 'M'}
                      onChange={handleSizeChange}
                    />
                    <Form.Check
                      type="radio"
                      label="L"
                      name="size"
                      value="L"
                      checked={selectedSize === 'L'}
                      onChange={handleSizeChange}
                    />
                    <Form.Check
                      type="radio"
                      label="XL"
                      name="size"
                      value="XL"
                      checked={selectedSize === ''}
                      onChange={handleSizeChange}
                    />
                  </div>
                </div>
              )}
              {product.category === 'sapatos' && (
                <div>
                  <h3>Tamanhos disponíveis:</h3>
                  <div className="shoe-sizes">
                    <Form.Check
                      type="radio"
                      label="39"
                      name="size"
                      value="39"
                      checked={selectedSize === '39'}
                      onChange={handleSizeChange}
                    />
                    <Form.Check
                      type="radio"
                      label="40"
                      name="size"
                      value="40"
                      checked={selectedSize === '40'}
                      onChange={handleSizeChange}
                    />
                    <Form.Check
                      type="radio"
                      label="41"
                      name="size"
                      value="41"
                      checked={selectedSize === '41'}
                      onChange={handleSizeChange}
                    />
                  </div>
                </div>
              )}
              {!isAddedToCart ? (
                <Button variant="primary" onClick={handleAddToCart}>
                  <i className="bx bx-cart"></i> Adicionar ao Carrinho
                </Button>
              ) : (
                <p>Adicionado ao Carrinho</p>
              )}
            </div>
          </Col>
        </Row>
      </div>
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
    </div>
  );
}

export default ProductDetails;