import "../App.css";

const Header = () => {
  return (
    <div className="headerContainer">
      <div className="headerTop">
        <span>SignUp</span>
        <span>Login</span>
      </div>
      <div className="headerLogoContainer">
        <img id="pageLogo" src={require("../images/LYROLogo.png")} alt="@-@" />
        <span id="pageLogoText">
            LYRO
        </span>
      </div>
      <div></div>
    </div>
  );
};

export default Header;
