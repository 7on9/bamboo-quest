import { Link } from 'react-router-dom'

import React from 'react'
import './style.css'
// import './nav.js'
export const Menu = ({ ...props }) => (

  <nav className="menu">
    <div className="logoMenu">
      <h4 className="logoMenu">BAMBOO QUEST</h4>
    </div>
    <ul className="nav-links">
      <li><Link className="name-item-menu" to="/home">HOME</Link></li>
      <li><Link className="name-item-menu" to="/user/quest">Cuộc thi của tôi</Link></li>
      <li><Link className="name-item-menu" to="/user/info">Tài khoản</Link></li>
    </ul>
    <div className="burger">
      <div className="line1"></div>
      <div className="line2"></div>
      <div className="line3"></div>
    </div>
  </nav>
)
