import React, { Component } from "react";
import "./style.css";
class Navbar extends Component {
  render() {
    const { links } = this.props;
    return (
      <nav className="navbar">
        <a href="index.jsx" className="brand">
          <img src={this.props.src} alt={this.props.alt} className="logo" />
        </a>
        <ul className="menu">
          {links.map((link, index) => (
            <li key={index} className="nav_item">
              <a href={link.url} className="nav_link">
                {link.text}
              </a>
            </li>
          ))}
          <img src={this.props.srcIcon} alt={this.props.alt} className="icon" />
        </ul>
        <div className="context"><button className="button">Book Now</button></div>
        {this.props.children}
      </nav>
    );
  }
}

export default Navbar;
