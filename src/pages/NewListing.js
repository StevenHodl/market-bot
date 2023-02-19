import React, { Component } from "react";
import { useState } from "react";
import PageWrapper from "../components/commons/PageWrapper";
import "./NewListing.css";
import Form from "../components/Form";

class NewListing extends Component {
  state = {};
  render() {
    return (
      <PageWrapper>
        <Form></Form>
      </PageWrapper>
    );
  }
}

export default NewListing;
