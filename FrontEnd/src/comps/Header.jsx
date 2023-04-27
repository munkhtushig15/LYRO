import "../App.css";
import { Link } from "react-router-dom";
import { instance } from "../App";
import { Button } from "@mui/material";
import { useEffect, useState } from "react";
const Header = () => {
  const [name, setName] = useState();
  const [age, setAge] = useState();
  const [isName, setIsName] = useState(false);
  const id = JSON.parse(localStorage.getItem("user_id"));
  const getUser = async () => {
    const res = await instance.get(`/users/${id}`);
    console.log(res);
    setName(res.data.data.nickName);
    setAge(res.data.data.age);
    setIsName(true);
  };
  const logOut = () => {
    window.localStorage.removeItem("user_id");
    window.location.replace("/Home");
  };
  const AboutUs = () => {
    window.location.replace(
      "https://www.youtube.com/watch?v=dQw4w9WgXcQ&pp=ygUJcmljayByb2xs"
    );
  };
  useEffect(() => {
    getUser();
  });
  return (
    <div className="headerContainer">
      <div className="headerTop">
        {isName ? (
          <>
            <Button
              style={{
                color: "white",
                fontFamily: "Roboto Condensed, sans-serif",
              }}
            >
              <div className="arrows">
                <i className="gg-profile"></i>

                {name}
                {age}
              </div>
            </Button>
            <Button onClick={logOut}>Log Out</Button>
            <Button style={{ target: "blank" }} onClick={AboutUs}>
              History
            </Button>
          </>
        ) : (
          <Link
            to="/Login"
            style={{
              textDecoration: "none",
              color: "white",
              fontFamily: "Roboto Condensed, sans-serif",
            }}
          >
            <div className="arrows">
              <i className="gg-arrow-right-r"></i>
              Login
            </div>
          </Link>
        )}
        <Link
          to="/Create"
          style={{
            textDecoration: "none",
            color: "white",
            fontFamily: "Roboto Condensed, sans-serif",
          }}
        >
          Create
        </Link>
      </div>
      <div className="headerLogoContainer">
        <Link
          to="/Home"
          style={{
            textDecoration: "none",
            color: "white",
            fontFamily: "Roboto Condensed, sans-serif",
          }}
        >
          <div className="topLogoBox">
            <div className="topLogo">
              <img
                id="pageLogo"
                src={require("../images/logo.png")}
                alt="@-@"
              />
              <span id="pageLogoText">LYRO</span>
            </div>
            <span className="bottomLogo">Pinecone Demo Day</span>
          </div>
        </Link>
        <div className="searchLine">
          <Link to={"/Search"} className="searchLine">
            <input type="text" placeholder="Search ..." />
            <button className="searchButton">
              <i className="gg-search searchButton"></i>
            </button>
          </Link>
        </div>
      </div>
      <div className="cateContainer">
        <Link to="/Mountian" className="cateType">
          <i className="gg-arrow-down-o"></i>
          <span>Mountain</span>
        </Link>
        <div className="cateType">
          <i className="gg-arrow-down-o"></i>
          <span>Beach</span>
        </div>
        <Link to="/City" className="cateType">
          <i className="gg-arrow-down-o"></i>
          <span>City</span>
        </Link>
        <div className="cateType">
          <i className="gg-arrow-down-o"></i>
          <span>Forest</span>
        </div>
        <div className="cateType">
          <i className="gg-arrow-down-o"></i>
          <span>Land</span>
        </div>
      </div>
    </div>
  );
};

export default Header;
