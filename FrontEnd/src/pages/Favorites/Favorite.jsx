import Header from "../../comps/Header";
import Footer from "../../comps/Footer";
import { instance } from "../../App";
import { useState, useEffect } from "react";
import "./Favorite.css";
const Favorite = () => {
  const id = JSON.parse(localStorage.getItem("user_id"));
  const [data, setData] = useState();
  const getData = async () => {
    const res = await instance.get(`/users/${id}`);
    setData(
      res.data.data2.map((el) => {
        return el;
      })
    );
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <div className="homeContainer">
      <Header />
      <main className="FavCont">
        {data &&
          data.map((el, favo) => {
            return (
              <div
                className="Container"
                style={{ display: "flex", flexDirection: "column" }}
                key={favo}
              >
                <p>Category : {el.category}</p>
                <p>ParentCategory : {el.parentCategory}</p>
                <p>Gol us gazar shoroo : {el.secondCategory}</p>
                <p> Niit od : {el.stars}</p>
                <p> Review humuusiin too : {el.user}</p>
                <p> Title : {el.title}</p>
                <p>Description : {el.desc}</p>
                <img className="favImg" src={el.image} alt="aa" />
              </div>
            );
          })}
      </main>
      <Footer />
    </div>
  );
};

export default Favorite;
