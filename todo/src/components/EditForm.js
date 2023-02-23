import { useEffect, useState } from 'react'
import { CheckIcon } from '@heroicons/react/24/solid'

const EditForm = ({ editedTask, updateTask, closeEditMode }) => {
	const [updatedTask, setUpdatedTask] = useState(editedTask.name);

	useEffect(() => {
		const closeModalIfEscaped = (event) => {
			if(event.key === 'Escape' && closeEditMode());
		}

		window.addEventListener('keydown', closeModalIfEscaped)

		return () => window.removeEventListener('keydown', closeModalIfEscaped)
	}, [closeEditMode])

  const handleFormSubmit = (event) => {
    event.preventDefault();
		updateTask({...editedTask, name: updatedTask})
  }

  return (
		<div 
			role='dialog' 
			aria-labelledby='editTask'
			onClick={(event) => event.target === event.currentTarget && closeEditMode()}
		>
			<form 
				className='todo'
				onSubmit={handleFormSubmit}
			>
				<div className='wrapper'>
					<input 
						type='text' 
						placeholder='TASK' 
						id='editTask'
						className='input'
						value={updatedTask}
						onInput={(event) => setUpdatedTask(event.target.value)}
						required
						autoFocus
						maxLength={50}
					/>
					<label htmlFor='editTask' className='label'>Update Task</label>
				</div>
				<button
					className='btn'
					aria-label={`Edit task for ${updatedTask}`}
					type='submit'
				>
					<CheckIcon strokeWidth={2} height={24} width={24}/>
				</button>
			</form>
		</div>
  )
}

export default EditForm