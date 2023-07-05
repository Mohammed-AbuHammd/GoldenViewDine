import React, { Component } from "react";
import "./style.css";
import * as Card from "../../Components/Cards";
import * as T from "../../Components/Typography";

class Reviews extends Component {
  render() {
    const cards = [
      {
        imageSrc: "/assets/Images/Ellipse 1.svg",
        name: "Alex Andrina",
        comment:
          "“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sollicitudin hendrerit a amet viverra. Nunc pretium in amet at mattis cras. Quisque commodo mattis ornare a nec odio. Pulvinar orci, egestas eget nulla duis at iaculis nunc, elit. “ ",
        imgStartUrl: "/assets/Images/start.svg",
      },
      {
        imageSrc: "/assets/Images/Ellipse 1.svg",
        name: "Alex Andrina",
        comment:
          "“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sollicitudin hendrerit a amet viverra. Nunc pretium in amet at mattis cras. Quisque commodo mattis ornare a nec odio. Pulvinar orci, egestas eget nulla duis at iaculis nunc, elit. “ ",
        imgStartUrl: "/assets/Images/start.svg",
      },
      {
        imageSrc: "/assets/Images/Ellipse 2.svg",
        name: "Alex Andrina",
        comment:
          "“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sollicitudin hendrerit a amet viverra. Nunc pretium in amet at mattis cras. Quisque commodo mattis ornare a nec odio. Pulvinar orci, egestas eget nulla duis at iaculis nunc, elit. “ ",
        imgStartUrl: "/assets/Images/start.svg",
      },
    ];
    return (
      <>
        <section className="Reviews">
          <div className="header">
            <T.hDF> Reviews</T.hDF>
            <T.H2>Words From Our Food Lovers</T.H2>
          </div>
          <div className="cards">
            {cards.map((card, index) => (
              <Card.Card4
                key={index}
                imageSrc={card.imageSrc}
                name={card.name}
                comment={card.comment}
                imgStartUrl={card.imgStartUrl}
              />
            ))}
          </div>
        </section>
      </>
    );
  }
}

export default Reviews;
