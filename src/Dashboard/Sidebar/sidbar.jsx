import React, { useState } from "react";
import { NavLink } from "react-bootstrap";
import "./sidbar.css";
import { useNavigate } from "react-router-dom";
import { AdminsActions } from "../../store/slices/adminSlice";
import { useDispatch, useSelector } from "react-redux";
let { logoutAdmin } = AdminsActions;

export default function Sidbar() {
  const navigate = useNavigate();
  const [Active, setActive] = useState(false);
  const dispatch = useDispatch();
  const { AdminData } = useSelector((store) => store.admins);
  const navLinks = [
    {
      path: `/admin`,
      icon: "fa-solid fa-circle-user",
      display: "Dashboard",
    },
    {
      path: `/adminMenue/${AdminData.restaurant}`,
      icon: "fa-solid fa-bars",
      display: "Menu",
    },
    {
      path: `/add/${AdminData.restaurant}`,
      icon: "fa-solid fa-square-plus",
      display: "add",
    },
  ];
  return (
    <div className="sidebar">
      <div className="sidebar__top">
        <div className="logo mt-5 ">
          <img src="./images/logo.png" alt="logo" />
        </div>
        <h5>TASTY FOOD</h5>
      </div>

      <div className="sidebar__content ">
        <div className="menuu">
          <ul className="nav__list">
            {navLinks.map((item, index) => (
              <li className="nav__item p-2 " key={index}>
                <NavLink
                  onClick={() => {
                    setActive(true);
                    console.log(Active);
                    navigate(item.path);
                  }}
                  to={item.path}
                  className={() =>
                    Active == true ? "nav__active nav__link" : "nav__link"
                  }
                >
                  <span className=" mx-3  text-white">
                    <i className={item.icon}></i>
                  </span>

                  {item.display}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>

        <div
          className="sidebar__bottom"
          onClick={() => {
            dispatch(logoutAdmin());
            navigate("/admin-login");
          }}
        >
          <span>
            <i className="fa-solid fa-circle-user mx-3"></i> Logout
          </span>
        </div>
      </div>
    </div>
  );
}
