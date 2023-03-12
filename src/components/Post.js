import React, { Component } from "react";
import "./Post.css";
import { Avatar, Rate, Tag, Button, Tooltip } from "antd";
import { Link } from "react-router-dom";
import SlideShow from "../components/commons/SlideShow";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEuroSign, faBolt } from '@fortawesome/free-solid-svg-icons'
import { DeleteOutlined } from '@ant-design/icons';


class Post extends Component {
  render() {
    const { postData, deleteButton, handleDelete } = this.props;
    let images_arr = [];
    let tag_color = (postData.category === 'Market' ? 'volcano' : 'green');
    postData.images.map((image) => {
      images_arr.push(
        localStorage.getItem("backend_url") + "/image/" + image.filename
      );
    });

    return (
      <div className="card">
        <div className="card_body">
          <div className="card_image_container">
            <SlideShow images={images_arr}></SlideShow>
          </div>
          <div className="card_content">
            <h5 className="card_title">
              <Link to={`/listings/${postData.id}`} className="card_link">
                {postData.title}
              </Link>
            </h5>
            <p className="card_description">{postData.description}</p>
            <h5 className="card_price"><FontAwesomeIcon icon={postData.currency === 'Sat' ? faBolt : faEuroSign} style={{ paddingRight: '.5rem' }} /> {parseFloat(postData.price)}</h5>

          </div>
          {deleteButton === true ? <Tooltip className='btn_delete' title="delete" placement="bottomRight">
            <Button danger icon={<DeleteOutlined />} onClick={(e) => handleDelete(e, postData.id, postData.user[0].id)} />
          </Tooltip> : <></>}
        </div>
        <div className="card_badge_container">
          <Tag color={tag_color}>{postData.category}</Tag>
        </div>
        <div className="card_footer">
          <Avatar src={`${localStorage.getItem("backend_url")}/avatar/${postData.user[0]?.id}.jpg`}>
            {postData.user[0]?.name?.charAt(0) + ((!postData.user[0].surname) ? postData.user[0]?.name?.charAt(1) : postData.user[0].surname.charAt(0))}
          </Avatar>
          <div className="px-3">{postData.user[0].name + (!postData.user[0].surname ? `` : ` ${postData.user[0].surname}`)}</div>
          <span
            className="ant-rate-text"
            style={{ padding: "2px", marginLeft: "auto" }}
          >
            {5.0}
          </span>
          <Rate
            allowHalf
            defaultValue={5.0}
            style={{
              paddingBottom: "5px",
            }}
          />
        </div>
      </div>
    );
  }
}

export default Post;
