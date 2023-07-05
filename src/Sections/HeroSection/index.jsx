import React, { Component } from "react";
import Overlay from "../../Components/Overlay";
import Buttons from "../../Components/Buttons";
import * as T from "../../Components/Typography";
import Navbar from "../../Components/Navbar";
import "./style.css";

class HeroSection extends Component {
  render() {
    const links = [
      { url: "/", text: "Home" },
      { url: "/about", text: "About Us" },
      { url: "/services", text: "Spacial" },
      { url: "/contact", text: "Menu" },
      { url: "", text: "Blogs" },
    ]
    return (
      <>
        <section className="heroSection">
          <Overlay>
            <div className="mainHero">
            <div className="navbar">
              <Navbar links={links} src='/assets/Images/Logo.svg' srcIcon='/assets/Images/Vector.svg' ></Navbar>
            </div>
            <div className="boxContent">
              <T.mainH1>Welcome To Golden View Dine </T.mainH1>
              <T.body1>
                Explore the authentic vegan dishes with your friends and family
              </T.body1>
              <Buttons btnContent="Read More" />
            </div>
            </div>
          </Overlay>
        </section>
      </>
    );
  }
}

export default HeroSection;
