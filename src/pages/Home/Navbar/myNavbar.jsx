import React, { useRef } from "react";

import "./myNavbar.css";
import "../home.css";
import {  Container, NavDropdown, NavLink } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import ButtonCartCount from "../../restaurant-profile/components/common/ButtonCartCount";

const nav__links = [
  {
    display: "Home",
    path: "/home",
  },
  {
    display: "Foods",
    path: "/restaurant/63d1867c42eb0fcac7149f49",
  },
  {
    display: "Cart",
    path: "/cart",
  },
  {
    display: "Contact",
    path: "/contact",
  },
];

export default function MyNavbar() {
  const menuRef = useRef(null);
  const headerRef = useRef(null);

  const navigator = useNavigate();
  const toggleMenu = () => menuRef.current.classList.toggle("show__menu");

  return (
    <header className="header header__shrink" ref={headerRef}>
      <Container>
        <div className="nav__wrapper d-flex align-items-center justify-content-between">
          <div className="logo">
            <img src="../images/logo.png" alt="logo" />
            <h5>TASTY FOOD</h5>
          </div>

          {/* ======= menu ======= */}
          <div className="navigation" ref={menuRef} onClick={toggleMenu}>
            <div className="menu d-flex align-items-center gap-5">
              {nav__links.map((item, index) => (
                <NavLink
                  onClick={() => {
                    navigator(item.path);
                  }}
                  to={item.path}
                  key={index}
                  className={(navClass) =>
                    navClass.isActive ? "active__menu" : ""
                  }
                >
                  {item.display}
                </NavLink>
              ))}
            </div>
          </div>

          {/* ======== nav right icons ========= */}
          <div className="nav__right d-flex align-items-center gap-4">
            {/* <span className="cart__icon">
              <i
                class="fa-solid fa-cart-shopping"
                style={{
                  fontSize: 25,
                  cursor: "pointer",
                }}
              ></i>
              <span className="cart__badge"></span>
            </span> */}
            <ButtonCartCount />

            <NavDropdown title='Account' id="basic-nav-dropdown" className="fw-bold">
              <NavDropdown.Item>
                <Link to='/user' className='link'>
                  <i class='fa-solid fa-circle-user' style={{fontSize: 25 , color:'black'}}></i> Profile
                </Link>
              </NavDropdown.Item>
              <NavDropdown.Item >
                <Link to='/customer-login' className='link'>
                  <i class="fa-solid fa-right-to-bracket" style={{fontSize: 25 , color:'black'}}></i> Login
                </Link>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <Link to='/customer-register' className='link'>
                  <i class="fa-solid fa-right-from-bracket" style={{fontSize: 25 , color:'black'}}></i> Logout
                </Link>
              </NavDropdown.Item>
            </NavDropdown>
            {/* <span className="user">
              <Link to="/login">
                <i
                  class="fa-solid fa-user"
                  style={{
                    fontSize: 25,
                    cursor: "pointer",
                  }}
                ></i>
              </Link>
            </span> */}
            <span className="mobile__menu" onClick={toggleMenu}>
              <i class="fa-sharp fa-solid fa-bars"></i>
            </span>
          </div>
        </div>
      </Container>
    </header>
  );
}
