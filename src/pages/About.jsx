import { Component } from 'react';
import Container from '../components/Container';
import Counter from '../components/Counter';
import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';
// import ToggleButton from '../components/ToggleButton';
// import * as Typography from '../components/Typography';
// import { H2, H3 } from '../components/Typography'
class AboutPage extends Component {
    // state = {
    //     isMounted: true,
    // }
    render() {
        return (
            <>
                <Header myPage="about" />
                <Container>
                    <h2>About Page</h2>
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
                    <Footer />
                </Container>
            </>
        );
    }
}

export default AboutPage;