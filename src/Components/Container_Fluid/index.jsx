import React, { Component } from "react";
import './style.css'
class Container_Fluid extends Component {
  render() {
    return (
      <>
        <div className="container_fluid">{this.props.children}</div>
      </>
    );
  }
}

export default Container_Fluid;
