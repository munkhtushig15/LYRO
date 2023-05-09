import { useEffect, useState, useRef } from "react";
import { useParams } from "react-router-dom";
import { instance } from "../../App";
import Header from "../../comps/Header";
import Footer from "../../comps/Footer";
import "./Blog.css";

import { Button } from "@mui/material";

const Blog = () => {
  const [blog, setBlog] = useState();
  const [data, setData] = useState();
  const [comment, setComment] = useState();
  const [userData, setUserData] = useState();
  const [rate, setRate] = useState();
  const [view, setView] = useState();
  const [views, setViews] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const { id } = useParams();
  const rateRef = useRef();
  const commentRef = useRef();
  const user_id = JSON.parse(localStorage.getItem("user_id"));
  const getData = async () => {
    setIsLoading(true);
    const res = await instance.get(`/blogs/${id}`);
    const res2 = await instance.get(`/users/${res.data.data.user_id}`);
    setRate(Number(res.data.data.stars) / Number(res.data.data.user));
    setUserData(res2.data.data);
    setData(res.data.data);
    setBlog(res.data.data);
    setViews(res.data.data.user);
  };
  const Rate = async (id) => {
    const res = await instance.get(`/blogs/${id}`);
    await instance.post(`/blogs/review/${id}`, {
      star: rateRef.current.value,
      user_id: user_id,
    });
    setRate(Number(res.data.data.stars) / Number(res.data.data.user));
  };
  const addFavorites = async (id) => {
    await instance.post("/blogs/favorite", {
      blog_id: id,
      user_id: JSON.parse(localStorage.getItem("user_id")),
    });
  };
  const addComment = async (id) => {
    await instance.post(`/comments/addcomment`, {
      Comment: commentRef.current.value,
      blog_id: id,
      user_id: user_id,
    });
  };

  const getComment = async () => {
    const comment = await instance.post("/comments/byId", {
      blog_id: id,
    });
    setComment(
      comment.data.data.map((el) => {
        return el;
      })
    );
  };
  const deleteBlog = async () => {
    
  }
  useEffect(
    () => {
      getComment();
      getData();
      setView(views + 1);
      setIsLoading(false);
    },
    [data],
    [view]
  );

  if (isLoading) {
    return <div>Unshij baina</div>;
  }
  return (
    <div className="center">
      <Header />
      <div className="blogPage">
        <div className="blogPageOne">
          <img className="imageBlogPage" src={data?.image} alt="" />
          <button className="viewPro">
            <i class="gg-profile"></i>
            <span>View Profile</span>
          </button>{" "}
          <Button>Delete</Button>
        </div>
        <div className="blogPageTwo">
          <h2>{data?.title}</h2>
          <div className="blogger">
            <div>
              <strong>Bloger: </strong>
              <span className="spanud">{userData && userData.nickName}</span>
            </div>
            <div>
              <strong>Category: </strong>
              <span className="spanudCate">{blog && blog.category}</span>
              <span> , </span>
              <span className="spanudCate">{blog && blog.secondCategory}</span>
            </div>
            <div>
              <strong>Country: </strong>
              <span className="spanudCate">{blog && blog.parentCategory}</span>
            </div>
            <div>
              <strong>Rate: </strong>
              <span className="spanud">{rate ? rate : 0}</span>
              <div>
                <strong>Views: </strong>
                <span className="spanud">{view && view}</span>
              </div>
              <div>
                <input ref={rateRef} />
                <Button onClick={() => Rate(data._id)}>Rate</Button>
              </div>
            </div>
          </div>
          <hr />
          <div className="contentBlog">
            <span>{blog && blog.desc}</span>
            <div>
              {" "}
              <Button onClick={() => addFavorites(data._id)}>
                Add to favorites
              </Button>
            </div>
          </div>
          <div className="blogComments">
            <h4>Comments</h4>
            <input ref={commentRef} />
            <Button onClick={() => addComment(data._id)}>Add Comment</Button>
            {comment &&
              comment.map((el) => {
                return (
                  <div>
                    <div>
                      <p>Username : {el.user_id.name}</p>
                      <p>Comment : {el.Comment}</p>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
        <div className="blogPageThree">
          <div className="blogAds">
            <img
              className="ads"
              src="https://plus.unsplash.com/premium_photo-1683121323904-4548d14498e1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80"
              alt=""
            />
            <img
              className="ads"
              src="https://images.unsplash.com/photo-1592977731761-2d58aafef572?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=927&q=80"
              alt=""
            />
            <span className="copyRight">Â© 2023 Lyro.com, Inc</span>
          </div>
        </div>
        <div className="containerPro">
          <div className="suggest">
            <p>Suggested</p>
          </div>
          <div className="ownBlogs">
            <p>{userData && userData.nickName} Blogs</p>
          </div>
          <div className="history">
            <p>History</p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Blog;
