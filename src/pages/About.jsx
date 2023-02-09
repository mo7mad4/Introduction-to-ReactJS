import { Component } from 'react';
import Container from '../components/Container';
class AboutPage extends Component {
    state = {
        subsribersNum: 0,
        changeNameButtonLightAndDark: "Light"

    }
    increment = () => {
        console.log(this.state.subsribersNum)
        this.setState((prevState) => ({ subsribersNum: prevState.subsribersNum + 1 }))
    }
    changeNameButton = () => {
        this.setState({ changeNameButtonLightAndDark: "Dark" })
    }
    render() {
        return (
            <>
                <Container>
                    <h2>About Page</h2>
                    <button onClick={this.increment}>Subscribe</button>
                    <span>Subscribers: {this.state.subsribersNum}</span>
                    <br />
                    <button onClick={this.changeNameButton}>{this.state.changeNameButtonLightAndDark}</button>
                </Container>
            </>
        );
    }
}

export default AboutPage;