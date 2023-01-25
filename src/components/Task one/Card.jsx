import React from 'react'
import './style.css'

// function beasd component

const Card = ({ title, img, body, actions, children }) => {
  return (
    <div className='containers'>
      <div className="containerTeyps">
        <h3>{title}</h3>
        <img src={img} alt="imgTask" />
        {children}
        <p>{body}</p>
        {actions ? <div className="action-section">{actions}</div> : ""}
        {/* {actions && <div className="action-section">{actions}</div>} */}
      </div>
    </div>
  )
}

// class beasd component
// class Card extends React.Component{
//   render() {
//     const { title, img, body } = this.props;
//     return (
//           <div className='containers'>
//             <div className="containerTeyps">
//               <h3>{title}</h3>
//               <img src={img} alt="imgTask" />
//               <p>{ body }</p>
//             </div>
//           </div>

//     )
//   }
// }

export default Card
