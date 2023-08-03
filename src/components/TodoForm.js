import { useState, useEffect } from 'react';
import './TodoForm.css';

function TodoForm( { onTaskAdd }) {

	const [fetchedTasks, setFetchedTasks] = useState([]);

	useEffect(() => {
		fetch('/data/tasks.json')
		  .then(response => response.json())
		  .then(data => setFetchedTasks(data.tasks))
		  .catch(error => console.error('Error fetching tasks:', error));
	}, []);


	const handleGenerateRandomTask = (event) => {
		event.preventDefault();
		if (fetchedTasks.length > 0) {
      const randomIndex = Math.floor(Math.random() * fetchedTasks.length);
			const randomTask = fetchedTasks[randomIndex];
			onTaskAdd(randomTask);
			const input = document.getElementById('input');
			input.value = randomTask;
		}
	}

	return (
		<>
			<form>
				<div className="form-group">
					<input id="input" type="text" name="task" />
					<button type='submit' onClick={handleGenerateRandomTask}>Generate&nbsp;Random&nbsp;Task</button>
				</div>
				<div className="tasks">
					<div className="title">List of available tasks:</div>
					{fetchedTasks.map((task, index) => (
						<li key={index} className="list">{task}</li>
					))}
				</div>

				{/* { errors.length > 0 && errors.map((error, index) => <li key={ index } className="error">{ error }</li> ) } */}
			</form>
		</>
	);
}

export default TodoForm;
