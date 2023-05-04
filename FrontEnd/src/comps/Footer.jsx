import React from "react";
import "../App.css";

export default function Footer() {
  return (
    <div className="FooterContainer">
      <div className="footerMiniContainer">
        <p className="footerTextsMini">Privacy Policy || Terms of Use</p>
        <div className="footerLogo">
          <img src={require("../images/logo.png")} className="logoSize" alt="" />
          <span className="footerTexts">LYRO</span>
        </div>
        <p className="footerTextsMini">© 2023 Lyro.com, Inc</p>
      </div>
    </div>
  );
}
