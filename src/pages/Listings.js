import axios from "axios";
import "./Listings.css";
import React, { useEffect, useState } from "react";
import PageWrapper from "../components/commons/PageWrapper";
import Post from "../components/Post";

function Listings(props) {
  const [posts, setPosts] = useState([]);

  let filter = ""
  switch (props.filter) {
    case "market": filter = "?category=Market"
      break;
    case "services": filter = "?category=Service"
      break;
    case "exchange": filter = "?category=Exchange"
      break;
    default: filter = ""
  }
  useEffect(() => {
    console.log(filter)
    axios
      .get(localStorage.getItem("backend_url") + "/api/post/" + filter)
      .then((res) => {
        setPosts(res.data);
      });
  }, [filter]);

  return (
    <PageWrapper>
      <div className="listings_area">
        <div className="row">
          {posts.map((post) => {
            return (
              <Post
                key={post.id}
                postData={post}
              />
            );
          })}
        </div>
      </div>
    </PageWrapper>
  );
}

export default Listings;
