import { Component } from 'react';
import Container from '../components/Container';
import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';
class AboutPage extends Component {
    render() {
        return (
            <>
                <Header myPage="about" />
                <Container>
                    <h2>About Page</h2>
                    <Footer />
                </Container>
            </>
        );
    }
}

export default AboutPage;