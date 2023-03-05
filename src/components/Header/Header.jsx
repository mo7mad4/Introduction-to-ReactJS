import React from 'react'
import { Link } from 'react-router-dom';
import './style.css';
class Header extends React.Component {
    // console.log(props)
    state = {
        username:""
    }
    componentDidMount() {
        const username = localStorage.getItem("username")
        this.setState({username})
    }
    render() {

        return (
            <header>
                <h1>Logo</h1>
                <p>Hello { this.state.username }</p>
                <ul>
                    {/* <li className={props.myPage === "home" && "active"}>
                    <a href="/#">Home</a>
                </li> */}
                    <li>
                        <Link to="/" >Home</Link>
                    </li>
                    <li>
                        <Link to="/todo" >Function Todos</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                    <li>
                        <Link to="/contect">Contect</Link>
                    </li>
                    <li >
                        <Link to="/form">Form</Link>
                    </li>
                    <li >
                        <Link to="/posts">Posts</Link>
                    </li>
                    <li >
                        <Link to="/todos">Todos</Link>
                    </li>
                    <li>
                        <Link to="/login">Login</Link>
                    </li>
                    <li>
                        <button onClick={this.props.logout}>Logout</button>
                    </li>
                    <li >
                        <Link to="/dashboard/info">Info</Link>
                    </li>
                    <li >
                        <Link to="/dashboard/anthor">Anthor Components</Link>
                    </li>
                    <li >
                        <Link to="/dashboard/ref">ref</Link>
                    </li>
                </ul>
            </header>
        )
    }
}
export default Header;