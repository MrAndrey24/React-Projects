import './App.css'
import TaskList from './components/TaskList'

function App() {

  return (
    <>
       <div className='aplicacion-tareas'>
      <div className='tareas-lista-principal'>
        <h1>My Task</h1>
        <TaskList />
      </div>
    </div>
    </>
  )
}

export default App
