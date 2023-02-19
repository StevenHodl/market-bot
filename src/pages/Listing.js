import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import PageWrapper from "../components/commons/PageWrapper";
import "./Listing.css";
import { Avatar, Rate } from "antd";
import SlideShow from "../components/commons/SlideShow";

export function Listing() {
  let { id } = useParams();
  const [listingDetails, setListingDetails] = useState([]);
  const [userDetails, setUserDetails] = useState([]);
  let user_id;

  useEffect(() => {
    console.log(id);
    if (id != undefined) {
      axios
        .get(localStorage.getItem("backend_url") + "/api/post/" + id)
        .then((res) => {
          setListingDetails(res.data);
          user_id = res.data.user_id;
        });
    }
    console.log(user_id);
    if (user_id != undefined) {
      axios
        .get(localStorage.getItem("backend_url") + "/api/user/" + user_id)
        .then((res) => {
          setUserDetails(res.data);
        });
    }
  }, []);

  return (
    <PageWrapper>
      <div className="container">
        <div className="top_section">
          <div className="images_container">
            {/* <SlideShow images={images_arr}></SlideShow> */}
            {/* <img src={listingDetails.thumbnail} alt={listingDetails.title} /> */}
          </div>
          <div className="main_info">
            <h5>{listingDetails.category}</h5>
            <h3>{listingDetails.title}</h3>
            <p>id: {listingDetails.id}</p>
            <div className="sponsor_info">
              <Avatar>NU</Avatar>
              <p>{userDetails.name}</p>
              <p>Level: OG</p>
              <p>Posting since: 12/Feb/2022</p>
              <span>
                Rating:
                <span
                  className="ant-rate-text"
                  style={{ padding: "2px", marginLeft: "auto" }}
                >
                  {userDetails.rating}
                </span>
                <Rate
                  allowHalf
                  defaultValue={userDetails.rating}
                  style={{
                    paddingBottom: "5px",
                  }}
                />
              </span>
            </div>
          </div>
        </div>
        <div className="bottom_section">
          <div className="summary_info">
            <p>Brand: {listingDetails.brand}</p>
            <p>Status: Used</p>
            <p>Condition: Good Conditions</p>
          </div>
          <div className="detailed_info">
            <h6>Description</h6>
            <p>{listingDetails.description}</p>
          </div>
        </div>
      </div>
    </PageWrapper>
  );
}
export default Listing;
