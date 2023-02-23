import styles from './TaskItem.module.css';
import { useState } from 'react'
import { CheckIcon, PencilSquareIcon, TrashIcon } from '@heroicons/react/24/outline';

const TaskItem = ({ task, deleteTask, toggleComplete, enterEditMode }) => {
  const [isChecked, setIsChecked] = useState(task.completed);

  const handleCheckboxChange = (event) => {
    setIsChecked(!isChecked);
    toggleComplete(task.id);
  }

  return (
    <li className={styles.task}>
      <div className={styles['task-group']}>
        <input 
          type='checkbox'
          id={task.id}
          checked={isChecked}
          name={task.name}
          className={styles.checkbox}
          onChange={handleCheckboxChange}
        />
        <label 
          htmlFor={task.id} 
          className={styles.label}
        >
          {task.name}
          <p className={styles.checkmark}>
            <CheckIcon 
              strokeWidth={2} 
              width={24} 
              height={24}
            />
          </p>
        </label>
      </div>
      <div className={styles['task-group']}>
        <button
          className='btn'
          aria-label={`Update ${task.name} Task`}
          onClick={() => enterEditMode(task)}
        >
          <PencilSquareIcon />
        </button>
        <button
          className={`btn ${styles.delete}`}
          aria-label={`Delete ${task.name} Task`}
          onClick={() => deleteTask(task.id)}
        >
          <TrashIcon />
        </button>
      </div>
    </li>
  )
}

export default TaskItem