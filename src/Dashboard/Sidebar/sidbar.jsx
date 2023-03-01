import React from "react";
import { NavLink } from "react-bootstrap";
import "./sidbar.css";
import { useNavigate } from "react-router-dom";
const navLinks = [
  {
    path: "/admin",
    icon: "fa-solid fa-circle-user",
    display: "Dashboard",
  },
  {
    path: "/adminMenue/63d1867c42eb0fcac7149f49",
    icon: "fa-solid fa-circle-user",
    display: "Menu",
  },
  {
    path: "/add",
    icon: "fa-solid fa-circle-user",
    display: "add",
  },
  {
    path: "/analysis",
    icon: "fa-solid fa-circle-user",
    display: "Analysis",
  },
];

export default function Sidbar() {
  const navigate = useNavigate();
  return (
    <div className="sidebar">
      <div className="sidebar__top">
        <div className="logo">
          <img src="./images/logo.png" alt="logo" />
        </div>
        <h5>TASTY FOOD</h5>
      </div>

      <div className="sidebar__content">
        <div className="menu">
          <ul className="nav__list">
            {navLinks.map((item, index) => (
              <li className="nav__item p-2" key={index}>
                <NavLink
                  onClick={() => {
                    navigate(item.path);
                  }}
                  to={item.path}
                  className={(navClass) =>
                    navClass.isActive ? "nav__active nav__link" : "nav__link"
                  }
                >
                  <i className={item.icon}></i>

                  {item.display}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>

        <div className="sidebar__bottom">
          <span>
            <i class="fa-solid fa-circle-user"></i> Logout
          </span>
        </div>
      </div>
    </div>
  );
}
