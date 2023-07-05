import React, { Component } from "react";
import Container from "../../Components/Container";
import * as Card from "../../Components/Cards";
import * as T from "../../Components/Typography";
import "./style.css";
class Blogs extends Component {
  render() {
    const cards = [
      {
        imageSrc: "/assets/Images/menu_item1.svg",
        header: "Cooking Dining Experience",
        details:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sollicitudin ",
        btnContent: "Read More",
      },
      {
        imageSrc: "/assets/Images/menu_item4.svg",
        header: "Cooking Dining Experience",
        details:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sollicitudin  ",
        btnContent: "Read More",
      },
      {
        imageSrc: "/assets/Images/menu_item3.svg",
        header: "Cooking Dining Experience",
        details:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sollicitudin ",
        btnContent: "Read More",
      },
    ];
    return (
      <>
        <section className="BlogSection" id="Blogs">
          <Container containerSize="container_fluid">
            <div className="header">
              <T.hDF> Blogs</T.hDF>
              <T.H2>words from our food lovers</T.H2>
            </div>
            <div className="cards">
              {cards.map((card, index) => (
                <Card.Card3
                  key={index}
                  imageSrc={card.imageSrc}
                  header={card.header}
                  details={card.details}
                  btnContent={card.btnContent}
                />
              ))}
            </div>
          </Container>
        </section>
      </>
    );
  }
}

export default Blogs;
