import '../styles/TaskForm.css'
import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'

function TaskForm(props) {
    const [input, setInput] = useState('')

    const handlerChange = (event) => {
        setInput(event.target.value)
    };

    const handlerSubmit = (event) => {
        event.preventDefault()
        const newTask = {
            id: uuidv4(),
            text: input,
            compled: false
        }
        props.onSubmit(newTask)
    };

    return(
        <form className='tarea-formulario' onSubmit={ handlerSubmit }>
            <input className='tarea-input' type="text" placeholder='Write a Task' name='text' onChange={ handlerChange } />
            <button className='tarea-boton'>Add</button>
        </form>
    )
}

export default TaskForm