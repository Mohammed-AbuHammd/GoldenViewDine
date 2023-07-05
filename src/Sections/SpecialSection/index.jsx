import React, { Component } from "react";
import * as Card from "../../Components/Cards";
import * as T from "../../Components/Typography"
import Container from "../../Components/Container";
import Overlay from "../../Components/Overlay";

import './style.css';
// import menu_item5 from  "/public/logo192.png"
class SpecialSection extends Component {
  render() {
    const cards = [
      {
        imageSrc: '/assets/Images/orange-juice (1) 1.png',
        header: "Fresh Food",
        details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sollicitudin hendrerit a amet viverra. Nunc pretium in amet at mattis cras. ",
      },
      {
        imageSrc: "/assets/Images/chef 2.png",
        header: "Skilled Chef",
        details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sollicitudin hendrerit a amet viverra. Nunc pretium in amet at mattis cras. ",
      },
      {
        imageSrc: "/assets/Images/restaurant 1.png",
        header: "Exotic Dishes",
        details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sollicitudin hendrerit a amet viverra. Nunc pretium in amet at mattis cras. ",
      },
    ];

    return (
      <section className="specialSection" id="Special">
        <Overlay>
          <Container containerSize="container_fluid">
            <div className="header">
                <T.hDF> Special</T.hDF>
                <T.H2>What Makes Us Special</T.H2>
            </div>
            <div className="cards">
              {cards.map((card, index) => (
                <Card.Card1
                  key={index}
                  imageSrc={card.imageSrc}
                  header={card.header}
                  details={card.details}
                />
              ))}
            </div>
          </Container>
        </Overlay>
      </section>
    );
  }
}

export default SpecialSection;
