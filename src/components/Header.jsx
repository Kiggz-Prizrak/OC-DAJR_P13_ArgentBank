import { NavLink } from "react-router-dom";

import logo from "../assets/argentBankLogo.png";

export default function Header() {
  return (
    <nav className="main-nav">
      <NavLink className="main-nav-logo" to="/">
        {/* <a className="main-nav-logo" href="./index.html"> */}
        <img
          className="main-nav-logo-image"
          src={logo}
          alt="Argent Bank Logo"
        />
        <h1 className="sr-only">Argent Bank</h1>
        {/* </a> */}
      </NavLink>
      <div>
        <NavLink className="main-nav-item" to="/login">
          <i className="fa fa-user-circle"></i>
          Sign In
        </NavLink>
      </div>
      {/* logged */}
      <div className="headerLogged">
        <NavLink className="main-nav-item" to="/profile">
          <span>
            <i className="fa-solid fa-user"></i>
          </span>
          <p>José</p>
        </NavLink>
        <div className="logoutBlock">
          <NavLink className="main-nav-item" to="/login">
            <i className="fa-solid fa-arrow-right-from-bracket"></i>
            <a href="">Sign out</a>
          </NavLink>
        </div>
      </div>
    </nav>
  );
}
