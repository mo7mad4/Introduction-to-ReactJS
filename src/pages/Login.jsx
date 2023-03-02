import axios from 'axios';
import React, { Component } from 'react'
// import { Navigate } from 'react-router';
import * as yup from 'yup';
import Container from '../components/Container';

export default class Form extends Component {


    state = {
        email: "",
        password: "",
        // isLoggingIn: false,
        isLoading: false,
        error: [],
    }
    schema = yup.object().shape({
        email: yup.string().required(),
        password: yup.string().required()
    });
    handleSubmit = async (e) => {
        e.preventDefault()
        this.schema.validate(
            {
                email: this.state.email,
                password: this.state.password
            },
            { abortEarly: false })
            .then(async ({ email, password }) => {
                // console.log(email, password)

                const res = await axios.post('https://dummyjson.com/auth/login', {
                    username: email,
                    password
                })
                // if (res) this.setState({ isLoggingIn: true })
                console.log(res.data)
                //if the user login => Get token and username for loaclStorge and put in my WebSite  
                if (res) {
                    localStorage.setItem("token", res.data.token)
                    localStorage.setItem("username", res.data.username)
                    this.props.login();
                }

            })
            .catch((error) => {
                if (error.errors) {
                    this.setState({ error: error.errors })
                }
                else {
                    this.setState({ error: [error.message] })
                }
            })
            .finally(this.setState({ isLoading: false }))
        this.setState({ isLoading: true })


    }
    handleRandomValue = (e) => {
        this.setState((prevState) => ({
            name: prevState.myData.name,
            email: prevState.myData.email,
            password: prevState.myData.password,
            rePassword: prevState.myData.rePassword
        }))
    }
    handelChangeInput = (e) => {
        const { value, id } = e.target;
        // console.log(value, id)
        //this's [] get value id that's it 
        this.setState({ [id]: value }) 
    }
    render() {
        return (
            <Container>
                <form onSubmit={(e) => this.handleSubmit(e)} className="form">
                    <div>
                        <label htmlFor="email">Email</label>
                        <input type="string" id='email' placeholder='Enter your Email' onChange={this.handelChangeInput} value={this.state.email} />
                    </div>
                    <div>
                        <label htmlFor="password">Password</label>
                        <input type="password" id='password' placeholder='Enter your Password' onChange={this.handelChangeInput} value={this.state.password} />
                    </div>
                    <div>{this.state.error.map(e => <span style={{ color: 'red' }}>{e}</span>)}</div>{/*display error here*/}
                    <button type='submit'>{this.state.isLoggingIn ? "Loading..." : "Submit"}</button> {/* طالما الزر ماخذ سبميت خلص بنستعدي الفنكشن في الفورم  */}
                    {/* اتحولني على مكان آخر return بمجرد م هيا موجودة في  Navigate */}
                    {/* {this.state.isLoggingIn ? <Navigate to="/" /> : ""} */}
                </form>
            </Container>
        )
    }
}
