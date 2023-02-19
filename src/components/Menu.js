import React, { Component } from "react";
import "./Menu.css";
import MenuLi from "./commons/MenuLi";
import { NavLink } from "react-router-dom";

let classNames = require("classnames");

class Menu extends Component {
  state = {
    menu_is_expanded: false,
  };

  handleExpandButtonClicked = () => {
    const { menu_is_expanded } = this.state;
    this.setState({
      menu_is_expanded: !menu_is_expanded,
    });
  };

  render() {
    const { menu_is_expanded } = this.state;

    return (
      <nav className="menu_container">
        <button
          className="menu_expand_btn"
          onClick={() => {
            this.handleExpandButtonClicked();
          }}
        >
          {menu_is_expanded ? "Close" : "Menu"}
        </button>
        <ul
          className={classNames(
            "menu_list",
            menu_is_expanded ? "" : "menu_list_hide"
          )}
        >
          <MenuLi to="/" label="Home" />
          <MenuLi to="/categories" label="Categories" />
          <MenuLi to="/listings" label="Listings" />
          <MenuLi to="/admin" label="Admin" />
          <NavLink to="/listings/new">
            <button className="menu_add_listing">Create a new posting</button>
          </NavLink>
        </ul>
      </nav>
    );
  }
}

export default Menu;
