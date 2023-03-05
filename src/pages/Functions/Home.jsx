import React, { useState } from 'react';
import Container from '../../components/Container'

const HomePage = ({ title, ...res }) => { // this's `...res`  props we use same components and don't need in this component 
    const [state, setState] = useState("Mohammed");
    const [counter,setCounter] = useState(0)
    const handleChangeState = () => {
        setState("Mohammed Abu Raida")
    }
    const handleIncrement = () => {
        // setCounter(counter + 1)
        setCounter((counter)=>counter + 1)
        if (true) {
            // setCounter(counter + 1)
            setCounter((counter)=>counter + 1)
        }
        // setCounter((prevState) => prevState + 1)
    }
    const handleDecrement = () => {
        // setCounter(counter - 1)
        setCounter((counter)=>counter - 1)
    }
    return (
        <>
            <Container className='container'>
                <div className="content" id='content'>
                    {title}
                    <br />
                    {state}
                    <button onClick={handleChangeState}>Change</button>

                    <hr />
                    <button onClick={handleIncrement}>+</button>
                    {counter}
                    <button onClick={handleDecrement}>-</button>
                </div>
                <div className="cycle"></div>
            </Container>
        </>
    );
}
// const HomePage = (props) => {

//     return (
//         <>
//             <Container className='container'>
//                 {props.title}
//             </Container>
//         </>
//     );
// }

export default HomePage;