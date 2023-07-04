import React, { Component } from "react";
import './style.css'
class MenuItem extends Component {
  render() {
    const { imgUrl, header, description, price } = this.props;

    return (
      <>
        <div className="menu_item">
          <img src={imgUrl} alt="" />
          <div className="content">
            <h4>{header}</h4>
            <p>{description}</p>
          </div>
        
          <div className="price">
            Rs <span>{price}</span>
          </div>
        </div>
      </>
    );
  }
}

export default MenuItem;
