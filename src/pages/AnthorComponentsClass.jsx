import React from "react";
import {H2} from '../components/Typography'
class Anthor extends React.Component {
    constructor(props) {
        super(props);
        this.state = { myState: false }
        console.log("from constructor")
    }
    static getDerivedStateFromProps(props, state) {
        console.log("from get Derived state from props")
        return { myState: props.state }
    }
    render() {
        return (
            <>
                <H2>Hello</H2>
            </>
        );
    }
}

export default Anthor;