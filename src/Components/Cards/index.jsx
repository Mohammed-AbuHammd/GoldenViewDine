import React, { Component } from "react";
import Images from "../Images";
import "./style.css";
import * as T from "../Typography";
import Buttons from "../../Components/Buttons";
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

class Card3 extends Component {
  render() {
    const { imageSrc, header, details, btnContent } = this.props;
    return (
      <div className="card3">
        <div className="img">
          <Images src={imageSrc} />
        </div>

        <div className="content">
          <T.H4 className="card-header">{header} </T.H4>
          <T.body2 className="card-details">{details}</T.body2>
          <Buttons btnContent={btnContent} borderPosition="bottom" />
        </div>
      </div>
    );
  }
}
class Card4 extends Component {
  render() {
    const { imageSrc, name, comment, imgStartUrl } = this.props;
    return (
      <div className="card4">
        <div className="main">
          <Images src={imageSrc} />
          <div className="group">
            <T.H4>{name}</T.H4>
            <div className="imgStart">
              <Images src={imgStartUrl} />
              <Images src={imgStartUrl} />
              <Images src={imgStartUrl} />
              <Images src={imgStartUrl} />
              <Images src={imgStartUrl} />
            </div>
          </div>
        </div>
        <div className="content">
          <T.body2 className="card-details">{comment}</T.body2>
        </div>
      </div>
    );
  }
}

export { Card1, Card2, Card3, Card4 };
