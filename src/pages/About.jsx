import { Component } from 'react';
// import Button from '../components/Button';
import Container from '../components/Container';
import Counter from '../components/Counter';
import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';
// import ToggleButton from '../components/ToggleButton';
// import * as Typography from '../components/Typography';
// import { H2, H3 } from '../components/Typography'
class AboutPage extends Component {
<<<<<<< 9-State-and-life-cycle
    // state = {
    //     isMounted: true,
    // }
=======
    state = {
        subsribersNum: 0,
        changeNameButtonLightAndDark: "Light"

    }
    increment = () => {
        console.log(this.state.subsribersNum)
        this.setState((prevState) => ({subsribersNum: prevState.subsribersNum + 1 }))
    }
    changeNameButton = () => {
        this.setState({changeNameButtonLightAndDark:"Dark"})
    }
>>>>>>> main
    render() {
        return (
            <>
                <Header myPage="about" />
                <Container>
                    <h2>About Page</h2>
<<<<<<< 9-State-and-life-cycle
                    {/* <ToggleButton /> */}
                    {/* <Typography.Body>
                        my Text
                    </Typography.Body> */}
                    {/* <H2>my Text</H2> */}
                    {/* <H3>my Text</H3> */}
                    {this.state.isMounted ? <Counter /> : ""}
                    
                    <Container>
                        <button onClick={()=>{this.setState({isMounted:false})}}>Click me</button>
                    </Container>
=======
                    <button onClick={this.increment}>Subscribe</button>
                    <span>Subscribers: {this.state.subsribersNum}</span>
                    <br />
                    <button onClick={this.changeNameButton}>{ this.state.changeNameButtonLightAndDark }</button>
>>>>>>> main
                    <Footer />
                </Container>
            </>
        );
    }
}

export default AboutPage;