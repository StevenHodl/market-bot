import React, { Component } from "react";

class Card extends Component {
  state = {
    card_title: "",
    card_price: "",
    card_rate: "",
  };

  componentDidMount = () => {
    const { title, price, rate } = this.props;
    this.setState({
      card_title: title,
      card_price: price,
      card_rate: rate,
    });
  };
  render() {
    const { card_title, card_price, card_rate } = this.state;
    return (
      <div className="border rounded-3 p-3">
        <div>{card_title}</div>
        <div>{card_price}</div>
        <div>{card_rate}</div>
      </div>
    );
  }
}

export default Card;
