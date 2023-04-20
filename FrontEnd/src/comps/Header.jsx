import "../App.css";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div className="headerContainer">
      <div className="headerTop">
        <div className="arrows">
          <i class="gg-arrow-right-r"></i>
          <Link
            to="/SignUp"
            style={{
              textDecoration: "none",
              color: "white",
              fontFamily: "Roboto Condensed, sans-serif",
            }}
          >
            <span>Sign Up</span>
          </Link>
        </div>
        <Link
          to="/Login"
          style={{
            textDecoration: "none",
            color: "white",
            fontFamily: "Roboto Condensed, sans-serif",
          }}
        >
          <div className="arrows">
            <i class="gg-arrow-right-r"></i>
            Login
          </div>
        </Link>
      </div>
      <div className="headerLogoContainer">
        <Link
          to="/"
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
              <i class="gg-search searchButton"></i>
            </button>
          </Link>
        </div>
      </div>
      <div className="cateContainer">
        <div className="cateType">
          <i class="gg-arrow-down-o"></i>
          <span>Mountain</span>
        </div>
        <div className="cateType">
          <i class="gg-arrow-down-o"></i>
          <span>Beach</span>
        </div>
        <div className="cateType">
          <i class="gg-arrow-down-o"></i>
          <span>City</span>
        </div>
        <div className="cateType">
          <i class="gg-arrow-down-o"></i>
          <span>Forest</span>
        </div>
        <div className="cateType">
          <i class="gg-arrow-down-o"></i>
          <span>Land</span>
        </div>
      </div>
    </div>
  );
};

export default Header;
