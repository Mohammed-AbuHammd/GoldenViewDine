import React, { Component } from "react";
import * as Card from "../../Components/Cards";
import * as T from "../../Components/Typography";
import Container from "../../Components/Container";
import "./style.css";
import Overlay from "../../Components/Overlay";
import Images from "../../Components/Images";
import Button from "../../Components/Buttons";
class SpecialSection extends Component {
  render() {
    const cards = [
      {
        id: 1,
        imageSrc: "/assets/images/menu_item1.svg",
        header: "Lorem ipsum dolor sit amet",
        details: " Lorem ipsum dolor sit amet",
        price: "222",
      },
      {
        id: 2,
        imageSrc: "/assets/images/menu_item2.svg",
        header: "Phasellus convallis maximus",
        details: " Lorem ipsum dolor sit amet",
        price: "148",
      },
      {
        id: 3,
        imageSrc: "/assets/images/menu_item3.svg",
        header: "Vivamus sodales augue vita",
        details: " Lorem ipsum dolor sit amet",
        price: "590",
      },
      {
        id: 4,
        imageSrc: "/assets/images/menu_item4.svg",
        header: "Vestibulum est turpis",
        details: " Lorem ipsum dolor sit amet",
        price: "135",
      },
      {
        id: 5,
        imageSrc: "/assets/images/menu_item5.svg",
        header: "Pellentesque semper semper",
        details: " Lorem ipsum dolor sit amet",
        price: "130",
      },
      {
        id: 6,
        imageSrc: "/assets/images/menu_item3.svg",
        header: "Vivamus sodales augue vita",
        details: " Lorem ipsum dolor sit amet",
        price: "590",
      },
      {
        id: 7,
        imageSrc: "/assets/images/menu_item4.svg",
        header: "Vestibulum est turpis",
        details: " Lorem ipsum dolor sit amet",
        price: "135",
      },
      {
        id: 8,
        imageSrc: "/assets/images/menu_item1.svg",
        header: "Lorem ipsum dolor sit amet",
        details: " Lorem ipsum dolor sit amet",
        price: "222",
      },
      {
        id: 9,
        imageSrc: "/assets/images/menu_item2.svg",
        header: "Phasellus convallis maximus",
        details: " Lorem ipsum dolor sit amet",
        price: "148",
      },
      {
        id: 10,
        imageSrc: "/assets/images/menu_item6.svg",
        header: "Nullam elementum magna",
        details: " Lorem ipsum dolor sit amet",
        price: "200",
      },
      {
        id: 11,
        imageSrc: "/assets/images/menu_item6.svg",
        header: "Nullam elementum magna",
        details: " Lorem ipsum dolor sit amet",
        price: "200",
      },
      {
        id: 12,
        imageSrc: "/assets/images/menu_item5.svg",
        header: "Pellentesque semper semper",
        details: " Lorem ipsum dolor sit amet",
        price: "130",
      },
    ];

    return (
      <section className="ourMenu" id="Menu">
        <Container containerSize="container_fluid">
          <div className="header">
            <T.hDF> Straight From Kitchen</T.hDF>
            <T.H2>Our Menu</T.H2>
          </div>
          <div className="cards">
            {cards.map((card, index) => (
              <Card.Card2
                key={index}
                imageSrc={card.imageSrc}
                header={card.header}
                details={card.details}
                price={card.price}
              />
            ))}
          </div>
        </Container>
        <div className="boxContent1">
          <Overlay>
            <Container>
              <div className="box">
                <div className="leftImg">
                  <Images src="assets/Images/Component 5.svg" />
                </div>
                <div className="content">
                  <T.pDF>Come join us for a lunch this weekend and enjoy</T.pDF>
                  <T.hDC>FLAT 10% OFF</T.hDC>
                  <Button btnContent="Book Table" />
                </div>
                <div className="rightImg">
                  <Images src="assets/Images/Component 5.svg" />
                </div>{" "}
              </div>
            </Container>
          </Overlay>
        </div>
        <div className="boxContent2">
          <Container>
            <div className="box2">
              <div className="content">
                <T.hDF>Cooking Ingredients</T.hDF>
                <T.H2>What Goes In</T.H2>
                <T.body2>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Sollicitudin hendrerit a amet viverra. Nunc pretium in amet at
                  mattis cras. Quisque commodo mattis ornare a nec odio.
                  Pulvinar orci, egestas eget nulla duis at iaculis nunc, elit.
                  Nibh auctor purus nunc tellus pellentesque nibh mattis.
                  Malesuada integer nulla orci convallis sit. At libero lacus,
                  eget fermentum sed turpis curabitur donec consectetur.
                  Imperdiet aliquam quam mauris semper suscipit.
                </T.body2>
                <Button btnContent="Read more" />
              </div>
              <div className="image">
                <Images src="/assets/Images/Cooking_ingredients.svg" />
              </div>
            </div>
          </Container>
        </div>
        <div className="statistics">
          <Overlay>
            <Container>
              <div className="cards">
                <div className="card">
                  <Images src="/assets/Images/dish 1.svg" />
                  <div className="box">
                    <span className="count">250+</span> <T.H4> Delicacy</T.H4>
                  </div>
                </div>
                <div className="card">
                  <Images src="/assets/Images/chef (1) 1 (1).svg" />
                  <div className="box">
                    <span className="count">10+</span>
                    <T.H4> Renowned Chefs</T.H4>
                  </div>
                </div>
                <div className="card">
                  <Images src="/assets/Images/team 1 (1).svg" />
                  <div className="box">
                    <span className="count">30+</span>
                    <T.H4> Members</T.H4>
                  </div>
                </div>
              </div>
            </Container>
          </Overlay>
        </div>
      </section>
    );
  }
}

export default SpecialSection;
