import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import PageWrapper from "../components/commons/PageWrapper";
import "./Listing.css";
import { Avatar, Rate, Tag } from "antd";
import SlideShow from "../components/commons/SlideShow";


export function Listing() {
  let { id } = useParams();
  const [listingDetails, setListingDetails] = useState([]);
  const [userDetails, setUserDetails] = useState([]);
  let user_id;

  useEffect(() => {
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


            <SlideShow
              images={[
                "https://images.unsplash.com/photo-1585255318859-f5c15f4cffe9?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=500&ixlib=rb-1.2.1&q=80&w=500",
                "https://images.unsplash.com/photo-1584226761916-3fd67ab5ac3a?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=500&ixlib=rb-1.2.1&q=80&w=500",
                "https://images.unsplash.com/photo-1585179292338-45ba1f62f082?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=500&ixlib=rb-1.2.1&q=80&w=500",
                "https://images.unsplash.com/photo-1584753987666-ead137ec0614?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=500&ixlib=rb-1.2.1&q=80&w=500",
                "https://images.unsplash.com/photo-1584691267914-91c0bee55964?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=500&ixlib=rb-1.2.1&q=80&w=500",
                "https://images.unsplash.com/photo-1585084335487-f653d0859c14?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=500&ixlib=rb-1.2.1&q=80&w=500",
                "https://images.unsplash.com/photo-1583217874534-581393fd5325?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=500&ixlib=rb-1.2.1&q=80&w=500",
              ]}
            ></SlideShow>



          </div>
          <div className="main_info">
            <Tag color="volcano">Market</Tag>
            <h3>This is a post title</h3>
            <p>post id: 1234567</p>
            <div className="sponsor_info">
              <span>
                <Avatar>NU</Avatar>
                <p>Name Surname</p>
              </span>
              <p>Level: 2</p>
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
            <p>Posted on: 20/Feb/2023 20:43</p>
            <p>Venezia (VE)</p>
            <p>Brand: Samsung</p>
            <p>Status: Used</p>
            <p>Condition: Good Conditions</p>
          </div>
          <div className="detailed_info">
            <h6>Description</h6>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          </div>
        </div>
      </div>
    </PageWrapper >
  );
}
export default Listing;
