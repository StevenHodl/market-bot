import React, { Component } from "react";
import "./MenuLi.css";
import { NavLink } from "react-router-dom";

let classNames = require("classnames");
const activeClassName = "menu_link active_link";

class MenuLi extends Component {
  state = {};
  render() {
    const { to, label } = this.props;
    return (
      <li className="menu_list">
        <NavLink to={to} className="menu_link">
          <h5 className="label">{label}</h5>
        </NavLink>
      </li>
    );
  }
}

export default MenuLi; 
