import React from 'react'
import './style.css'

const Button = ({ title = "No title", isActive}) => {
  // const { title = "No title" } = props; 
  console.log(isActive)
  return (
    <button className={isActive ? 'active': ''}>{title}</button>
  )
}
export default Button;
