import '../styles/TaskList.css'
import Task from './Task'
import TaskForm from './TaskForm'
import { useState } from 'react'

function TaskList(){

    const [tasks, setTasks] = useState([])

    const addTask = task => {
        if(task.text.trim()){
            task.text = task.text.trim()
            const tasksUpdated = [task, ...tasks]
            setTasks(tasksUpdated)
        }
    };

    const deleteTask = id => {
        const tasksUpdated = tasks.filter(task => task.id !== id)
        setTasks(tasksUpdated)
    };

    const taskComplete = id => {
        const tasksUpdated = tasks.map(task => {
            if(task.id === id) task.completed = !task.completed
            return task
        })
        setTasks(tasksUpdated)
    };

    return (
        <>
        <TaskForm onSubmit={addTask} />
        <div className='tareas-lista-contenedor'>
            {
            tasks.map((task) =>
                <Task
                key={task.id}
                id={task.id} 
                text={task.text}
                completed={task.completed}
                taskComplete={taskComplete}
                deleteTask={deleteTask} />
            )
            }
        </div>
        </>
    );    
}

export default TaskList