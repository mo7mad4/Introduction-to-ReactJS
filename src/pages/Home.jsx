import { Component } from 'react';
import Button from '../components/Button';
import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';
import Card from "../components/Task one/Card";
import img1 from "../images/empty-cart.png";
import img2 from "../images/profile.png";
class HomePage extends Component {
    render() {
        return (
            <div className='container'>
                <Header myPage="home" />
                <h2>Home Page</h2>
                <section>
                    <h4>Section 1</h4>
                    <Button title="Click me" isActive />
                </section>
                <section>
                    <h4>Section 2</h4>
                    <Button title="Add new product" />
                    <Button />
                </section>
                <Card
                    title="empty-cart"
                    img={img1}
                    body="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur velit eveniet sit modi vel placeat unde, est
            sunt consequatur asperiores error nihil incidunt odio ut dolore numquam. Quis, saepe ipsum."
                />
                <Card
                    title="profile"
                    img={img2}
                    body="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur velit eveniet sit modi vel placeat unde, est
            sunt consequatur asperiores error nihil incidunt odio ut dolore numquam. Quis, saepe ipsum."
                />
                <Footer />
            </div>
        );
    }
}

export default HomePage;