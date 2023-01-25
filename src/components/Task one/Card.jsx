import React from 'react'
import './style.css'

const Card = ({title,img,body}) => {
  return (
    <div className='containers'>
      <div className="containerTeyps">
        <h3>{title}</h3>
        <img src={img} alt="imgTask" />
        <p>{ body }</p>    
      </div>
    </div>
  )
}

export default Card
