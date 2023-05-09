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
    <div className="containerOfFavs">
      <Header />
      <div className="FavCont">
        <span className="favs">Favourites</span>
        <div className="favsContainer">
          {data &&
            data.map((el, favo) => {
              return (
                <div className="favContainer" key={favo}>
                  <img className="favImage" src={el.image} alt="aa" />
                  <div className="favInfos">
                    <span> Category: {el.category}</span>
                    <span> ParentCategory: {el.parentCategory}</span>
                    <span> Category: {el.secondCategory}</span>
                    <span> Rate: {el.stars}</span>
                    <span> Views: {el.user}</span>
                    <span> Title: {el.title}</span>
                    <span> Description: {el.desc}</span>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Favorite;
