import './App.css'
import ClickCounter from './components/ClickCounter'
import freeCodeCampLogo from './img/freecodecamp-logo.png'

function App() {

  return (
    <>
      <div className='App'>
      <div className='freecodecamp-logo-contenedor'>
        <img 
          className='freecodecamp-logo'
          src={freeCodeCampLogo}
          alt='IMG' />
      </div>
      <ClickCounter />
      </div>
    </>
  )
}

export default App
