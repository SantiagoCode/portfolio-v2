import Layout from './Layout';
import Marquee from "react-fast-marquee";

const Hero = () => {
  return (
    <Layout id="hero">
      <div className="hero-content">
        <h1 className="hero-title">Santiago Salazar</h1>
        <p className="hero-description">
          Frontend Developer apasionado por crear interfaces intuitivas y de alto rendimiento.<br />
          <span className="hero-strong">Disponible para proyectos y contrataciones</span>.
        </p>

        <div className="hero-buttons">
          <button className="hero-button portfolio-button" aria-label="Ver Portafolio">Ver Portafolio</button>
          <button className="hero-button contact-button" aria-label="Conectemos">Conectemos</button>
        </div>
      </div>

      <Marquee>
        <p className='marquee-item'>
          Disponible para contrataciones y proyectos
        </p>
        <p className='marquee-item'>
          Disponible para contrataciones y proyectos
        </p>
        <p className='marquee-item'>
          Disponible para contrataciones y proyectos
        </p>
      </Marquee>
    </Layout>
  );
};

export default Hero;
