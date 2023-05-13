import { useEffect, useState } from "react";
import { instance } from "../../App";   
import Header from "../Header";
import "./16c.css";
const Denmark = () => {
  const [data, setData] = useState();
  const getData = async () => {
    const res = await instance.post("/blogs/Pcate", {
      parentCategory: "Denmark",
    });


    setData(
      res.data.data.map((el) => {
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
      <div className="visitGrid">
        {data &&
          data.map((el) => {
            return (
              <div style={{ width: "100%" }}>
                <p>{el.parentCategory}</p>
                <img
                  src={el.image}
                  alt=""
                  style={{ height: "20vh", width: "10vw" }}
                />
              </div>
            );
          })}
      </div>
    </div>
  );
};
export default Denmark;