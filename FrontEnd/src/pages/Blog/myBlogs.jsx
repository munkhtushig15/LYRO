import Header from "../../comps/Header";
import { instance } from "../../App";
import { useState, useEffect } from "react";
const MyBlogs = () => {
  const id = JSON.parse(localStorage.getItem("user_id"));
  const [data, setData] = useState();
  const getData = async () => {
    const res = await instance.get(`/users/${id}`);
    setData(
      res.data.data.Blog.map((el) => {
        return el;
      })
    );
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <div>
      <Header />
      {data &&
        data.map((el) => {
          return (
            <div>
              <p>{el.title}</p>
            </div>
          );
        })}
    </div>
  );
};
export default MyBlogs;
