import React, { useState, useEffect, Component } from "react";
import "./SlideShow.css";

const Slideshow = ({ imgs }) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    setIndex(0);
  }, []);

  const next = () => {
    if (index === imgs.length - 1) {
      setIndex(0);
    } else {
      setIndex(index + 1);
    }
  };
  const prev = () => {
    if (index === 0) {
      setIndex(imgs.length - 1);
    } else {
      setIndex(index - 1);
    }
  };

  return (
    <div className="slideshow">
      <div className="slide_actions">
        <button className="button button_left" onClick={prev}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path
              d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z"
              fill="#efefef"
            />
          </svg>
        </button>

        <img className="slide_mainImg" src={imgs[index]} />
        <button className="button button_right" onClick={next}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path
              d="M7.33 24l-2.83-2.829 9.339-9.175-9.339-9.167 2.83-2.829 12.17 11.996z"
              fill="#efefef"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

class SlideShow extends Component {
  state = {};
  render() {
    const { images } = this.props;
    return (
      <div className="slideshow_main">
        <Slideshow imgs={images} />
      </div>
    );
  }
}

export default SlideShow;
