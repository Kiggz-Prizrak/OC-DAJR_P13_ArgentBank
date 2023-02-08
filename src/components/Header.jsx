import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import logo from "../assets/argentBankLogo.png";

import { LogoutBlock } from "./LogoutBlock";

export default function Header() {
  const getData = useSelector((state) => state);

  return (
    <nav className="main-nav">
      <NavLink className="main-nav-logo" to="/">
        <img
          className="main-nav-logo-image"
          src={logo}
          alt="Argent Bank Logo"
        />
        <h1 className="sr-only">Argent Bank</h1>
      </NavLink>
      {getData.isLogged ? (
        <div className="headerLogged">
          <NavLink className="main-nav-item" to="/profile">
            <span>
              <i className="fa-solid fa-user"></i>
              {getData?.firstName}
            </span>
            <p></p>
          </NavLink>
         <LogoutBlock />
        </div>
      ) : (
        <div>
          <NavLink className="main-nav-item" to="/login">
            <i className="fa fa-user-circle"></i>
            Sign In
          </NavLink>
        </div>
      )}

      {/* <div>
        <NavLink className="main-nav-item" to="/login">
          <i className="fa fa-user-circle"></i>
          Sign In
        </NavLink>
      </div>
  
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
            Sign out
          </NavLink>
        </div>
      </div> */}
    </nav>
  );
}
