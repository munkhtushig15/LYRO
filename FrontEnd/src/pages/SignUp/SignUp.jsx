import React from "react";
import "./SignUp.css"

const SignUp = () => {
    return (
        <div className="signupContainer">
            <div className="centerBox">
            <div className="logoContainer">
          <img
            id="Logo"
            src={require("../../images/logo.png")}
            alt="logoBsim"
          />
                    <span id="pageLogoText">LYRO</span>
                </div>
                <input placeholder="Firstname" className="input"></input>
                <input placeholder="Lastname" className="input"></input>
                <input placeholder="Username" className="input"></input>
                <input placeholder="Gmail" className="input"></input>
                <input placeholder="Password" className="input"></input>
                <button id="signup">Sign Up!</button>
            </div>    
        </div>
    )
}

export default SignUp;