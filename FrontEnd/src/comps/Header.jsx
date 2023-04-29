import "../App.css";
import { Link } from "react-router-dom";
import { instance } from "../App";
import { Button } from "@mui/material";
import { useEffect, useState } from "react";
const Header = () => {
  // <><><><><><><><> right side style <><><><><><><><>
  const [isClick, setIsClick] = useState(false);

  const getClick = () => {
    if (isClick === false) {
      setIsClick(true);
    } else {
      setIsClick(false);
    }
  };

  //<><><><><><><><><><><><><><><><><><><><><><><><><><>

  const [name, setName] = useState();
  const [age, setAge] = useState();
  const [isName, setIsName] = useState(false);
  const [user, setUser] = useState();
  const id = JSON.parse(localStorage.getItem("user_id"));
  const getUser = async () => {
    const res = await instance.get(`/users/${id}`);
    setUser(res.data.data);
    setName(res.data.data.nickName);
    setAge(res.data.data.age);
    setIsName(true);
  };
  useEffect(() => {
    getUser();
  });
  return (
    <>
      <div className="headerContainer">
        <div className="headerTop">
          {isName ? (
            <Button
              className="userName"
              onClick={getClick}
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
          <div className="cateType">
            <i className="gg-arrow-down-o"></i>
            <span>Mountain</span>
          </div>
          <div className="cateType">
            <i className="gg-arrow-down-o"></i>
            <span>Breach</span>
          </div>
          <div className="cateType">
            <i className="gg-arrow-down-o"></i>
            <span>City</span>
          </div>
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
      {!isClick ? (
        <></>
      ) : (
        <div className="rightSideProfile">
          <div className="rightHeader">
            <div className="rightProfile">
              <img
                className="profileIMG"
                src={require("../images/UserIcon.png")}
                alt=""
              />
              <span className="texts">{user.nickName}</span>
            </div>
            <div className="xButton" onClick={getClick}>
              <i class="gg-close-o"></i>
            </div>
            <div className="threeGrid">
              
            </div>
          </div>
          {/*  */}
        </div>
      )}
    </>
  );
};

export default Header;
