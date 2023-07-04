import React, { Component } from "react";
import "./style.css";
import "../../assets/Fonts/fontawesome/css/all.min.css";
import "../../assets/Fonts/fontawesome/css/fontawesome.min.css";
import Container from "../../Components/Container";
import Overlay from "../../Components/Overlay";
import List from "../../Components/List";
import Images from "../../Components/Images";
import Details from "../../Components/Details";
import Title from "../../Components/Title";
import Logo from "../../assets/Images/Logo.svg";
import "../../Components/FormGroup";
import FormGroup from "../../Components/FormGroup";
class Foo extends Component {
  render() {
    const itemList1 = [
      { text: "Privacy Policy", href: "" },
      { text: "Terms & conditions", href: "" },
      { text: "Blogs", href: "" },
      { text: "Our team", href: "" },
      { text: "Our kitchen", href: "" },
    ];
    const itemList2 = [
      {
        text: "Gogreendineservice@gmail.com",
        icon: "fas fa-envelope",
        href: "",
      },
      {
        text: "AZ complex bylane3 Mandari Rd Mumbai 1100867",
        icon: "fas fa-map-marker-alt",
        href: "",
      },
      { text: "+1800 287 256", icon: "fas fa-phone", href: "" },
    ];

    const socialIcon = [
      { text: "", icon: "fa-brands fa-instagram", href: "" },
      { text: "", icon: "fa-brands fa-twitter", href: "" },
      {
        text: "",
        icon: "fa-brands fa-youtube",
        href: "https://www.youtube.com/",
      },
    ];
    return (
      <>
        <div className="footer">
          <Overlay>
            <Container>
              <div className="boxFooter">
                <div className="left">
                  <div className="logoDesc">
                    <Images src={Logo} />
                    <Title title="Golden View Dine " />
                  </div>
                  <div className="description">
                    <Details
                      style={{ width: "200px" }}
                      details="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sollicitudin "
                    />
                  </div>
                  <div className="socialIcon">
                    <List items={socialIcon} showIcon={true} />
                  </div>
                </div>
                <div className="list1">
                  <Title title="Other Links" />
                  <List items={itemList1} showIcon={false} />
                </div>
                <div className="list2">
                  <Title title="Contact Us" />
                  <List items={itemList2} showIcon={true} />
                </div>
              </div>
            </Container>
          </Overlay>
        </div>
        <div className="boxForm">
          <Container>
            <FormGroup
              label={"Subscribe to our Newsletter"}
              type={"email"}
              placeholder={"Your Email Id"}
              typeBtn={"Submit"}
              value={"Subscribe"}
            />
          </Container>
        </div>
        <div className="footerContent">
          <p>
            Copyright &copy; 2022 Golden Dine Website <br /> All rights reserved
          </p>
        </div>
      </>
    );
  }
}

export default Foo;
