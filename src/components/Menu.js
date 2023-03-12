import React, { Component } from "react";
import "./Menu.css";
import MenuLi from "./commons/MenuLi";
import { NavLink } from "react-router-dom";
import { FloatButton } from 'antd';
import { GrFormAdd } from "react-icons/gr";

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
          <MenuLi to="/my_listings" label="My Posts" />
          {/* <MenuLi to="/admin" label="Admin" /> */}


        </ul>
        <NavLink to="/listings/new">
          <FloatButton tooltip={<div>Create new post</div>} icon={<GrFormAdd className="float_button_icon" />} className=
            {window.location.pathname === "/" ? "float_button" : "float_button-hidden"} />
          <button className="menu_add_listing">Create a new posting</button>
        </NavLink>
      </nav>
    );
  }
}

export default Menu;
