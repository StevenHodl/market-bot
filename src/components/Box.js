import React, { Component } from "react";
import "./Box.css";
class Box extends Component {
  state = {};
  render() {
    const { to, label, color } = this.props;
    return (
      <div>
        <div className="box_container">
          <button className="box" style={{ "background-color": color }}>
            <div className="box_label">
              {label}
              <button className="box_button">Search in {label}</button>
            </div>
          </button>
        </div>
      </div>
    );
  }
}

export default Box;
