import { Component } from "react";
// import { json } from "react-router-dom";
import ListItem from "../components/ListItem";
import axios from "axios";
// const myData = [
//     {
//         userId: 1,
//         id: 1,
//         title: 'delectus aut autem',
//         completed: false,
//     },
//     {
//         userId: 1,
//         id: 2,
//         title: 'quis ut nam facilis et officia qui',
//         completed: false,
//     },
//     {
//         userId: 1,
//         id: 3,
//         title: 'fugiat veniam minus',
//         completed: false,
//     },
//     {
//         userId: 1,
//         id: 4,
//         title: 'et porro tempora',
//         completed: true,
//     },
// ];


// const data = ["Mohammed", "Ali", "MOhanned", "Bakeza"]
class Todos extends Component {
    obj = {
        userId: 1,
        id: 1,
        title: "delectus aut autem",
        completed: false

    }
    state = {
        data: [],
        isLoading: false
    }
    async componentDidMount() {
        this.setState({ isLoading: true })
       
        // fetch('https://jsonplaceholder.typicode.com/todos')
        //     .then(response => response.json())
        //     .then((json) => this.setState({ data: json })) // this.setState() => state داخل  apiبخزن الي جاي من 
        //     .catch((e) => console.log(e.message))
        //     .finally(() => this.setState({ isLoading: false }))

        //-------------------------------------------------------------------------

        // axios.get('https://jsonplaceholder.typicode.com/todos')
        //     // console.log(response.data)
        //     // .then((response) => this.setState({ data: response.data }))
        //     .then(({data}) => this.setState({ data }))
        //     .catch((error) => {
        //         console.log(error);
        //     })
        //     .finally(() => {
        //         this.setState({ isLoading: false })
        //     });
        
        //-------------------------------------------------------------------------
        
        try {
            const { data } = await axios.get('https://jsonplaceholder.typicode.com/todos')
            this.setState({ data, isLoading: false })
        } catch (error) {
            console.log(error)
        }
        
  
    }
    render() {
        return (

            <div>
                {this.state.isLoading ? "Loading ..." :
                    <ul style={{ overflowX: "auto" }}>
                        {this.state.data.map((todo) => (
                            <ListItem todo={todo} key={todo.title} />
                            // <div key={todo.id}>{todo.title}</div>
                        ))}

                        {/* {data.map((item) => (
                        <div key={item}>{item}</div>
                    ))} */}

                        {/* <li>
            <span>user id: {this.obj.userId}</span> | <span>id: {this.obj.id}</span> | <span>title: {this.obj.title}</span> |{' '}
            <span>{this.obj.completed ? 'completed' : 'not completed'}</span>
        </li> */}
                    </ul>
                }
            </div>
        );
    }
}

export default Todos;