import { NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../store";

export function LogoutBlock() {

  const getData = useSelector((state) => state);

  const dispatch = useDispatch();
  const handleClick = () => {
    localStorage.clear();
    dispatch(logout());

    console.log(getData);
  };

  return (
    <div className="logoutBlock">
      <NavLink onClick={handleClick} className="main-nav-item" to="/login">
        <i className="fa-solid fa-arrow-right-from-bracket"></i>
        Sign out
      </NavLink>
    </div>
  );
}
