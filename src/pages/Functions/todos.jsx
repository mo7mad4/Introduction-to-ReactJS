import React, { useState } from "react";

const Todo = () => {
    const [todos, setTodos] = useState([]);
    // we use this state in (inputs) => coz, by <control component> mean control component == state linked component
    const [values, setValues] = useState({});
    // const [title, setTilte] = useState('');
    // const [body, setBody] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Submit", values.title, values.body)
        setTodos(prevState => ([...prevState, { title: values.title, body: values.body }])) // 1,2,3,4,5 بضيف في الاخر 
        setValues({title:"", body:""})
        // setTodos(prevState => ([{ title, body }, ...prevState])) // 5,4,3,2,1 بضيف من الاول 
        // setBody("")
        // setTilte("")
    }

    const handleChangeInputs = (e) => {
        const { name, value } = e.target;
        console.log("name: ", name, "Value : ", value)
        setValues(prevState =>({...prevState,[name]: value}))

        // if (name === 'title') {
        //     setTilte(value)
        // } else {
        //     setBody(value)
        // }


    }
    return (
        <div>
            <ul>
                <form onSubmit={handleSubmit}>
                    <input type="text" name='title' onChange={handleChangeInputs} value={values.title} />
                    <input type="text" name='body' onChange={handleChangeInputs} value={values.body} />
                    <button type="submit">Submit</button>
                    {/* 1:16:46 */}
                </form>
                {todos.map((todo, index) => (
                    <li key={index}>

                        <h3>
                            {todo.title}
                        </h3>

                        <p>
                            {todo.body}
                        </p>

                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Todo;