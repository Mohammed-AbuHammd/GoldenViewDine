import React, { Component } from "react";

import Title from "../../Components/Title";
import Images from "../../Components/Images";
import Details from "../../Components/Details";
import './style.css'
class ReviewsCard extends Component {
  render() {
    const { url1, url2, title, details } = this.props;
    return (
      <>
        <div className="cardReview">
          <div className="header">
            <Images src={url1} />
            <div className="group">
              <Title title={title} />
              <div className="groupImage">
                <Images src={url2} />
                <Images src={url2} />
                <Images src={url2} />
                <Images src={url2} />
                <Images src={url2} />
              </div>
            </div>
          </div>
          <div className="details">
            <Details details={details} />
          </div>
        </div>
      </>
    );
  }
}

export default ReviewsCard;
