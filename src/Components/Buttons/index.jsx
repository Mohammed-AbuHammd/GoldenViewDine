import React, { Component } from 'react';
import './style.css';

class Buttons extends Component {
  render() {
    const { className } = this.props;

    return (
      <div className="box">
        <button className={`btn ${className ? className : ''}`}>
          {this.props.btnContent}
        </button>
      </div>
    );
  }
}

export default Buttons;
