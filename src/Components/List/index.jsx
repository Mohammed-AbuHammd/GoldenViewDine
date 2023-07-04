import React, { Component } from "react";
import "./style.css";

class List extends Component {
  render() {
    const { items, showIcon } = this.props;

    return (
      <ul>
        {items.map((item, index) => (
          <li key={index}>
            <a href={item.href}>
              {showIcon && <i className={`icon ${item.icon}`}></i>}

              {item.text}
            </a>
          </li>
        ))}
      </ul>
    );
  }
}

export default List;
