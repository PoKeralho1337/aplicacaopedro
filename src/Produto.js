import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import ProdutosData from './Produto.json';
import './App.css';
import { Col, Row, Button, Form } from 'react-bootstrap';

function ProductDetails() {
  // Obtém o parâmetro "id" da URL usando o hook useParams do React Router
  const { id } = useParams();

  // Obtém a função de navegação para redirecionar o usuário para outras páginas
  const navigate = useNavigate();

  // Encontra o produto correspondente ao ID fornecido nos dados de produtos
  const product = ProdutosData.Produtos.find(item => item.id === parseInt(id));

  // Estado para controlar se o produto foi adicionado ao carrinho
  const [isAddedToCart, setIsAddedToCart] = useState(false);

  // Estado para controlar o tamanho selecionado pelo usuário
  const [selectedSize, setSelectedSize] = useState('');

  // Estado para controlar a quantidade selecionada pelo usuário
  const [selectedQuantity, setSelectedQuantity] = useState(1);

  // Função para lidar com o clique no botão "Adicionar ao Carrinho"
  const handleAddToCart = () => {
    // Cria um objeto com as informações do item a ser adicionado ao carrinho
    const cartItem = {
      id: product.id,
      name: product.model,
      nome: product.name,
      price: product.price,
      img: product.imgsrc,
      size: selectedSize,
      quantity: selectedQuantity
    };

    // Obtém os itens existentes no carrinho do localStorage ou um array vazio se não houver itens
    const existingCartItems = JSON.parse(localStorage.getItem('carrinho')) || [];

    // Atualiza o carrinho com o novo item adicionado
    const updatedCartItems = [...existingCartItems, cartItem];

    // Salva os itens atualizados no localStorage
    localStorage.setItem('carrinho', JSON.stringify(updatedCartItems));

    // Define o estado para exibir a mensagem de sucesso e redireciona o usuário para a página do carrinho
    setIsAddedToCart(true);
    navigate('/carrinho');
  };

  // Função para lidar com a alteração de tamanho selecionado
  const handleSizeChange = (e) => {
    setSelectedSize(e.target.value);
  };

  // Função para lidar com a alteração de quantidade selecionada
  const handleQuantityChange = (e) => {
    setSelectedQuantity(parseInt(e.target.value));
  };

  // Função para renderizar outros produtos relacionados na página
  const renderOutrosProdutos = () => {
    // Filtra os produtos que têm a mesma categoria do produto atual
    const outrosProdutos = ProdutosData.Produtos.filter(item => item.category === 'roupa' || item.category === 'sapatos');

    // Embaralha aleatoriamente a ordem dos produtos
    const shuffledProdutos = outrosProdutos.sort(() => 0.5 - Math.random());

    // Seleciona apenas os três primeiros produtos embaralhados
    const produtosAleatorios = shuffledProdutos.slice(0, 3);

    return (
      <div className="corfundo">
        <section>
          <div className="center-text">
            <h1 style={{ textTransform: 'uppercase' }}>Outros <span>Produtos</span></h1>
          </div>
          <div className="produtos-list">
            {/* Mapeia os produtos aleatórios e exibe suas informações */}
            {produtosAleatorios.map(produto => (
              <div key={produto.id} className="produto-item">
                {/* Cria um link para a página de detalhes do produto */}
                <Link to={`/produto/${produto.id}`}>
                  <img src={produto.imgsrc} alt={produto.name} className="produto-imagem" />
                  <h4 className="produto-nome">{produto.name}</h4> 
                </Link>
              </div>
            ))}
          </div>
        </section>
      </div>
    );
  };

  // Efeito colateral para rolar a página até o topo quando o componente é montado
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <div>
      {/* Renderiza a seção de detalhes do produto */}
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
              {/* Renderiza os tamanhos disponíveis para produtos de categoria "roupa" */}
              {product.category === 'roupa' && (
              <div>
              <h3>Tamanhos disponíveis:</h3>
              <div className="clothing-sizes">
                {/* Utiliza botões para selecionar o tamanho */}
                <label className={`size-button ${selectedSize === 'M' ? 'active' : ''}`}>
                  <input
                    type="radio"
                    name="size"
                    value="M"
                    checked={selectedSize === 'M'}
                    onChange={handleSizeChange}
                  />
                  M
                </label>
                <label className={`size-button ${selectedSize === 'L' ? 'active' : ''}`}>
                  <input
                    type="radio"
                    name="size"
                    value="L"
                    checked={selectedSize === 'L'}
                    onChange={handleSizeChange}
                  />
                  L
                </label>
                <label className={`size-button ${selectedSize === 'XL' ? 'active' : ''}`}>
                  <input
                    type="radio"
                    name="size"
                    value="XL"
                    checked={selectedSize === 'XL'}
                    onChange={handleSizeChange}
                  />
                  XL
                </label>
              </div>
                </div>
              )}
              {/* Renderiza os tamanhos disponíveis para produtos de categoria "sapatos" */}
              {product.category === 'sapatos' && (
                <div>
                  <h3>Tamanhos disponíveis:</h3>
                  <div className="shoe-sizes">
                    {/* Utiliza checkboxes para selecionar o tamanho */}
                    <label className={`size-button ${selectedSize === '39' ? 'active' : ''}`}>
                      <input
                      type="radio"
                      label="39"
                      name="size"
                      value="39"
                      checked={selectedSize === '39'}
                      onChange={handleSizeChange}
                      />
                      39
                      </label>
                      <label className={`size-button ${selectedSize === '40' ? 'active' : ''}`}>
                      <input
                      type="radio"
                      label="40"
                      name="size"
                      value="40"
                      checked={selectedSize === '40'}
                      onChange={handleSizeChange}
                      />
                      40
                      </label>
                      <label className={`size-button ${selectedSize === '41' ? 'active' : ''}`}>
                      <input
                      type="radio"
                      label="41"
                      name="size"
                      value="41"
                      checked={selectedSize === '41'}
                      onChange={handleSizeChange}
                      />
                      41
                      </label>
                  </div>
                </div>
              )}
                <Form.Group controlId="quantity">
                  <h3>Quantidade:</h3>
                  {/* Permite ao usuário selecionar a quantidade do produto */}
                  <Form.Control
                    className="small-select"
                    as="select"
                    value={selectedQuantity}
                    onChange={handleQuantityChange}
                  >
                    {Array.from({ length: 10 }, (_, index) => (
                      <option key={index + 1} value={index + 1}>{index + 1}</option>
                    ))}
                  </Form.Control>
                </Form.Group>
              {/* Renderiza o botão "Adicionar ao Carrinho" ou a mensagem "Adicionado ao Carrinho" */}
              {!isAddedToCart ? (
                <Button variant="danger" onClick={handleAddToCart}>
                  <i className="bx bx-cart"></i> Adicionar ao Carrinho
                </Button>
              ) : (
                <p>Adicionado ao Carrinho</p>
              )}
            </div>
          </Col>
        </Row>
      </div>
      {/* Renderiza a seção de outros produtos */}
      <div className="outros-produtos-container">
        {renderOutrosProdutos()}
      </div>
      {/* Renderiza a seção de contato */}
      <section class="contact">
        <div class="contact-info">
          {/* Renderiza as informações de contato */}
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
          {/* Renderiza as informações de suporte */}
          <div class="second-info">
            <h4>Suporte</h4>
            <a href='./Contact'>Contacta-nos</a>
            <p> </p>
            <a href='./Privacidade'>Privacidade</a>
          </div>
          {/* Renderiza as informações da empresa */}
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
