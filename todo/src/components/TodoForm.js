import { useState } from 'react'
import { PlusIcon } from '@heroicons/react/24/solid'

const TodoForm = ({ addTask }) => {
	const [task, setTask] = useState('');

  const handleFormSubmit = (event) => {
    event.preventDefault();
		addTask({
			id: Date.now(),
			name: task,
			completed: false,
		})
    setTask('')
  }

  return (
    <form 
      className='todo'
      onSubmit={handleFormSubmit}
    >
      <div className='wrapper'>
        <input 
          type='text' 
          placeholder='TASK' 
					id='task'
					className='input'
					value={task}
					onInput={(event) => setTask(event.target.value)}
					required
					autoFocus
					maxLength={50}
        />
				<label htmlFor='task' className='label'>New Task</label>
			</div>
			<button
				className='btn'
				aria-label='Add Task'
				type='submit'
			>
				<PlusIcon />
			</button>
    </form>
  )
}

export default TodoForm