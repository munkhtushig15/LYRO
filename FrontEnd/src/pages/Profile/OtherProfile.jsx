import React, { useEffect, useState } from "react";
import "./Profile.css";
import Footer from "../../comps/Footer";
import { instance } from "../../App";
import { Button } from "@mui/material";
import { Link, useParams } from "react-router-dom";
export default function OtherProfile() {
  const [name, setName] = useState();
  const [nickName, setNickName] = useState();
  const [data, setData] = useState();
  const [dataShow, setDataShow] = useState();
  const [isClicked, setIsClicked] = useState(false);
  const { id } = useParams();
  const userData = async () => {
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
    setName(res.data.data.name);
    setNickName(res.data.data.nickName);
  };
  const getClick = () => {
    if (isClicked === false) {
      setIsClicked(true);
    } else {
      setIsClicked(false);
    }
  };
  useEffect(() => {
    userData();
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
              <img
                alt="goy"
                className="PfP"
                src="data:image/jpeg;base64,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"
              />
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
            <p className="PfN">{name}</p>
            <p>{nickName}</p>
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
