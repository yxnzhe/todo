import TaskItem from './TaskItem';
import styles from './TaskList.module.css';

const TaskList = ({ tasks, deleteTask, toggleComplete, enterEditMode }) => {
  return (
    <ul className={styles.tasks}>
			{tasks.sort((a, b) => b.id - a.id).map(task => (
				<TaskItem
					key={task.id}
					task={task}
					deleteTask={deleteTask}
					toggleComplete={toggleComplete}
					enterEditMode={enterEditMode}
				/>
			))}
		</ul>
  )
}

export default TaskList