import React, { Component } from "react";
import "./style.css";
class Button extends Component {
  render() {
    const { borderPosition, btnContent ,size} = this.props;
    const buttonClassName = borderPosition === "bottom" ? "bottom" : "full";
    const btnClassName1=size==='lg'? 'lg':'mid';
    return (
      <div className="button-wrapper">
        <button className={`btn ${buttonClassName} ${btnClassName1}`}>{btnContent}</button>
      </div>
    );
  }
}

export default Button;
