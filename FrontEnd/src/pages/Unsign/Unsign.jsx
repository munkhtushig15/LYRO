import "./Unsign.css";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";
const Unsign = () => {
  return (
    <div className="unsignContainer">
      <div className="header">
        <div className="logoContainer">
          <img
            className="zurag"
            src={require("../../images/logo.png")}
            alt=""
          />
          <h1 className="lyro">LYRO</h1>
        </div>
        <div>
          <Link to="/Home">
            <Button style={{ color: "white" }}>Home</Button>
          </Link>
          <Link to="/SignUp">
            <Button style={{ color: "white" }}>Sign Up</Button>
          </Link>
        </div>
      </div>
      <div className="HOme">
        <div>
          <h2 className="mendchilgee">Hello, welcome to our site</h2>
        </div>
        <div className="homeHeseg">
          <img
            className="zurag"
            src={require("../../images/logo.png")}
            alt=""
          />
          <h1 className="lyro">LYRO</h1>
        </div>
        <h2 className="travel">Travel blog site</h2>
      </div>
      <div className="goycontainer">
        <div className="hi">
          <div className="ug">
            <h1 className="ene">ene site yund hertegtei be?</h1>
          </div>
          <div className="ug">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ut, rem!
          </div>
        </div>
      </div>
    </div>
  );
};

export default Unsign;
