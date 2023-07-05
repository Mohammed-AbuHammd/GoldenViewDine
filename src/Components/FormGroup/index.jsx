import React, { Component } from "react";
import "./style.css";

class FormGroup extends Component {
  render() {
    return (
      <>
        <div className="formGroup">
          <form>
            <div className="box">
              <div className="input_group">
                <div className="lab">
                  <i class="fa-sharp fa-regular fa-envelope"></i>
                  <label htmlFor="">{this.props.label}</label>
                </div>
                <input
                  type={this.props.type}
                  placeholder={this.props.placeholder}
                />
              </div>
              <div className="btnForm">
                <input type={this.props.typeBtn} value={this.props.value} />
              </div>
            </div>
          </form>
        </div>
      </>
    );
  }
}

export default FormGroup;
