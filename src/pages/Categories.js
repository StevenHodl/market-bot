import React, { Component } from "react";
import Box from "../components/Box";
import "./Categories.css";
import PageWrapper from "../components/commons/PageWrapper";
import productList from "../dummy/products.json";

class Categories extends Component {
  state = {};
  render() {
    const { products } = productList;

    return (
      <PageWrapper>
        <div className="page_wrap">
          <div className="horizontal_banner">
            <h2 className="banner_title">Explore our sections</h2>
          </div>
          <div className="box_container">
            <Box label="Market" color="#f2a601"></Box>
            <Box label="Services" color="#06ba9c"></Box>
            <Box label="Exchange" color="#9c24fc"></Box>
          </div>
        </div>
      </PageWrapper>
    );
  }
}

export default Categories;
