import React from "react";
import { H1, H2 } from '../components/Typography'
class Anthor extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            myState: false,
            counter: 0
        }
        console.log("from constructor")
    }
    static getDerivedStateFromProps(props, state) { //getDerivedStateFromProps this is will excute will update components
        console.log("from get Derived state from props")
        return { myState: props.state }
    }

    componentDidMount() {
        console.log('Components did Mount')
    }
    shouldComponentUpdate() { //return for value boolean => true or false and never update for website if the value = false
        if (this.state.counter > 5 && this.state.counter < 10) {
            return false;
        }
        return true;

    }
    getSnapshotBeforeUpdate(PrevProps, prevState) { // this is exicute After update Example => preveState will update and given last update
        console.log("getSnapshotBeforeUpdate")   
        console.log("PrevProps: ", PrevProps)
        console.log("prevState: ", prevState.counter)
        return null;
    }
    
    componentDidUpdate() { // if the component did update use wrong we will be unlimited loop
        console.log("componentDidUpdate")
    }

    componentWillUnmount() { // component will no display
        console.log('from component will Unmounted ')
    }
    render() {
        console.log("From Render")
        console.log(this.state.counter)
        return (
            <>
                <H2>Hello</H2>

                <H1>Counter : {this.state.counter}</H1>
                <button onClick={() => this.setState(prevState => ({ counter: prevState.counter + 1 }))}>Click +</button>
                <button onClick={() => this.setState(prevState => ({ counter: prevState.counter - 1 }))}>Click -</button>
            </>
        );
    }
}

export default Anthor;