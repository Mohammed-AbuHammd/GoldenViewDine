import React, { Component } from "react";
import "./style.css";
class MainSectionContent extends Component {
  render() {
    const { position } = this.props;

    return (
      <>
        <div
          className={`main_content ${position === "left" ? "left" : "centerE"}`}
        >
          <h2>
            {this.props.SectionHead}
            <br /> {this.props.name}{" "}
          </h2>
          <p className="mainContentP">{this.props.desc}</p>
        </div>
      </>
    );
  }
}

export default MainSectionContent;
