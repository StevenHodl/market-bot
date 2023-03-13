import axios from "axios";
import { message, Empty, Button } from "antd";
import "./MyListings.css";
import React, { useEffect, useState } from "react";
import PageWrapper from "../components/commons/PageWrapper";
import Post from "../components/Post";

import { useTg } from "../hooks/useTg";

function MyListings() {
  const [posts, setPosts] = useState([]);

  const { tg } = useTg();

  const handleDelete = (e, postId, userId) => {
    e.preventDefault()
    if (Number(userId) === Number(tg?.initDataUnsafe?.user?.id)) {
      axios
        .delete(localStorage.getItem("backend_url") + "/api/post/" + postId)
        .then((res) => {
          if (res.data.action === "True") {
            setPosts(posts.filter(item => item.id !== postId))
            message.success('Post successfully deleted', 2.5)
          } else {
            message.error('Error deleting post', 2.5)
          }
        });
    } else {
      message.error('Not authorized for this operation', 2.5)
    }
  }

  useEffect(() => {
    axios
      .get(localStorage.getItem("backend_url") + "/api/post?userid=" + tg?.initDataUnsafe?.user?.id)
      .then((res) => {
        setPosts(res.data);
        console.log(res.data)
      });
  }, []);

  return (
    <PageWrapper>
      {posts.length > 0 ?
        <div className="listings_area">
          <div className="row">
            {posts.map((post) => {
              return (
                <Post
                  key={post.id}
                  postData={post}
                  deleteButton={true}
                  handleDelete={handleDelete}
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
    </PageWrapper >
  );
}

export default MyListings;
