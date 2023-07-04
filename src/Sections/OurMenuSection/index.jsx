import React, { Component } from "react";
import Container from "../../Components/Container";
import MainSectionContent from "../../Components/MainSectionContent";
import MenuItem from "../../Components/MenuItem";
import Buttons from "../../Components/Buttons";
import Overlay from "../../Components/Overlay";
import Images from "../../Components/Images";
import Details from "../../Components/Details";
import Reviews from "../Reviews";
import CardStatistics from "../../Components/CardStatistics";
import "./style.css";
import item1 from "../../assets/Images/menu_item1.svg";
import item2 from "../../assets/Images/menu_item2.svg";
import item3 from "../../assets/Images/menu_item3.svg";
import item4 from "../../assets/Images/menu_item4.svg";
import item5 from "../../assets/Images/menu_item5.svg";
import item6 from "../../assets/Images/menu_item6.svg";
import imageMid from "../../assets/Images/Component 5.svg";
import Cooking_ingredients from "../../assets/Images/Cooking_ingredients.svg";
// ***********************
import dish from "../../assets/Images/dish 1.svg";
import chef from "../../assets/Images/chef (1) 1 (1).svg";
import team from "../../assets/Images/team 1 (1).svg";
// ************************
import Ellipse1 from "../../assets/Images/Ellipse 1.svg";
import Ellipse2 from "../../assets/Images/Ellipse 2.svg";
import Start from "../../assets/Images/start.svg";

class OurMenu extends Component {
  state = {};
  render() {
    const cardData = [
      {
        id: 1,
        imgUrl: item1,
        header: "Lorem ipsum dolor sit amet",
        description: " Lorem ipsum dolor sit amet",
        price: "222",
      },
      {
        id: 2,
        imgUrl: item2,
        header: "Phasellus convallis maximus",
        description: " Lorem ipsum dolor sit amet",
        price: "148",
      },
      {
        id: 3,
        imgUrl: item3,
        header: "Vivamus sodales augue vita",
        description: " Lorem ipsum dolor sit amet",
        price: "590",
      },
      {
        id: 4,
        imgUrl: item4,
        header: "Vestibulum est turpis",
        description: " Lorem ipsum dolor sit amet",
        price: "135",
      },
      {
        id: 5,
        imgUrl: item5,
        header: "Pellentesque semper semper",
        description: " Lorem ipsum dolor sit amet",
        price: "130",
      },
      {
        id: 6,
        imgUrl: item3,
        header: "Vivamus sodales augue vita",
        description: " Lorem ipsum dolor sit amet",
        price: "590",
      },
      {
        id: 7,
        imgUrl: item4,
        header: "Vestibulum est turpis",
        description: " Lorem ipsum dolor sit amet",
        price: "135",
      },
      {
        id: 8,
        imgUrl: item1,
        header: "Lorem ipsum dolor sit amet",
        description: " Lorem ipsum dolor sit amet",
        price: "222",
      },
      {
        id: 9,
        imgUrl: item2,
        header: "Phasellus convallis maximus",
        description: " Lorem ipsum dolor sit amet",
        price: "148",
      },
      {
        id: 10,
        imgUrl: item6,
        header: "Nullam elementum magna",
        description: " Lorem ipsum dolor sit amet",
        price: "200",
      },
      {
        id: 11,
        imgUrl: item6,
        header: "Nullam elementum magna",
        description: " Lorem ipsum dolor sit amet",
        price: "200",
      },
      {
        id: 12,
        imgUrl: item5,
        header: "Pellentesque semper semper",
        description: " Lorem ipsum dolor sit amet",
        price: "130",
      },
    ];
    // *************************
    const cardReview = [
      {
        id: 1,
        url1: Ellipse1,
        url2: Start,
        title: "Alex Andrina",
        details:
          "“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sollicitudin hendrerit a amet viverra. Nunc pretium in amet at mattis cras. Quisque commodo mattis ornare a nec odio. Pulvinar orci, egestas eget nulla duis at iaculis nunc, elit. “",
      },
      {
        id: 2,
        url1: Ellipse1,
        url2: Start,
        title: "Alex Andrina",
        details:
          "“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sollicitudin hendrerit a amet viverra. Nunc pretium in amet at mattis cras. Quisque commodo mattis ornare a nec odio. Pulvinar orci, egestas eget nulla duis at iaculis nunc, elit. “",
      },
      {
        id: 3,
        url1: Ellipse2,
        url2: Start,
        title: "Alex Andrina",
        details:
          "“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sollicitudin hendrerit a amet viverra. Nunc pretium in amet at mattis cras. Quisque commodo mattis ornare a nec odio. Pulvinar orci, egestas eget nulla duis at iaculis nunc, elit. “",
      },
    ];

    // *************************
    const statisticsData = [
      { id: 1, imgUrl: dish, count: 250, desc: "Delicacy" },
      { id: 1, imgUrl: chef, count: 10, desc: "Renowned Chefs" },
      { id: 1, imgUrl: team, count: 30, desc: "Members" },
    ];
    // *************************
    return (
      <>
        <div className="menuSection">
          <Container>
            <MainSectionContent
              SectionHead="Straight From Kitchen"
              desc="Our Menu"
              position="centerE"
            />

            <div className="items">
              {cardData.map((item) => (
                <MenuItem
                  key={item.id}
                  imgUrl={item.imgUrl}
                  header={item.header}
                  description={item.description}
                  price={item.price}
                />
              ))}
            </div>
          </Container>
        </div>
        {/* **************************** */}
        <div className="midContent">
          <Overlay>
            <div className="box">
              <div className="left">
                <Images src={imageMid} />
              </div>
              <div className="content">
                <MainSectionContent
                  SectionHead="Come join us for a lunch this weekend and enjoy"
                  desc="FLAT 10% OFF"
                />
                <div className="button">
                  <Buttons btnContent="Book Table" />
                </div>
              </div>
              <div className="right">
                <Images src={imageMid} />
              </div>
            </div>
          </Overlay>
        </div>
        {/* **************************** */}
        <div className="cooking_ingredients">
          <Container>
            <div className="box">
              <div className="mainContent">
                <MainSectionContent
                  position="left"
                  SectionHead="Cooking ingredients"
                  desc="What goes in"
                />
                <div className="boxContent">
                  <Details details="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sollicitudin hendrerit a amet viverra. Nunc pretium in amet at mattis cras. Quisque commodo mattis ornare a nec odio. Pulvinar orci, egestas eget nulla duis at iaculis nunc, elit. Nibh auctor purus nunc tellus pellentesque nibh mattis. Malesuada integer nulla orci convallis sit. At libero lacus, eget fermentum sed turpis curabitur donec consectetur. Imperdiet aliquam quam mauris semper suscipit." />
                  <Buttons btnContent="Read more" />
                </div>
              </div>
              <div className="image">
                <Images src={Cooking_ingredients} />
              </div>
            </div>
          </Container>
        </div>
        {/* **************************** */}
        <div className="statistics">
          <Overlay>
            <Container>
              <div className="box">
                {statisticsData.map((item) => (
                  <CardStatistics
                    key={item.id}
                    imgUrl={item.imgUrl}
                    count={item.count}
                    desc={item.desc}
                  />
                ))}
              </div>
            </Container>
          </Overlay>
        </div>
        {/* **************************** */}

        <div className="reviewsBox">
          <div className="mainCont">
            <MainSectionContent
              SectionHead="Reviews"
              desc="Words From Our Food Lovers"
              position="centerE"
            />
          </div>
          <div className="box">
            {cardReview.map((review, index) => (
              <Reviews
                url1={review.url1}
                url2={review.url2}
                title={review.title}
                details={review.details}
              />
            ))}
          </div>
        </div>
      </>
    );
  }
}

export default OurMenu;
