import { Component } from 'react';
import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';
class AboutPage extends Component {
    render() {
        return (
            <div className='container'>
                <Header />
                <h2>About Page</h2>
                <Footer />
            </div>
        );
    }
}

export default AboutPage;