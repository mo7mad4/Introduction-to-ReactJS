import React from 'react'
import './style.css'

const Button = ({ children = "No title", isActive}) => {
  // const { title = "No title" } = props; 
  console.log(isActive)
  return (
    <button className={`${isActive ? 'active' : ''} button`}>{children}</button>
  )
}
export default Button;
