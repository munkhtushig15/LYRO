import "./Login.css";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useRef } from "react";
import { instance } from "../../App";
import { ToastContainer, toast } from "react-toastify";
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
      window.localStorage.setItem("id" , JSON.stringify(res.data.data.id));
      toast.success("Successfully");
    } catch (error) {
      toast.error("Failed");
    }
  };
  return (
    <div id="Container">
      <ToastContainer />
      <div className="CenterBox">
        <div className="logoContainer">
          <img
            id="Logo"
            src={require("../../images/logo.png")}
            alt="logoBsim"
          />
          <span id="pageLogoText">LYRO</span>
        </div>
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
          <Button className="LOGIN" variant="outlined" onClick={Login}>
            LOGIN
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Login;
