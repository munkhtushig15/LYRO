import { useEffect, useState } from "react";
import Header from "../../comps/Header";
import { instance } from "../../App";
import "./Blog.css";
import Footer from "../../comps/Footer";
import { Link } from "react-router-dom";
const Land = () => {
  const [data, setData] = useState();
  const getData = async () => {
    const res = await instance.post("/blogs/Scate", {
      secondCategory: "Land",
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
  }, []);
  return (
    <>
      <Header />
      <div className="mountainContainer">
        <div className="dispFlex">
          {data &&
            data.map((el, i) => {
              return (
                <Link to={`/blogs/${el._id}`} style={{textDecoration : "none"}}>
                <div key={i} className="mountain">
                  <img className="imageMountain" src={el.image} alt="gold" />
                  <div className="information">
                    <strong>{el.title}</strong>
                    <p>{el.desc}</p>
                  </div>
                </div></Link>
              );
            })}
        </div>
      </div>
      <Footer/>
    </>
  );
};
export default Land;
