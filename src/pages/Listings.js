import axios from "axios";
import "./Listings.css";
import { Empty, Button } from "antd";
import React, { useEffect, useState } from "react";
import PageWrapper from "../components/commons/PageWrapper";
import CardSkeleton from "../components/commons/CardSkeleton";
import Post from "../components/Post";

function Listings(props) {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

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
    axios
      .get(localStorage.getItem("backend_url") + "/api/post/" + filter)
      .then((res) => {
        res.data.sort((a, b) => a.created_on - b.created_on);
        setPosts(res.data);
        setLoading(false);
      }).catch(function (error) {
        if (error.response) {
          setLoading(false);
        }
      });;
  }, [filter]);

  return (
    <PageWrapper>
      {loading === true ? <CardSkeleton /> : <>
        {posts.length > 0 ?
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
          :
          <Empty
            className="empty"
            imageStyle={{
              height: 100,
            }}
            description="There are no posts here!"
          >
            <Button className="btn_new_post" type="primary">Create Now</Button>
          </Empty>
        }
      </>}
    </PageWrapper>
  );
}

export default Listings;
