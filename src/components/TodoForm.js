import { useState, useEffect } from 'react';
import './TodoForm.css';

function TodoForm( { onTaskAdd }) {

	// const [errors, setErrors] = useState([]);
	const [fetchedTasks, setFetchedTasks] = useState([]);

	useEffect(() => {
		// Fetch tasks from the "tasks.json" file using the fetch API
		fetch('../../public/data/tasks.json')
		  .then(response => response.json())
		  .then(data => setFetchedTasks(data.tasks))
		  .catch(error => console.error('Error fetching tasks:', error));
	}, []);


	const handleSubmit = (event) => {
		event.preventDefault();
		onTaskAdd(event.target.task.value.trim());
		event.target.task.value = '';
	}

	// const handleValidation = (event) => {
	// 	const newErrors = [];
	// 	const { name, value } = event.target;


	// 	if (name === 'task' && value.trim() === '') {
	// 		newErrors.push('Task cannot be empty');
	// 	}
	// 	setErrors(newErrors);
	// }

	return (
		<>
			<form onSubmit={ handleSubmit }>
				<div className="form-group">
				<div>
					{fetchedTasks.map((task, index) => (
						<div key={index}>{task}</div>
					))}
				</div>
					{/* <input
						type="text"
						name="task"
						placeholder="Type a new task here"
						onChange={handleValidation}
					/>

					<button type='submit' disabled={errors.length > 0}>Add&nbsp;Task</button> */}
				</div>
				{/* { errors.length > 0 && errors.map((error, index) => <li key={ index } className="error">{ error }</li> ) } */}
			</form>
		</>
	);
}

export default TodoForm;
