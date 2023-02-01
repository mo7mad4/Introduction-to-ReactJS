import React, { Component } from 'react'
import './style.css'

export default class Container extends Component {
  render() {
    return (
      <div className={this.props.className ? 'container ' + this.props.className : "container"}>
        {this.props.children}
      </div>
      // <div className={"container " + this.props.className}>
      //   {this.props.children}
      // </div>
    )
  }
}
