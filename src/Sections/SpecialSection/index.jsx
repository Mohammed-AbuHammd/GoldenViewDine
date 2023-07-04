import React, { Component } from "react";
import Overlay from "../../Components/Overlay";
import ContainerFluid from "../../Components/Container_Fluid";
import Cards from "../../Components/Cards";
import MainSectionContent from "../../Components/MainSectionContent";
import "./style.css";

// Image Card
import juice from "../../assets/Images/orange-juice (1) 1.png";
import chef from "../../assets/Images/chef 2.png";
import restaurant from "../../assets/Images/restaurant 1.png";

class SpecialSection extends Component {
  render() {
    const cardData = [
      {
        id: 1,
        imgUrl: juice,
        header: "Fresh Food",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sollicitudin hendrerit a amet viverra. Nunc pretium in amet at mattis cras. ",
      },
      {
        id: 2,
        imgUrl: chef,
        header: " Skilled Chef",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sollicitudin hendrerit a amet viverra. Nunc pretium in amet at mattis cras. ",
      },
      {
        id: 3,
        imgUrl: restaurant,
        header: "Exotic Dishes",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sollicitudin hendrerit a amet viverra. Nunc pretium in amet at mattis cras. ",
      },
    ];

    return (
      <>
        <div className="special">
          <Overlay>
            <ContainerFluid>
              <MainSectionContent 
              position='centerE'
              SectionHead='Special' 
              desc ='What makes us special'/>
           

              <div className="cards">
                {cardData.map((card) => (
                  <Cards
                    key={card.id}
                    imgUrl={card.imgUrl}
                    header={card.header}
                    description={card.description}
                  />
                ))}
              </div>
            </ContainerFluid>
          </Overlay>
        </div>
      </>
    );
  }
}

export default SpecialSection;
