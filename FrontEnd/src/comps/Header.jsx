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
  const [pf, setPf] = useState();
  const [isName, setIsName] = useState(false);
  const [user, setUser] = useState();
  const id = JSON.parse(localStorage.getItem("user_id"));
  const getUser = async () => {
    const res = await instance.get(`/users/${id}`);
    setUser(res.data.data);
    setName(res.data.data.nickName);
    setPf(res.data.data.profile);
    setIsName(true);
    console.log(res);
  };
  const logOut = () => {
    window.localStorage.removeItem("user_id");
    window.location.replace("/Home");
  };

  useEffect(() => {
    getUser();
  }, []);

  return (
    <>
      <div className="headerContainer">
        <div className="headerTop">
          {isName ? (
            <>
              {pf ? (
                <Button
                  className="userName"
                  onClick={getClick}
                  style={{
                    color: "white",
                    fontFamily: "Roboto Condensed, sans-serif",
                  }}
                >
                  <div className="arrows">
                    <img
                      src={pf}
                      alt={require("../images/UserIcon.png")}
                      style={{ width: "2.5vh", borderRadius: "2vh" }}
                    />
                    {name}
                  </div>
                </Button>
              ) : (
                <Button
                  className="userName"
                  onClick={getClick}
                  style={{
                    color: "white",
                    fontFamily: "Roboto Condensed, sans-serif",
                  }}
                >
                  <div className="arrows">
                    <img
                      src={require("../images/UserIcon.png")}
                      alt=""
                      style={{ width: "2.5vh", borderRadius: "2vh" }}
                    />
                    {name}
                  </div>
                </Button>
              )}
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
            <input type="text" placeholder="Search ..." />
            <button className="searchButton">
              <i className="gg-search searchButton"></i>
            </button>
          </div>
        </div>
        <div className="cateContainer">
          <Link
            to="/Mountian"
            style={{ color: "black", textDecoration: "none" }}
          >
            <div className="cateType">
              <i className="gg-arrow-down-o"></i>
              <span>Mountain</span>
            </div>
          </Link>
          <Link to="/Beach" style={{ color: "black", textDecoration: "none" }}>
            <div className="cateType">
              <i className="gg-arrow-down-o"></i>
              <span>Beach</span>
            </div>
          </Link>

          <Link to="/City" style={{ color: "black", textDecoration: "none" }}>
            {" "}
            <div className="cateType">
              <i className="gg-arrow-down-o"></i>
              <span>City</span>
            </div>
          </Link>

          <Link to="/Forest" style={{ color: "black", textDecoration: "none" }}>
            <div className="cateType">
              <i className="gg-arrow-down-o"></i>
              <span>Forest</span>
            </div>
          </Link>

          <Link to="/Land" style={{ color: "black", textDecoration: "none" }}>
            <div className="cateType">
              <i className="gg-arrow-down-o"></i>
              <span>Land</span>
            </div>
          </Link>
          <Link
            to="/AboutFood"
            style={{ color: "black", textDecoration: "none" }}
          >
            <div className="cateType">
              <i className="gg-arrow-down-o"></i>
              <span>AboutFood</span>
            </div>
          </Link>
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
                {pf ? (
                  <>
                    <img className="profileIMG" src={pf} alt="" />
                    <span className="texts">{user.nickName}</span>
                  </>
                ) : (
                  <>
                    <img
                      className="profileIMG"
                      alt=""
                      src={require("../images/UserIcon.png")}
                    />
                    <span className="texts">{user.nickName}</span>
                  </>
                )}
              </div>
              <div className="xButton" onClick={getClick}>
                <i className="gg-close-o"></i>
              </div>
            </div>
            <div className="threeGrid">
              <Link to="/myBlogs" className="profileMiniContainer">
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
