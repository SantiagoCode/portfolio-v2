import Hero from './components/Hero'
import Navigation from './components/Navigation'
import Marquee from "react-fast-marquee";

function App() {

  return (
    <>
      <Navigation/>
      <Hero />

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
    </>
  )
}

export default App
