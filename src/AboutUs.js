
import './AboutPage.css';
import React, { useRef, useEffect } from 'react';

function AboutPage() {
  const teamMembers = [
    {
      name: 'John Doe',
      position: 'CEO',
      image: 'imagens/empresario1.jpg',
    },
    {
      name: 'Tony Hawk',
      position: 'CTO',
      image: 'imagens/tony1.jpg',
    },
    {
      name: 'Diego Guerra',
      position: 'Diretor De Marketing',
      image: '/imagens/diego.jpg',
    },
    {
      name: 'Leticia Bufoni',
      position: 'Gerente de vendas',
      image: '/imagens/leticia.jpg',
    },
  ];

  const sectionsRef = useRef([]);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        } else {
          entry.target.classList.remove('active');
        }
      });
    }, options);

    sectionsRef.current.forEach((section) => {
      observer.observe(section);
    });

    return () => {
      observer.disconnect();
    };
  }, []);


  return (
    <div className='corfundo'>
      <section ref={(el) => (sectionsRef.current[0] = el)} className="trending-product fade-in">
        <div className="center-text">
          <h1>About Our Company</h1>
          <p>
            Bem-vindo à nossa empresa, a EspoSkate! Somos uma loja apaixonada por skate e roupas de skate, com sede em Esposende. Embora nossa jornada tenha começado há menos de um ano, estamos empenhados em oferecer aos nossos clientes a melhor seleção de produtos de skate, garantindo a qualidade e o estilo que os skatistas procuram.</p>
          <p>
            Nossa missão é fornecer uma experiência completa para a comunidade de skate, desde iniciantes até skatistas experientes. Nossas prateleiras estão repletas de uma ampla variedade de skates, dos melhores decks e rodas até trucks duráveis e rolamentos de alta performance. Nosso compromisso com a qualidade significa que selecionamos cuidadosamente as marcas mais respeitadas e confiáveis do mercado.
          </p>
          <p>
            Além disso, sabemos que o estilo é uma parte essencial do skate. É por isso que também oferecemos uma coleção exclusiva de roupas de skate para complementar seu visual. Desde camisetas e moletons até bonés e calçados, nossa seleção abrange tudo o que você precisa para se destacar tanto na pista quanto no estilo pessoal.
          </p>
          <p>
            Na SkateCo, nos orgulhamos de ter uma equipe experiente de skatistas apaixonados. Nossos funcionários são entusiastas do skate e estão sempre prontos para compartilhar seus conhecimentos e ajudar nossos clientes a fazerem as melhores escolhas. Quer você esteja procurando por conselhos sobre montagem de skate, dicas para aprimorar suas habilidades ou recomendações sobre as últimas tendências do skate, estamos aqui para apoiá-lo.
          </p>
          <p>
            Agradecemos à comunidade de skate de Esposende e arredores pelo apoio que recebemos desde a nossa fundação. Estamos comprometidos em retribuir e contribuir para o crescimento e a promoção do skate em nossa região. Organizamos eventos locais, demos de skate e patrocinamos skatistas talentosos da nossa comunidade. Juntos, estamos construindo uma cultura de skate vibrante e inclusiva.
          </p>
          <p>
            Convidamos você a visitar nossa loja em Esposende e descobrir tudo o que a SkateCo tem a oferecer. Seja você um iniciante empolgado ou um skatista experiente em busca de equipamentos de alta qualidade, estamos aqui para atender às suas necessidades. Junte-se a nós nessa jornada e faça parte da nossa comunidade skate!
          </p>
          <br></br>
        </div>
      </section>
      <section ref={(el) => (sectionsRef.current[1] = el)} className="trending-product fade-in">
        <div class="center-text">
          <h1>Nossa Equipa</h1>
          <div className="team-members">
            {teamMembers.map((member, index) => (
              <div className="team-member" key={index}>
                <img src={member.image} alt={member.name} />
                <h3>{member.name}</h3>
                <p>{member.position}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section class="contact">
        <div class="contact-info">
          <div class="first-info">
            <img src='/imagens/EspoSkate.png' /> <br></br>

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

export default AboutPage;