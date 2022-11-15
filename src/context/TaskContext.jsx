
import {createContext, useState, useEffect } from 'react';
import { task as data } from '../data/task.js';


export const TaskContext= createContext()

export function TaskContextProvider(props) {
    const [task, setTask] = useState([]);
    useEffect(() => {
        setTask(data)
      }, []);

    function createTask(newtask){
        setTask([...task, {
          title:newtask.title,
          id: task.length,
          description:newtask.description
        }])
      }
    
      function deleteTask(deleteid){
        setTask(task.filter(task => task.id!==deleteid))
      }

  return (
    <TaskContext.Provider value={{
        task,
        deleteTask,
        createTask
        }}>
        {props.children}
    </TaskContext.Provider>
  )
}
