import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const AffiliatePage = () => {
  // Exemplo de dados das lojas online e marcas de skate
  const skateShops = [
    { name: 'Loja 1', url: 'https://www.skatedeluxe.com/en' },
    { name: 'Loja 2', url: 'https://ericeirasurfskate.pt/' },
    { name: 'Loja 3', url: 'https://www.sampleskate.com/pt/' },
  ];

  const skateBrands = [
    { name: 'Marca 1', description: 'Descrição da Marca 1' },
    { name: 'Marca 2', description: 'Descrição da Marca 2' },
    { name: 'Marca 3', description: 'Descrição da Marca 3' },
  ];

  return (
    <Container>
      <h1>Afiliados de Skate</h1>
      <h2>Lojas Online</h2>
      <Row>
        {skateShops.map((shop, index) => (
          <Col key={index} sm={4}>
            <Card>
              <Card.Body>
                <Card.Title>{shop.name}</Card.Title>
                <a href={shop.url} target="_blank" rel="noopener noreferrer">Visitar loja</a>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
      <h2>Marcas de Skate</h2>
      <Row>
        {skateBrands.map((brand, index) => (
          <Col key={index} sm={4}>
            <Card>
              <Card.Body>
                <Card.Title>{brand.name}</Card.Title>
                <Card.Text>{brand.description}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default AffiliatePage;