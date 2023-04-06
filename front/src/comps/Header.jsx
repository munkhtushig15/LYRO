import "../App.css";

const Header = () => {
  return (
    <div className="headerContainer">
      <div className="headerTop">
        <div className="arrows">
          <i class="gg-arrow-right-r"></i>
          <span>Sign Up</span>
        </div>
        <div className="arrows">
          <i class="gg-arrow-right-r"></i>
          <span>Login</span>
        </div>
      </div>
      <div className="headerLogoContainer">
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
        <div className="searchLine">
          <input type="text" placeholder="Search ..." />
          <button className="searchButton">Search</button>
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
