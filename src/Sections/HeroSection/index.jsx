import React, { Component } from "react";
import Overlay from "../../Components/Overlay";
import Buttons from "../../Components/Buttons";
import Navbar from "../../Components/Navbar";
import logo from "../../assets/Images/Logo.svg";
import icon from "../../assets/Images/Vector.svg";
import Title from "../../Components/Title";
import Details from "../../Components/Details";
import "./style.css";

class HeroSection extends Component {
  render() {
    const links = [
      { url: "/", text: "Home" },
      { url: "/about", text: "About Us" },
      { url: "/services", text: "Spacial" },
      { url: "/contact", text: "Menu" },
      { url: "", text: "Blogs" },
    ];
    return (
      <>
        <div className="heroSection">
          <Overlay>
            <div className="box">
              <div className="navbar">
                <Navbar links={links} src={logo} s={icon}></Navbar>
              </div>
              <div className="boxContent">
                <Title title="Welcome To Golden View Dine" />
                <Details details="Explore the authentic vegan dishes with your friends and family" />
                <Buttons btnContent="Read more" />
              </div>
            </div>
          </Overlay>
        </div>
      </>
    );
  }
}

export default HeroSection;
