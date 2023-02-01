import React, { Component } from 'react'

class Counter extends Component {
    state = {
        counter: 0
    }
    increment = () => {
        this.setState(prevState => { return { counter: prevState.counter + 1 } })

    }

    // increment = () => {
    //     this.setState(prevState => ({ counter: prevState.counter + 1 }))

    // }
    
    decrement = () => {
        this.setState(prevState => { if(prevState.counter > 0) return { counter: prevState.counter - 1 } })
        
    }
    // decrement = () => {
    //     this.setState(prevState => ({ counter: prevState.counter - 1 }))

    // }

    componentDidMount() {
        console.log("Mounting")
    }
    componentDidUpdate() {
        console.log("updating")
    }
    componentWillUnmount() {
        console.log("Unmounting")
    }
    render() {
        return (
            <>
                <button onClick={this.decrement}>-</button>
                <p>{ this.state.counter }</p>
                <button onClick={this.increment}>+</button>
            </>
        )
    }
}
export default Counter;
