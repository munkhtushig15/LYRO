import "./Unsign.css";
import { Link } from "react-router-dom";

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
        <div className="HomeSignUp">
          <Link to="/">
            <button className="home">Home</button>
          </Link>
          <Link>
            <button className="home">Sign up</button>
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
