import { instance } from "../../App";
import { useEffect, useState } from "react";
import { Button } from "@mui/material";
import "../../App.css";

const Japan = () => {
  const [data, setData] = useState([]);

  const getBlogs = async () => {
    try {
      const res = await instance.post("/blogs/Pcate/?limit=4", {
        parentCategory: "Japan",
      });
      console.log(res);
      setData(
        res.data.data.map((el) => {
          return el;
        })
      );
    } catch (error) {
      console.log(error.message);
    }
  };

  const getBlogById = async (id) => {
    try {
      const res = await instance.get(`/blogs/${id}`);
      console.log(res);
      window.location.replace(`/blogs/${id}`);
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
        data.map((el, u) => {
          return (
            <div key={u}>
              <Button onClick={() => getBlogById(el._id)}>
                <div className="blogStyle">
                  <img className="blogImage" src={el.image} alt="goy" />
                  <span>{el.title}</span>
                  <span>{el.secondCategory}</span>
                </div>
              </Button>
            </div>
          );
        })}
    </div>
  );
};
export default Japan;
