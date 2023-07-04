import React, { Component } from "react";
import "./style.css";
import "../../assets/Fonts/fontawesome/css/all.min.css";
import "../../assets/Fonts/fontawesome/css/fontawesome.min.css";
class FormGroup extends Component {
  render() {
    return (
      <>
        <div className="formGroup">
            
          <form>
            <div className="box">
              <div className="input_group">
                <i class="fa-sharp fa-regular fa-envelope"></i>
                <label htmlFor="">{this.props.label}</label>
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
