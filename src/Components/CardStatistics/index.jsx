import React, { Component } from "react";
import './style.css'
class CardStatistics extends Component {
  render() {
    const { imgUrl, count, desc } = this.props;
    return (
      <>
        <div className="cardStatistics">
          <img src={imgUrl} alt="" />
          <div className="content">
            <p>
              {count}
              <span>+</span>
            </p>
            <h4>{desc}</h4>
          </div>
        </div>
      </>
    );
  }
}

export default CardStatistics;
