import Layout from './Layout';

const Hero = () => {
  return (
    <Layout id="hero">
      <div className="hero-content">
        <img src="/public/logo_santiago_salazar.svg" alt="" className="my-name" />
        <p className="hero-description">
          Frontend Developer apasionado por crear interfaces intuitivas y de alto rendimiento.<br />
          <span className="hero-strong">Disponible para proyectos y contrataciones</span>.
        </p>

        <div className="hero-buttons">
          <button className="hero-button portfolio-button" aria-label="Ver Portafolio">Ver Portafolio</button>
          <button className="hero-button contact-button" aria-label="Conectemos">Conectemos</button>
        </div>
      </div>
    </Layout>
  );
};

export default Hero;
