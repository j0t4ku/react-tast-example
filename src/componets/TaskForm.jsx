import { useState, useContext } from 'react'
import { TaskContext } from '../context/TaskContext';

function TaskForm() {
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const { createTask } = useContext(TaskContext);

    const handlerSubmit = (e) => {
        e.preventDefault();
        createTask({
            title,
            description
        })
        setTitle("")
        setDescription("")
    }

    return (
        <div className='max-w-md mx-auto'>
            <form action="" onSubmit={handlerSubmit} className="bg-slate-900 p-10" >
                <h1 className='text-2xl font-bold text-white mb-3'>Crear Tareas</h1>
                <input type="text" placeholder="Escribe tu tarea"
                    onChange={function (e) { setTitle(e.target.value) }}
                    value={title}
                    className="bg-slate-300 p-3 w-full mb-2"
                    autoFocus
                />
                <textarea placeholder='Escribe una descripcion'
                    onChange={function (e) { setDescription(e.target.value) }}
                    className="bg-slate-300 p-3 w-full mb-2"
                    value={description}
                ></textarea>
                <button
                    className='bg-green-500 px-3 py-1 text-white rounded-md'
                >
                    Guardar
                </button>
            </form>
        </div>
    )
}

export default TaskForm