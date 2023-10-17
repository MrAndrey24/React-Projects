import Testimonio from './components/Testimonio'
import './App.css'

function App() {
  return (
    <div className='App'>
    <div className='contenedor-principal'>
      <h1>Esto es lo que dicen nuestros alumnos sobre freeCodeCamp:</h1>
      <Testimonio
      nombre='Emma'
      pais='Estados Unidos'
      imagen='img2'
      cargo='Desarrolladora de software'
      empresa='Spotify'
      testimonio= 'Me encanta freeCodeCamp. Estoy aprendiendo a codificar gratis y me encanta.' 
      />

      <Testimonio
            nombre='Emma'
            pais='Estados Unidos'
            imagen='img2'
            cargo='Desarrolladora de software'
            empresa='Spotify'
            testimonio= 'Me encanta freeCodeCamp. Estoy aprendiendo a codificar gratis y me encanta.' 
            />

      <Testimonio
            nombre='Emma'
            pais='Estados Unidos'
            imagen='img2'
            cargo='Desarrolladora de software'
            empresa='Spotify'
            testimonio= 'Me encanta freeCodeCamp. Estoy aprendiendo a codificar gratis y me encanta.' 
            />
    </div>
  </div>
  )
}

export default App
