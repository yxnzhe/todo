import './index.css';
import { useState } from 'react'
import TodoForm from './components/TodoForm';
import TaskList from './components/TaskList';
import EditForm from './components/EditForm';
import useLocalStorage from './hooks/useLocalStorage';
import DateTime from './components/DateTime';

function App() {
  const [tasks, setTasks] = useLocalStorage('tasks', []);
  const [editedTask, setEditedTask] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [previousFocus, setPreviousFocus] = useState(null);

  const addTask = (task) => {
    setTasks(prevState => [...prevState, task]);
  }

  const deleteTask = (id) => {
    setTasks(prevState => prevState.filter(task => task.id !== id));
  }

  const toggleComplete = (id) => {
    setTasks(prevState => prevState.map(task => (task.id === id ? { ...task, completed: !task.completed } : task)));
  }

  const updateTask = (task) => {
    setTasks(prevState => prevState.map(t => (t.id === task.id ? { ...t, name: task.name } : t)))
    closeEditMode();
  }

  const closeEditMode = () => {
    setIsEditing(false);
    previousFocus.focus();
  }

  const enterEditMode = (task) => {
    setEditedTask(task);
    setIsEditing(true);
    setPreviousFocus(document.activeElement);
  }

  return (
    <div className="container">
      <header>
        <h1>Plan for Today</h1>
      </header>
      {
        isEditing && (
          <EditForm 
            editedTask={editedTask}
            updateTask={updateTask}
            closeEditMode={closeEditMode}
          />
        )
      }
      <DateTime />
      <TodoForm addTask={addTask}/>
      {tasks && (
      <TaskList 
        tasks={tasks}
        deleteTask={deleteTask}
        toggleComplete={toggleComplete}
        enterEditMode={enterEditMode}
      />)}
    </div>
  );
}

export default App;
