import React, { Component } from 'react'
import { useParams } from 'react-router-dom'
import { H2, H3 } from '../components/Typography';

//function beasd component لازم استخدم  useParamsعشان استخدم 

export const TodoDetalis = () => {
  const { id } = useParams();
  return (
    <TodoDetalisComponent id={id} />
  )
}

class TodoDetalisComponent extends Component {
  state = {
    data: {},
    isLoading: false
  }
  // state = {
  //   data:null
  // }
  componentDidMount() {
    this.setState({ isLoading: true })
    fetch(`https://jsonplaceholder.typicode.com/todos/${this.props.id}`)
      .then(response => response.json())
      // .then((json) => console.log(json))
      .then((json) => this.setState({ data: json }))
    .catch((e)=>console.log(e.message)) 
      .finally(() => this.setState({ isLoading: false }))
  }
  render() {
    return (
      <div>
        <H2>
          id:{this.props.id} {/*fetch عشان اقدر اجيب البيانات كاملة لازم ارجع اعمل id انا هون جبت بس  */}
        </H2>
        {this.state.isLoading ? "Loading...." : <H3>title : {this.state.data.title}</H3>

        }
        {/* <H3>
          title : {this.state.data?.title}  فحعتعني اذا موجودة جيبلي اياها واذا مش موجودة ترجعش اشي null بتساوي state علامة الاستفهام عشان انا حاط في 
        </H3> */}
      </div>
    )
  }
}
