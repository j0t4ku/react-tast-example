import TaskCard from './TaskCard';
import {useContext} from 'react';
import {TaskContext} from '../context/TaskContext';

function TaskList() {

    const {task}= useContext(TaskContext)
    
    if(task.length === 0){
        return <h1 className='text-white text-4xl font-bold text-center mt-3'>Las tareas estan vacias</h1>
    }
    return (
        <div className='grid grid-cols-4 gap-2 p-4'>
            {
                task.map(task => (
                    <TaskCard key={task.id} task={task}  />
                )
                )
            }
        </div>
    )
}

export default TaskList