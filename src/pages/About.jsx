import { Component } from 'react';
// import Button from '../components/Button';
import Container from '../components/Container';
import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';
class AboutPage extends Component {
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
    render() {
        return (
            <>
                <Header myPage="about" />
                <Container>
                    <h2>About Page</h2>
                    <button onClick={this.increment}>Subscribe</button>
                    <span>Subscribers: {this.state.subsribersNum}</span>
                    <br />
                    <button onClick={this.changeNameButton}>{ this.state.changeNameButtonLightAndDark }</button>
                    <Footer />
                </Container>
            </>
        );
    }
}

export default AboutPage;