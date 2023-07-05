import React, { Component } from "react";
import Images from "../Images";
import "./style.css";
import * as T from "../Typography";

class Card1 extends Component {
  render() {
    const { imageSrc, header, details } = this.props;
    return (
      <div className="card1">
        <Images src={imageSrc} />
        <T.H3 className="card-header">{header}</T.H3>
        <T.body2 className="card-details">{details}</T.body2>
      </div>
    );
  }
}
class Card2 extends Component {
  render() {
    const { imageSrc, header, details, price } = this.props;
    return (
      <div className="card2">
        <div className="boxItemContent">
          <div className="img">
          <Images src={imageSrc} />
          </div>
          <div className="content">
            <h5 className="card-header">{header} </h5>
            <p className="card-details">{details}</p>
          </div>
        </div>
        <div className="boxPrice">
          <h4>Rs {price} </h4>
        </div>
      </div>
    );
  }
}

export { Card1, Card2 };
