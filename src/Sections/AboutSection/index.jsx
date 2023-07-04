import React, { Component } from "react";
import Container from "../../Components/Container";
import MainSectionContent from "../../Components/MainSectionContent";
import Details from "../../Components/Details";
import Buttons from "../../Components/Buttons";
import Images from "../../Components/Images";
import "./style.css";
import aboutImage from "../../assets/Images/aboutImage.svg";
class AboutSection extends Component {
  render() {
    return (
      <>
        <div className="about" id="about">
        
            <Container>
              <div className="boxAbout">
                <div className="left">
                  <MainSectionContent
                  position='left'
                    SectionHead="About Us"
                    desc="Discover the taste of worldclass vegan dishes from the kitchen of Go Green Dine"
                  />
                  <Details details="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sollicitudin hendrerit a amet viverra. Nunc pretium in amet at mattis cras. Quisque commodo mattis ornare a nec odio. Pulvinar orci, egestas eget nulla duis at iaculis nunc, elit. Nibh auctor purus nunc tellus pellentesque nibh mattis. Malesuada integer consectetur. Imperdiet aliquam quam mauris semper suscipit. Molestie maecenas interdum pharetra id velit sed nec.tetur sit sagittis pretium eget vitae semper pellentesque pellentesque." />
                  <Buttons btnContent="Read more " />
                </div>
                <div className="right">
                  <Images src={aboutImage} />
                </div>
              </div>
            </Container>
         
        </div>
      </>
    );
  }
}

export default AboutSection;
