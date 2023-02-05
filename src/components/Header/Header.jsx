import React from 'react'
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
                <li className={props.myPage === "home" ? "active" : ""}>
                    <a href="/#">Home</a>
                </li>
                <li className={props.myPage === "about" ? "active" : ""}>
                    <a href="/#">About</a>
                </li>
                <li className={props.myPage === "contect" ? "active" : ""}>
                    <a href="/#">Contect</a>
                </li>
            </ul>
        </header>
    )
}
export default Header;