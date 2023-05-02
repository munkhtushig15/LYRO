import { useEffect, useState, useRef } from "react";
import { useParams } from "react-router-dom";
import { instance } from "../../App";
import { Button } from "@mui/material";
import Header from "../../comps/Header";
const Blog = () => {
  const [data, setData] = useState();
  const [comment, setComment] = useState();
  const [userData, setUserData] = useState();
  const [rate, setRate] = useState();
  const [name, setName] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const { id } = useParams();
  const rateRef = useRef();
  const commentRef = useRef();
  const getData = async () => {
    setIsLoading(true);
    const res = await instance.get(`/blogs/${id}`);
    const res2 = await instance.get(`/users/${res.data.data.user_id}`);
    setRate(Number(res.data.data.stars) / Number(res.data.data.user));
    setUserData(res2.data.data);
    setData(res.data.data);
  };
  const Rate = async (id) => {
    const res = await instance.get(`/blogs/${id}`);
    await instance.post(`/blogs/review/${id}`, {
      star: rateRef.current.value,
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
    const user_id = JSON.parse(localStorage.getItem("user_id"));
    const res = await instance.post(`/blogs/addcomment`, {
      Comment: commentRef.current.value,
      blog_id: id,
      user_id: user_id,
    });
    console.log(res);
  };

  const getComment = async () => {
    const res = await instance.get(`/blogs/${id}`);
    setComment(
      res.data.data.Comment.map((el) => {
        return el;
      })
    );
  };
  useEffect(() => {
    getComment();
    getData();
    setIsLoading(false);
  }, [data]);

  if (isLoading) {
    return <div>Unshij baina</div>;
  }
  return (
    <div>
      <Header />
      <div>
        <div>
          <Button onClick={() => addFavorites(data._id)}>
            Add to favorites
          </Button>
        </div>
        <input ref={rateRef} />
        <Button onClick={() => Rate(data._id)}>Rate here</Button>
        <div>
          <input ref={commentRef} />
          <Button onClick={() => addComment(data._id)}>Add comment</Button>
          {comment &&
            comment.map((el) => {
              return <div>{el.Comment}</div>;
            })}
        </div>
        <p> Rate : {rate}</p>
        <p> Hiisen hunii email : {userData?.email}</p>
        <p> Category : {data?.category}</p>
        <p>Description : {data?.desc}</p>
        <p>Uls : {data?.parentCategory}</p>
        <p>Aimag : {data?.category}</p>
        <p>Gol us gazar shoroo : {data?.secondCategory}</p>
        <p> Status(kinda useless) : {data?.status}</p>
        <img style={{ width: "20vw" }} src={data?.image} alt="" />
      </div>
    </div>
  );
};
export default Blog;
