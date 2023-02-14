import React from 'react'
import { Link } from 'react-router-dom';
import './style.css';
const Header = (props) => {
    // console.log(props)
    return (
        <header>
            <h1>Logo</h1>
            <ul>
                {/* <li className={props.myPage === "home" && "active"}>
                    <a href="/#">Home</a>
                </li> */}
                <li>
                    <Link to="/" >Home</Link>
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
            </ul>
        </header>
    )
}
export default Header;