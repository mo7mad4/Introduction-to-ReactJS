import React, { Component } from 'react'


const initailData = {
    name: "Mohammed",
    email: "Mohammed@gsg.com",
    password: "120191424"
}

const defaultt = {
    name: "",
    email: "",
    password: "",
}

export default class Form extends Component {

    state = {
        name: "",
        email: "",
        password: "",
        myData: initailData
    }
    handleSubmit = (e) => {
        e.preventDefault()
        console.log(this.state)
        this.setState((prevState) => (
            {
                myData: {
                    name: prevState.name,
                    email: prevState.email,
                    password: prevState.password
                },
                ...defaultt
            }
        ))
    }
    handleRandomValue = (e) => {
        this.setState((prevState) => ({
            name: prevState.myData.name,
            email: prevState.myData.email,
            password: prevState.myData.password
        }))
    }
    // handleChangeName = (e) => {
    //     console.log("Name Change", e.target.value)
    //     this.setState({ name: e.target.value })
    // }
    // handleChangeEmail = (e) => {
    //     console.log("Email Change")
    //     this.setState({ email: e.target.value })
    // }
    // handleChangePassword = (e) => {
    //     console.log("Password Change")
    //     this.setState({ password: e.target.value })
    // }

    handelChangeInput = (e) => {
        const { value, id } = e.target;
        // console.log(value, id)
        this.setState({[id]:value}) //[] idهاي بنحطها عشان يأخذ القيمة تعت ال
    }
    render() {
        return (
            <form onSubmit={(e) => this.handleSubmit(e)}>
                <div>
                    <label htmlFor="name">Name</label>
                    <input type="text" id='name' placeholder='Enter your name' onChange={this.handelChangeInput} value={this.state.name} />
                </div>

                <div>
                    <label htmlFor="email">Email</label>
                    <input type="email" id='email' placeholder='Enter your Email' onChange={this.handelChangeInput} value={this.state.email} />
                </div>
                <div>
                    <label htmlFor="password">Password</label>
                    <input type="password" id='password' placeholder='Enter your Password' onChange={this.handelChangeInput} value={this.state.password} />
                </div>

                <button type='submit'>Submit</button> {/* طالما الزر ماخذ سبميت خلص بنستعدي الفنكشن في الفورم  */}
                <button type='button' onClick={this.handleRandomValue}>RandomValue</button>
            </form>
        )
    }
}
