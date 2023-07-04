import React, { Component } from "react";
import "./style.css";

class Cards extends Component {
  render() {
    const { imgUrl, header, description, imgFull } = this.props;

    return (
      <div className={`card ${imgFull ? "imgFull" :""}`}>
        <div className="imgBox">
          <img src={imgUrl} alt="Card" />
        </div>
        <div className="content">

        <h3>{header}</h3>
        <p>{description}</p>

        </div>
        {this.props.children}
      </div>
    );
  }
}

export default Cards;
