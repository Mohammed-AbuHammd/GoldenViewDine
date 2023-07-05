import React, { Component } from "react";
import Container from "../../Components/Container";
import * as T from "../../Components/Typography";
import Images from "../../Components/Images";
import Buttons from "../../Components/Buttons";
import "./style.css";
class AboutSection extends Component {
  render() {
    return (
      <>
        <section className="AboutSection" id="About">
          <Container>
            <div className="boxContent">
              <div className="leftContent">
                <T.hDF>About Us</T.hDF>
                <T.H2>
                  Discover the taste of worldclass vegan dishes from the kitchen
                  of Go Green Dine
                </T.H2>

                <T.body2>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Sollicitudin hendrerit a amet viverra. Nunc pretium in amet at
                  mattis cras. Quisque commodo mattis ornare a nec odio.
                  Pulvinar orci, egestas eget nulla duis at iaculis nunc, elit.
                  Nibh auctor purus nunc tellus pellentesque nibh mattis.
                  Malesuada integer consectetur. Imperdiet aliquam quam mauris
                  semper suscipit. Molestie maecenas interdum pharetra id velit
                  sed nec.tetur sit sagittis pretium eget vitae semper
                  pellentesque pellentesque.
                </T.body2>
                <Buttons btnContent='Read more' borderPosition='full' />
              </div>
              <div className="rightContent">
                <Images src="/assets/Images/aboutImage.svg" />
              </div>
            </div>
          </Container>
        </section>
      </>
    );
  }
}

export default AboutSection;
