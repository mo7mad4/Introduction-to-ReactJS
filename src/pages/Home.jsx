import { Component } from 'react';
import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';
class HomePage extends Component {
    render() {
        return (
            <div className='container'>
                <Header />
                <h2>Home Page</h2>
                <Footer />
            </div>
        );
    }
}

export default HomePage;