import React, { useState } from "react";

const Todo = () => {
    const [todos, setTodos] = useState([]);
    const handleSubmit = () => {
        console.log("Submit")
    }
    return (
        <div>
            <ul>
                {todos.map((todo) => (
                    <li>

                        <h3>
                        {todo.title}
                        </h3>

                        <p>
                        {todo.body}
                        </p>

                    </li>
                ))}

                <form onSubmit={handleSubmit}></form>
            </ul>
        </div>
    );
}

export default Todo;