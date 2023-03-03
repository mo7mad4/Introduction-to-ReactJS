import React from 'react';
import Container from '../../components/Container'

const HomePage = ({ title, name, ...res }) => { // this's `...res`  props we use same components and don't need in this component 

    return (
        <>
            <Container className='container'>
                {title}
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