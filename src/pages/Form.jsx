import axios from 'axios';
import React, { Component } from 'react'
import { Navigate } from 'react-router';
import * as yup from 'yup';
import Container from '../components/Container';

const RegulerExpression = /^(?=.*[0-9])([a-z]{6,16})$/;
const initailData = {
    name: "Mohammed",
    email: "Mohammed@gsg.com",
    password: "120191424",
    rePassword: "120191424"
}

const defaultt = {
    name: "",
    email: "",
    password: "",
    rePassword: "",
}

let schema = yup.object().shape({
    name: yup.string().min(6, "Name Should be at least 8 Character").max(16).required(),
    email: yup.string().email("Email Should be // exmaple@example.com ").required(),
    password: yup.string().min(8).matches(RegulerExpression).required(),
    rePassword: yup.string()
        .oneOf([yup.ref("password"), null], "re-password and password are not matching")
        .required(),
    isChecked: yup.boolean().oneOf([true]).required()
});

export default class Form extends Component {


    state = {
        username: "",
        name: "",
        email: "",
        password: "",
        rePassword: "",
        myData: initailData,
        isLoggingIn: false
    }
    handleSubmit = async (e) => {
        e.preventDefault()
        const getData = {
            // username: "Mohammed",
            // name: "Zeyad",
            // email: "mohammedreda814@gmail.com"
            username: this.state.username,
            name: this.state.name,
            email: this.state.email

        }
        this.setState({ isLoading: true })
        try {

            const res = await axios.post("https://jsonplaceholder.typicode.com/users/", getData) // in axios post i have 3 parameters the first paramenter ApiUrl , secned parameter body => Data , and the thired paramter we have header
            if (res) {
                this.setState({ isLoggingIn: true })
            }
            console.log(res)
            this.setState({ isLoading: false })
        } catch (error) {
            console.log(error)
            this.setState({ message: error.message })
        }
        this.setState({ isLoading: false })

        // if (this.state.name === "Mohammed") {
        //     this.setState({ isLoggingIn: true })
        // }
        schema.validate({
            name: this.state.name,
            email: this.state.email,
            password: this.state.password,
            rePassword: this.state.rePassword
        },
            { abortEarly: false }) //عشان م تاخد اول ايرور و توقف 
            .then(() => {
                console.log("Valid")
                this.setState((prevState) => (
                    {
                        myData: {
                            name: prevState.name,
                            email: prevState.email,
                            password: prevState.password,
                            rePassword: prevState.rePassword
                        },
                        ...defaultt
                    }
                ))
                this.setState({ isLoggingIn: true })
            }).catch(e => console.log(e.errors))
    }
    // handleSubmitTwo = async () => {

    // }
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
        this.setState({ [id]: value }) //[] idهاي بنحطها عشان يأخذ القيمة تعت ال
    }
    render() {
        return (
            <Container>

                <form onSubmit={(e) => this.handleSubmit(e)} className="form">
                    {/* <form onSubmit={(e) => this.handleSubmitTwo(e)} className="form"> */}
                    <div>{this.state.error}</div>{/*display error here*/}

                    <div>
                        <label htmlFor="name">Name</label>
                        <input type="text" id='name' placeholder='Enter your name' onChange={this.handelChangeInput} value={this.state.name} required />
                    </div>

                    <div>
                        <label htmlFor="email">Email</label>
                        <input type="email" id='email' placeholder='Enter your Email' onChange={this.handelChangeInput} value={this.state.email} required />
                    </div>
                    <div>
                        <label htmlFor="password">Password</label>
                        <input type="password" id='password' placeholder='Enter your Password' onChange={this.handelChangeInput} value={this.state.password} required />
                    </div>
                    <div>
                        <label htmlFor="Re-password">Re-password</label>
                        <input type="password" id='Re-password' placeholder='Agine enter your Password' onChange={this.handelChangeInput} value={this.state.password} required />
                    </div>

                    <button type='submit'>{this.state.isLoggingIn ? "Loading..." : "Submit"}</button> {/* طالما الزر ماخذ سبميت خلص بنستعدي الفنكشن في الفورم  */}
                    <button type='button' onClick={this.handleRandomValue}>RandomValue</button>
                    {/* اتحولني على مكان آخر return بمجرد م هيا موجودة في  Navigate */}
                    {this.state.isLoggingIn ? <Navigate to="/" /> : ""}
                </form>
            </Container>
        )
    }
}
