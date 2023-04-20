import { instance } from "../App";
import { useEffect, useState } from "react";
import "../App.css";

const Blog = () => {
  const [data, setData] = useState([]);
  const getBlogs = async () => {
    try {
      const res = await instance.get("/blogs/?limit=4");
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
    <div className="blogContainer">
      {data &&
        data.map((el, i) => {
          return (
            <>
              <div className="blogStyle" key={i}>
                <img className="blogImage" src={el.image} alt="goy" />
                <span>{el.title}</span>
                <span>{el.secondCategory}</span>
              </div>
            </>
          );
        })}
    </div>
  );
};
export default Blog;
