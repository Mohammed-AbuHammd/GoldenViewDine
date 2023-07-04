import React, { Component } from "react";
import Container from "../../Components/Container_Fluid";
import Cards from "../../Components/Cards";
import MainSectionContent from "../../Components/MainSectionContent";
import Buttons from "../../Components/Buttons";
import blog1 from "../../assets/Images/menu_item1.svg";
import blog2 from "../../assets/Images/menu_item3.svg";
import blog3 from "../../assets/Images/menu_item4.svg";

import "./style.css";

class Blogs extends Component {
  render() {
    const cardData = [
      {
        id: 1,
        imgUrl: blog1,
        header: "Cooking Dining Experience",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sollicitudin",
      },
      {
        id: 2,
        imgUrl: blog2,
        header: "Cooking Dining Experience",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sollicitudin",
        direction: "columnInverse",
      },
      {
        id: 3,
        imgUrl: blog3,
        header: "Cooking Dining Experience",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sollicitudin",
      },
    ];

    return (
      <div className="blog">
        <Container>
          <div className="head">
            <MainSectionContent
              SectionHead="Blogs"
              desc="Words From Our Food Lovers"
            />
          </div>
          <div className="cards imgFull">
            {cardData.map((card) => (
              <Cards
                key={card.id}
                imgUrl={card.imgUrl}
                header={card.header}
                description={card.description}
                className={
                  card.direction === "columnReverse" ? "columnReverse" : ""
                }
              >
                <div className="btnBox">
                <Buttons btnContent="Read More" className="noneBorder" />
                </div>
              </Cards>
            ))}
          </div>
        </Container>
      </div>
    );
  }
}

export default Blogs;
