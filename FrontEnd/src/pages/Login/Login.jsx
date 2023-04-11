import "./Login.css";
import TextField from '@mui/material/TextField';
import Button from "@mui/material/Button";

const Login = () => {
  const inputProps = {
    color: "#fff"
  }
  return (
    <div id="Container">
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
          inputProps={inputProps}
            id="outlined-basic"
            label="LYRO.Mail"
            variant="standard"
          />
          <TextField
            id="outlined-basic"
            type={"password"}
            label="Password"
            variant="standard"
          />
          <Button className="LOGIN" variant="outlined">LOGIN</Button>
        </div>
      </div>
    </div>
  );
};

export default Login;
