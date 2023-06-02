import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

function PrivacyPolicy() {
  return (
    <Container>
      <Row>
        <Col>
          <h1>Política de Privacidade</h1>
          <p>
            A sua privacidade é importante para nós. Esta Política de Privacidade explica quais informações pessoais coletamos e como as utilizamos em nosso website.
          </p>
          <h3>Coleta de Informações</h3>
          <p>
            Durante sua visita ao nosso website, podemos coletar informações pessoais, como seu nome, endereço de e-mail e informações de pagamento, quando necessário. Essas informações serão utilizadas para processar e completar seu pedido, além de garantir uma experiência de compra personalizada.
          </p>
          <h3>Cookies</h3>
          <p>
            Utilizamos cookies para melhorar a sua experiência em nosso website. Os cookies são pequenos arquivos de texto armazenados no seu computador que nos permitem lembrar suas preferências e personalizar o conteúdo que você visualiza.
          </p>
          <h3>Divulgação de Informações</h3>
          <p>
            Não compartilharemos suas informações pessoais com terceiros, a menos que seja necessário para processar seu pedido ou cumprir requisitos legais.
          </p>
          <h3>Segurança</h3>
          <p>
            Tomamos medidas de segurança adequadas para proteger suas informações pessoais contra acesso não autorizado ou alteração. No entanto, não podemos garantir a segurança absoluta das informações transmitidas pela Internet.
          </p>
          <h3>Alterações na Política de Privacidade</h3>
          <p>
            Reservamo-nos o direito de modificar esta Política de Privacidade a qualquer momento. Quaisquer alterações serão publicadas nesta página e serão efetivas imediatamente após a publicação.
          </p>
        </Col>
      </Row>
    </Container>
  );
}

export default PrivacyPolicy;