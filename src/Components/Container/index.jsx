import React, { Component } from "react";
import "./style.css";
class Container extends Component {
  render() {
    const { containerSize } = this.props;
    const containerClassName =
      containerSize === "container_fluid" ? "container_fluid" : "container";

    return (
      <>
        <div className={`  ${containerClassName}`}>{this.props.children} </div>
      </>
    );
  }
}

export default Container;
