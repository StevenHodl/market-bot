import React, { Component } from "react";
import Menu from "../Menu";
import "./PageWrapper.css";

class PageWrapper extends Component {
  state = {};
  render() {
    const { children } = this.props;
    return (
      <>
        <div className="">
          <Menu />
        </div>
        <div className="body">{children}</div>
      </>
    );
  }
}

export default PageWrapper;
