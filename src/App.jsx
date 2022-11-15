import TaskList from './componets/TaskList';
import TaskForm from './componets/TaskForm';

function App() {



  return (
    <div className='bg-zinc-700 h-screen'>
      <div className='container mx-auto p-10'>
      <TaskForm />
      <TaskList />
      </div>
    </div>
  )
}

export default App