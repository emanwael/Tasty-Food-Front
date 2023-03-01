import React from 'react'
import { Link } from 'react-router-dom'
import './topNav.css'
export default function TopNav() {
  return (
    <div className="top__nav">
    <div className="top__nav-wrapper">
      <div className="search__box">
        <input type="text" placeholder="search or type" />
        <span>
          <i class="fa-solid fa-search"></i>
        </span>
      </div>
      <div className="top__nav-right">
        <span className="notification">
          <i class="fa-solid fa-bell" color='#fff' style={{fontSize:30}}></i>
          <span className="badge">1</span>
        </span>
        <div className="profile">
          <Link to="/settings">
            <img src='./images/avatar.jpg' alt="" />
          </Link>
        </div>
      </div>
    </div>
  </div>
  )
}
