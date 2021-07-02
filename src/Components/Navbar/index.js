import React, { Component } from "react";
import Logo from "../../Assets/image/Logo.svg";

export default class index extends Component {
  render() {
    return (
      <div className="navbar">
        <img src={Logo} alt="Logo Foddways" />

        {/* ====== Button Register & Login ====== */}
        <div className="nav-button">
          <button className="btn btn-primary btn-sign">Register</button>
          <button className="btn btn-primary btn-sign">Login</button>
        </div>
      </div>
    );
  }
}
