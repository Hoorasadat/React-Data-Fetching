import "./TodoList.css";

const Todo = (props) => {
    return (
        <div className="box">
            <h2>Todo List:</h2>
            <ul className="todo">
                { props.todoList.map((todo, index) => {
                    return (
                        <div className="task" key={ index }>
                            <li> { todo } </li>
                            <input type="checkbox" />
                        </div>
                    )
                }) }
            </ul>
        </div>
    );
}

export default Todo;
