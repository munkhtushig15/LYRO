import "./Login.css";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useRef } from "react";
import { instance } from "../../App";
import { ToastContainer, toast } from "react-toastify";
import { Link } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
const Login = () => {
  const passwordRef = useRef();
  const emailRef = useRef();
  const Login = async () => {
    try {
      const res = await instance.post(`/users/login`, {
        email: emailRef.current.value,
        password: passwordRef.current.value,
      });
      window.localStorage.setItem("user_id", JSON.stringify(res.data.data.id));
      if (res) {
        window.location.replace("/Home");
      }
    } catch (error) {
      toast.error("Failed");
    }
  };
  return (
    <div id="Container">
      <ToastContainer />
      <div className="CenterBox">
        <Link
          to="/Home"
          className="logoContainer"
          style={{ textDecoration: "none" }}
        >
          <img
            id="Logo2"
            src={require("../../images/logo.png")}
            alt="logoBsim"
          />
          <span id="pageLogoText2">LYRO</span>
        </Link>

        <div className="Inputs">
          <TextField
            inputRef={emailRef}
            id="outlined-basic"
            label="LYRO.Mail"
            variant="standard"
          />
          <TextField
            inputRef={passwordRef}
            id="outlined-basic"
            type={"password"}
            label="Password"
            variant="standard"
          />
          <Button
            className="LOGIN"
            variant="outlined"
            onClick={Login}
            style={{
              color: "white",
              borderColor: "white",
            }}
          >
            LOGIN
          </Button>
          <center style={{ color: "white" }}>
            Dont have account?{" "}
            <Link to="/SignUp" style={{ color: "white", textDecoration: "" }}>
              Click Here!
            </Link>
          </center>
        </div>
      </div>
    </div>
  );
};

export default Login;
