import { useEffect, useState, useRef } from "react";
import { useParams } from "react-router-dom";
import { instance } from "../../App";
import Star from "../../comps/Star/Star";
import NoStar from "../../comps/Star/NoStar";
import Header from "../../comps/Header";
import { Link } from "react-router-dom";
import Footer from "../../comps/Footer";
import "./Blog.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Button } from "@mui/material";
const Blog = () => {
  const [blog, setBlog] = useState();
  const [data, setData] = useState();
  const [comment, setComment] = useState();
  const [userData, setUserData] = useState();
  const [rate, setRate] = useState();
  const [view, setView] = useState();
  const [views, setViews] = useState();
  const [secUser, setSecUser] = useState();
  const [userId, setUserId] = useState();
  const [cate, setCate] = useState();
  const [suggest , setSuggest] = useState()
  const [isLoading, setIsLoading] = useState(true);
  const { id } = useParams();
  const rateRef = useRef();
  const commentRef = useRef();
  const user_id = JSON.parse(localStorage.getItem("user_id"));
  const getData = async () => {
    setIsLoading(true);
    const res = await instance.get(`/blogs/${id}`);
    if (user_id) {
      const res2 = await instance.get(`/users/${res.data.data.user_id}`);
      const user = await instance.get(`/users/${user_id}`);
      setSecUser(user.data.data.id);
      setUserData(res2.data.data);
    }
console.log(userData)
setCate(res.data.data.secondCategory)
const category = await instance.post("/blogs/Scate" , {
  secondCategory : cate
})
console.log(category)
setSuggest(category.data.data)
    setRate(Number(res.data.data.stars) / Number(res.data.data.user));
    setData(res.data.data);
    setBlog(res.data.data);
    setUserId(res.data.data.user_id);
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
    const res = await instance.post("/comments/byId", {
      blog_id: id,
    });
    setComment(
      res.data.data.map((el) => {
        return el;
      })
    );
  };
  const DeleteBlog = async () => {
    await instance.post(`/blogs/deleteBlog`, {
      user_id: userId,
      blog_id: id,
    });
    toast.success("Deleted");
    setTimeout(() => {
      window.location.replace("/Home");
    }, 500);
  };
  useEffect(() => {
    getComment();
    getData();
    setView(views + 1);
    setIsLoading(false);
  }, [data]);

  if (isLoading) {
    return <div className="loading">Loading ...</div>;
  }
  return (
    <div className="center">
      <ToastContainer />
      <Header />
      <div className="blogPage">
        <div className="blogPageOne">
          <img className="imageBlogPage" src={data?.image} alt="" />
          {userId === secUser ? (
            <Link to="/Profile" className="viewPro">
              <i className="gg-profile"></i>
              <span>View Profile</span>
            </Link>
          ) : (
            <Link to={`/Profile/${userId}`} className="viewPro">
              <i className="gg-profile"></i>
              <span>View Profile</span>
            </Link>
          )}

          {userId === user_id ? (
            <Button onClick={DeleteBlog}>Delete</Button>
          ) : (
            <div></div>
          )}
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
              <strong>Rate:{rate} </strong>

              
              <div>
                <strong>Views: </strong>
                <span className="spanud">{view && view}</span>
              </div>
              <div>
                <input ref={rateRef} />
                <Button onClick={() => Rate(data._id)}>Rate</Button>
              </div>
              <Button onClick={() => addFavorites(data._id)}>Yes</Button>
            </div>
            
          </div>
          <hr />
          <div className="contentBlog">
            <span>{blog && blog.desc}</span>
            <div></div>
          </div>
          <div className="blogComments">
            <h4>Comments</h4>
            <div className="blogCommm">
              <img
                src="https://images.unsplash.com/photo-1683860243214-b68a21a261b7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1335&q=80"
                alt="gold"
                className="userImageBlog"
              />
              <div className="nodemon">
                <input
                  className="blogCommentStyle"
                  placeholder="Your words here..."
                  ref={commentRef}
                />
                <span
                  className="blogCommentAdd"
                  onClick={() => addComment(data._id)}
                >
                  Reply
                </span>
              </div>
            </div>
            {comment &&
              comment.map((el, i) => {
                return (
                  <div key={i} className="blogCommentContainerTiny">
                    <img
                      src="https://images.unsplash.com/photo-1683860243214-b68a21a261b7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1335&q=80"
                      alt="gold"
                      className="userImageBlog"
                    />
                    <div className="userCommentContainer">
                      <strong className="strong">{el.user_id.name}</strong>
                      <span className="SPAN">{el.Comment}</span>
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
            <span className="copyRight">© 2023 Lyro.com, Inc</span>
          </div>
        </div>
        <div className="containerPro">
          <div className="suggest">
            <p>Suggested</p>
            {suggest && suggest.map((el) => {
              return el.title
            })}
          </div>
          <div className="ownBlogs">
            <p>{userData && userData.nickName} Blogs</p>
            {userData && userData.Blog.map((el) => {
              return el.title
            })}
          </div>
        
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Blog;
