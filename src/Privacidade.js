import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './App.css';


function PrivacyPolicy() {
  return (
    <div className='corfundo'>
    <Container className="privacy-container">
      <Row>
        <Col>
          <h1 className="privacy-heading">Política de Privacidade</h1>
          <p className="privacy-text">
            A sua privacidade é importante para nós. Esta Política de Privacidade explica quais informações pessoais coletamos e como as utilizamos em nosso website.
          </p>
          <h3 className="privacy-subheading">Coleta de Informações</h3>
          <p className="privacy-text">
            Durante sua visita ao nosso website, podemos coletar informações pessoais, como seu nome, endereço de e-mail e informações de pagamento, quando necessário. Essas informações serão utilizadas para processar e completar seu pedido, além de garantir uma experiência de compra personalizada.
          </p>
          <h3 className="privacy-subheading">Cookies</h3>
          <p className="privacy-text">
            Utilizamos cookies para melhorar a sua experiência em nosso website. Os cookies são pequenos arquivos de texto armazenados no seu computador que nos permitem lembrar suas preferências e personalizar o conteúdo que você visualiza.
          </p>
          <h3 className="privacy-subheading">Divulgação de Informações</h3>
          <p className="privacy-text">
            Não compartilharemos suas informações pessoais com terceiros, a menos que seja necessário para processar seu pedido ou cumprir requisitos legais.
          </p>
          <h3 className="privacy-subheading">Segurança</h3>
          <p className="privacy-text">
            Tomamos medidas de segurança adequadas para proteger suas informações pessoais contra acesso não autorizado ou alteração. No entanto, não podemos garantir a segurança absoluta das informações transmitidas pela Internet.
          </p>
          <h3 className="privacy-subheading">Alterações na Política de Privacidade</h3>
          <p className="privacy-text">
            Reservamo-nos o direito de modificar esta Política de Privacidade a qualquer momento. Quaisquer alterações serão publicadas nesta página e serão efetivas imediatamente após a publicação.
          </p>
          <h3 className="privacy-subheading">Direitos do Usuário</h3>
          <p className="privacy-text">
            Como usuário do nosso website, você tem direito a solicitar acesso, retificação ou exclusão de suas informações pessoais. Entre em contato conosco através dos canais fornecidos nesta Política de Privacidade para exercer seus direitos.
          </p>
          <h3 className="privacy-subheading">Contato</h3>
          <p className="privacy-text">
            Se você tiver alguma dúvida ou preocupação relacionada à nossa Política de Privacidade ou ao tratamento de suas informações pessoais, entre em contato conosco pelo e-mail [e-mail de contato] ou pelo telefone [número de telefone].
          </p>
          <h3 className="privacy-subheading">Retenção de Informações</h3>
          <p className="privacy-text">
            Manteremos suas informações pessoais apenas pelo tempo necessário para cumprir os fins pelos quais foram coletadas, incluindo quaisquer requisitos legais ou regulatórios. Após esse período, suas informações serão devidamente destruídas ou anonimizadas.
          </p>
        </Col>
      </Row>
    </Container>
    </div>
  );
}

export default PrivacyPolicy;