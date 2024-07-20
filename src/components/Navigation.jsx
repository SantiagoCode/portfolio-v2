import Layout from './Layout';
import LogoSantiagoSVG from './../../public/logo_light.svg';

const Navigation = () => {

  return(
    <nav className="navigation">
      <Layout>
        <div className="navigation-content">
          <div className="img-container">
            <a href="/">
              <img src={LogoSantiagoSVG} alt="" className="logo" />
            </a>
          </div>
          <ul className='navigation-items'>
            <a href="/" className="nav-link">Inicio</a>
            <a href="/porfolio" className="nav-link">Portafolio</a>
            <a href="/clients" className="nav-link">Clientes</a>
            <a href="/about_me" className="nav-link">Sobre mi</a>
          </ul>
          <ul className='buttons'>
            <a href="/" className="nav-link">Github</a>
            <a href="/porfolio" className="nav-link">LinkedIn</a>
          </ul>
        </div>
      </Layout>
    </nav>
  )
}

export default Navigation;