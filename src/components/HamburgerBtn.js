import React, { Component } from "react";
class HamburgerMenuBtn extends Component {
  state = {};
  render() {
    return (
      <button
        class="button-one"
        aria-controls="primary-navigation"
        aria-expanded="false"
      >
        <svg
          fill="var(--button-color)"
          class="hamburger"
          viewBox="0 0 100 100"
          width="250"
        >
          <rect
            class="line top"
            width="80"
            height="10"
            x="10"
            y="25"
            rx="5"
          ></rect>
          <rect
            class="line middle"
            width="80"
            height="10"
            x="10"
            y="45"
            rx="5"
          ></rect>
          <rect
            class="line bottom"
            width="80"
            height="10"
            x="10"
            y="65"
            rx="5"
          ></rect>
        </svg>
      </button>
    );
  }
}

export default HamburgerMenuBtn;
