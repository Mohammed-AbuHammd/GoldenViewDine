import React, { Component } from "react";

class Images extends Component {
  render() {
    return (
      <>
        <div className="image">
          <img
            src={this.props.src}
            width={this.props.width}
            height={this.props.height}
            alt=""
          />
        </div>
      </>
    );
  }
}

export default Images;
