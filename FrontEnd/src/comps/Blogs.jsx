import { instance } from "../App";
import { useEffect, useState } from "react";
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
    <div>
      {data &&
        data.map((el, i) => {
          return (
            <div key={i}>
              {el.title}
              <img src={el.image} alt="goy" />
            </div>
          );
        })}
    </div>
  );
};
export default Blogs;
