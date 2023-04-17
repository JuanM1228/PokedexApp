import React from "react";
import logo from "../assets/pokemon-23.svg";
import { BiLogOut } from "react-icons/bi";
import "../StyleSheets/Header.css";
import { useNavigate, useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { changeUsername } from "../features/login/userSlice";

export const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const username = useSelector((state) => state.user.username);
  const dispatch = useDispatch();

  const handleOnClickLogo = () => {
    location.pathname != "/" ? navigate("/pokemon") : null;
  };

  const handleClickLogout = () => {
    dispatch(changeUsername(""));
    navigate("/");
  };

  return (
    <div className="header">
      <img src={logo} alt="" width="120px" onClick={handleOnClickLogo} />
      {username !== "" && location.pathname !== "/" ? (
        <button className="logout-button" onClick={handleClickLogout}>
          <BiLogOut className="logout-icon" size={"25px"} />
          Logout
        </button>
      ) : (
        ""
      )}
    </div>
  );
};
