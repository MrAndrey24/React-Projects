import '../styles/Task.css'
import { AiOutlineCloseCircle } from "react-icons/ai"

function Task({ id, text, completed, taskComplete, deleteTask }){
    return (
    <div className={ completed ? 'tarea-contenedor completada' : 'tarea-contenedor' }>
        <div className='tarea-texto' onClick={() => taskComplete(id)}>
            {text}
        </div>
        <div 
        className='tarea-contenedor-iconos' onClick={() => deleteTask(id)}>
            <AiOutlineCloseCircle className='tarea-icono' />
        </div>
    </div>

    )
}

export default Task