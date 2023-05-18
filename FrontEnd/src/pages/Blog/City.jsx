import { useEffect, useState } from "react";
import Header from "../../comps/Header";
import { instance } from "../../App";
import "./Blog.css";
import Footer from "../../comps/Footer";

const City = () => {
  const [data, setData] = useState();
  const getData = async () => {
    const res = await instance.post("/blogs/Scate", {
      secondCategory: "City",
    });
    setData(
      res.data.data.map((el) => {
        return el;
      })
    );
    console.log(res);
  };
  useEffect(() => {
    getData();
  },[]);
  return (
    <>
      <Header />
      <div className="mountainContainer">
        <div className="dispFlex">
          {data &&
            data.map((el, i) => {
              return (
                <div key={i} className="mountain">
                  <img className="imageMountain" src={el.image} alt="gold" />
                  <div className="information">
                    <strong>{el.title}</strong>
                    <p className="overflow">{el.desc}</p>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
      <Footer/>
    </>
  );
};
export default City;
