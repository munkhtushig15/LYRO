import { useEffect, useState } from "react";
import { instance } from "../../App"; 
import BigAds from "../../comps/BigAds";  
import Header from "../Header";
import "./16c.css";
const Germany = () => {
  const [data, setData] = useState();
  const getData = async () => {
    const res = await instance.post("/blogs/Pcate", {
      parentCategory: "Germany",
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
      <div className="visitContainer">
        {data &&
          data.map((el) => {
            return (
              
              <div className="VisitBlogs">
                <p>{el.parentCategory}</p>
                <img
                  src={el.image}
                  alt=""
                  style={{ height: "20vh", width: "10vw", marginBottom: "10px", borderRadius: "5px" }}
                />
              </div>
            );
          })}
      </div>
    </div>
  );
};
export default Germany;