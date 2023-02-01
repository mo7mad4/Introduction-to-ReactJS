import { Component } from "react";
import './style.css'
class ToggleButton extends Component {
    state = {
        theme: "light"

    }
    handleToggleTheme = () => {
        // console.log("object")
        // this.setState({ theme: "dark" })
        // this.state.theme === "light" ? this.setState({ theme: "dark" }) : this.setState({ theme: "light" })
        this.setState(prevState => {
            return prevState.theme === "light" ? { theme: "dark" } : { theme: "light" }
        })
    }
    render() {
        return (
            <button className={`toggleButton ${this.state.theme}`} onClick={this.handleToggleTheme}>
                {this.state.theme === "light" ? "dark" : "light"}
            </button>
        );
    }
}

export default ToggleButton;