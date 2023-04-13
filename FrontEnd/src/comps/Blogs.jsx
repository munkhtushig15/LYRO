import { instance } from "../App";
import { useEffect, useState } from "react";
import "../App.css";

const Blogs = () => {
  const [data, setData] = useState([]);
  const getBlogs = async () => {
    try {
      const res = await instance.get("/blogs");
      setData(
        res.data.data.map((el) => {
          return el;
        })
      );
    } catch (error) {
      console.log(error.message);
    }
  };
  useEffect(() => {
    getBlogs();
  }, []);
  return (
    <div className="blogsContainer">
      {data &&
        data.map((el, i) => {
          return (
            <div className="blogStyle" key={i}>

              {el.title}
              {el.secondCategory}
              <img className="blogImage" src={el.image} alt="goy" />
            </div>
          );
        })}
    </div>
  );
};
export default Blogs;
