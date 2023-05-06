import "../App.css";
import { Link } from "react-router-dom";
import { instance } from "../App";
import { Button } from "@mui/material";
import { useEffect, useState } from "react";

import ProfileMini from "./ProfileMini";

const Header = () => {
  const [isClick, setIsClick] = useState(false);
  const getClick = () => {
    if (isClick === false) {
      setIsClick(true);
    } else {
      setIsClick(false);
    }
  };

  const [name, setName] = useState();
  const [age, setAge] = useState();
  const [role, setRole] = useState();
  const [isName, setIsName] = useState(false);
  const [user, setUser] = useState();
  const [favorites, setFavorites] = useState([]);
  const id = JSON.parse(localStorage.getItem("user_id"));
  const getUser = async () => {
    const res = await instance.get(`/users/${id}`);
    setUser(res.data.data);
    setName(res.data.data.nickName);
    setAge(res.data.data.age);
    setRole(res.data.data.role);
    setIsName(true);
  };

  const logOut = () => {
    window.localStorage.removeItem("user_id");
    window.location.replace("/Home");
  };

  const getFavorites = async () => {
    const res = await instance.get(`/users/${id}`);
    console.log(res);
    setFavorites(
      res.data.data2.map((el) => {
        return el;
      })
    );
    // Promise.all(
    //   res.data.data.Favorite.map(async (el) => {
    //     const id = el.blog_id;
    //     return await instance.get(`/blogs/${id}`);
    //   })
    // )
    //   .then((data) => {
    //     console.log(data.data.data);
    //     setFavorites(data);
    //   })
    //   .catch((error) => console.error(error));
  };

  useEffect(() => {
    getUser();
  }, []);

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
        <div className="rightSideProfileZero">
          <div className="rightHeader">
            <div className="rightProfile">
              <img
                className="profileIMG"
                src={require("../images/UserIcon.png")}
                alt=""
              />
            </div>
            <div className="xButton" onClick={getClick}>
              <i className="gg-close-o"></i>
            </div>
          </div>
          <div className="threeGrid">
          <Link to="/Favorites" className="profileMiniContainer">
                <ProfileMini
                  image={<i className="gg-notes iconsMiniPro"></i>}
                  title="Blogs"
                />
              </Link>
              <Link to="/Create" className="profileMiniContainer">
                <ProfileMini
                  image={<i className="gg-eye iconsMiniPro"></i>}
                  title="Views"
                />
              </Link>
              <Link to="/Profile" className="profileMiniContainer">
                <ProfileMini
                  image={<i className="gg-profile iconsMiniPro"></i>}
                  title="Profile"
                />
              </Link>
              <Link to="/Favorites" className="profileMiniContainer">
                <ProfileMini
                  image={<i className="gg-heart iconsMiniPro"></i>}
                  title="Favourite"
                />
              </Link>
          </div>
        </div>
      ) : (
        <div className="rightSideProfile">
          <div className="top">
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
                <i className="gg-close-o"></i>
              </div>
            </div>
            <div className="threeGrid">
              <Link to="/Favorites" className="profileMiniContainer">
                <ProfileMini
                  image={<i className="gg-notes iconsMiniPro"></i>}
                  title="Blogs"
                />
              </Link>
              <Link to="/Create" className="profileMiniContainer">
                <ProfileMini
                  image={<i class="fa fa-plus iconsMiniPro"></i>}
                  title="Add Blog"
                />
              </Link>
              <Link to="/Profile" className="profileMiniContainer">
                <ProfileMini
                  image={<i className="gg-profile iconsMiniPro"></i>}
                  title="Profile"
                />
              </Link>
              <Link to="/Favorites" className="profileMiniContainer">
                <ProfileMini
                  image={<i className="gg-heart iconsMiniPro"></i>}
                  title="Favourite"
                />
              </Link>
            </div>
          </div>

          <div className="logout" onClick={logOut}>
            Logout
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
