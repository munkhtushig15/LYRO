import React, { useEffect, useState } from "react";
import "./Profile.css";
import Footer from "../../comps/Footer";
import { instance } from "../../App";
import { Button } from "@mui/material";
import { Link, useParams } from "react-router-dom";
export default function OtherProfile() {
  const [userData , setUserData] = useState()
  const [data, setData] = useState();
  const [dataShow, setDataShow] = useState();
  const [isClicked, setIsClicked] = useState(false);
  const { id } = useParams();
  const getData = async () => {
    const res = await instance.get(`/users/${id}`);
    const res2 = await instance.post(`/blogs/?limit=12`, {
      user_id: id,
    });
    setData(
      res.data.data.Blog.map((el) => {
        return el;
      })
    );
    setDataShow(
      res2.data.data.map((el) => {
        return el;
      })
    );
    setUserData(res.data.data)
  };
  const getClick = () => {
    if (isClicked === false) {
      setIsClicked(true);
    } else {
      setIsClicked(false);
    }
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <>
      {" "}
      <div className="ProfileBigContainer">
        <Link to="/Home" className="logoCon">
          <img
            className="ProfileLogo"
            src={require("../../images/logo.png")}
            alt="img"
          />
          <span className="lyro">LYRO</span>
        </Link>

        <div className="ProfileTinyContainer">
          <div className="mdkue">
            <div>
            {userData && userData.profile ? 
              
              (
                <img
                alt="goy"
                className="PfP"
                src={userData && userData.profile}
              />) : (<img
                alt="goy"
                className="PfP"
                style={{backgroundColor : "white"}}
                src={require("../../images/UserIcon.png")}
              />)}
              <button className="EditPro">
                <svg
                  className="pencilIcon"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                >
                  <path d="M410.3 231l11.3-11.3-33.9-33.9-62.1-62.1L291.7 89.8l-11.3 11.3-22.6 22.6L58.6 322.9c-10.4 10.4-18 23.3-22.2 37.4L1 480.7c-2.5 8.4-.2 17.5 6.1 23.7s15.3 8.5 23.7 6.1l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L387.7 253.7 410.3 231zM160 399.4l-9.1 22.7c-4 3.1-8.5 5.4-13.3 6.9L59.4 452l23-78.1c1.4-4.9 3.8-9.4 6.9-13.3l22.7-9.1v32c0 8.8 7.2 16 16 16h32zM362.7 18.7L348.3 33.2 325.7 55.8 314.3 67.1l33.9 33.9 62.1 62.1 33.9 33.9 11.3-11.3 22.6-22.6 14.5-14.5c25-25 25-65.5 0-90.5L453.3 18.7c-25-25-65.5-25-90.5 0zm-47.4 168l-144 144c-6.2 6.2-16.4 6.2-22.6 0s-6.2-16.4 0-22.6l144-144c6.2-6.2 16.4-6.2 22.6 0s6.2 16.4 0 22.6z" />
                </svg>
                <span className="textBefore">Edit Profile</span>
              </button>
            </div>
            <p className="PfN">{userData && userData.name}</p>
            <p>{userData && userData.nickName}</p>
            <p>
              Followers: 69 <span>Following: 1124</span>
            </p>
          </div>

          {!isClicked ? (
            <>
              {" "}
              <Button onClick={getClick}>View more</Button>
              <div className="Blogs">
                {dataShow &&
                  dataShow.map((el) => {
                    return (
                      <div>
                        <img
                          style={{ width: "13vw", height: "23.5vh" }}
                          src={el.image}
                          alt=""
                        />
                      </div>
                    );
                  })}
              </div>
            </>
          ) : (
            <div>
              <Button onClick={getClick}>View less</Button>
              <div className="Blogs">
                {data &&
                  data.map((el) => {
                    return (
                      <div>
                        <img
                          style={{ width: "15vw", height: "25vh" }}
                          src={el.image}
                          alt=""
                        />{" "}
                      </div>
                    );
                  })}
              </div>
            </div>
          )}
        </div>

        <Footer />
      </div>
    </>
  );
}
