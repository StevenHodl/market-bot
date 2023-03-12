import axios from "axios";
import "./Listings.css";
import React, { useEffect, useState } from "react";
import PageWrapper from "../components/commons/PageWrapper";
import Post from "../components/Post";

function Listings() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios
      .get(localStorage.getItem("backend_url") + "/api/post/")
      .then((res) => {
        setPosts(res.data);
      });
  }, []);

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
