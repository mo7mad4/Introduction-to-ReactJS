import React, { createRef } from "react";
import { H1 } from "../components/Typography";
class Ref extends React.Component {

    input1 = createRef();
    input2 = createRef();
    input3 = createRef();
    input4 = createRef();
    // click = () => {
    //     this.divRef1.current.focus()
    // }
    change = (id) => {
        console.log(this['input' + id])
        this['input' + id].current.focus()
    };


    render() {
        // const divNode = this.divRef.current;
        // console.log(divNode)
        return (
            <>
                <H1>Hello Ref</H1>
                <input ref={this.input1} onChange={() => this.change(2)} />
                <input ref={this.input2} onChange={() => this.change(3)} />
                <input ref={this.input3} onChange={() => this.change(4)} />
                <input ref={this.input4} onChange={() => this.change(1)} />
                {/* <button onClick={this.click}>Click</button> */}
            </>
        );
    }
}

export default Ref;