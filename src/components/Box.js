import React from "react";
import { useNavigate } from "react-router-dom";
import "./Box.css";

function Box(props) {

  const navigate = useNavigate();
  return (
    <div>
      <div className="box_container">
        <button className="box" style={{ "background-color": props.color }}>
          <div className="box_label">
            <div className="box_title" >{props.label}</div>
            <button className="box_button" onClick={() => navigate(props.to)}>Search in {props.label}</button>
          </div>
        </button>
      </div>
    </div >
  );
}


export default Box;
