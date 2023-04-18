import React, { useRef } from "react";
import "./SignUp.css";
import { instance } from "../../App";
import { ToastContainer, toast } from "react-toastify";
import { TextField } from "@mui/material";
import { Link } from "react-router-dom";
import MenuItem from "@mui/material/MenuItem";
import "react-toastify/dist/ReactToastify.css";
const SignUp = () => {
  const nameRef = useRef();
  const nickNameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const ageRef = useRef();
  const roleRef = useRef();
  const genderRef = useRef();
  const SignUp = async () => {
    try {
      const res = await instance.post(`/users/signup`, {
        name: nameRef.current.value,
        nickName: nickNameRef.current.value,
        password: passwordRef.current.value,
        email: emailRef.current.value,
        role: roleRef.current.value,
        gender: genderRef.current.value,
        age: ageRef.current.value,
      });
      toast.success("Successfully signed up");
      console.log(res);
    } catch (error) {
      toast.error("Failed");
    }
  };
  const toLogin = () => {
    window.location.replace("/Login");
  };
  const adminOptions = [
    {
      value: "admin",
      label: "Admin",
    },
    {
      value: "normal",
      label: "Normal",
    },
  ];
  return (
    <div className="signupContainer">
      <ToastContainer />
      <div className="centerBox">
        <div className="logoContainer2">
          <Link
            to="/Home"
            className="logoContainer2"
            style={{ textDecoration: "none" }}
          >
            <img
              id="Logo"
              src={require("../../images/logo.png")}
              alt="logoBsim"
            />
            <span id="pageLogoText">LYRO</span>
          </Link>
        </div>
        <center style={{ marginTop: "0" }}>
          <input placeholder="Name" className="input" ref={nameRef}></input>
          <input
            placeholder="NickName"
            className="input"
            ref={nickNameRef} d
          ></input>
          <input placeholder="Email" className="input" ref={emailRef}></input>
          <input
            placeholder="Password"
            className="input"
            type="password"
            ref={passwordRef}
          ></input>
          <input placeholder="Age" className="input" ref={ageRef}></input>
          <input placeholder="Gender" className="input" ref={genderRef}></input>
          <TextField
            select
            inputRef={roleRef}
            id="outlined-basic2"
            label="Role"
            variant="standard"
          >
            {adminOptions.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
        </center>
        <button id="signup" onClick={SignUp}>
          Sign Up!
        </button>

        <button id="signup" onClick={toLogin}>
          Login
        </button>
      </div>
    </div>
  );
};

export default SignUp;
