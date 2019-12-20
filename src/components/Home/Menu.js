import { Link } from 'react-router-dom'

import React from 'react'
import './style.css'
// import './nav.js'
import {Icon} from './../../res/icon/index'
export const Menu = (props) => (
  <nav className="menu">
    {console.log (props)}
    <div className="logoMenu">
      <Link to="/home" className="logoMenu">BAMBOO QUEST</Link>
    </div>
    <ul className="nav-links">
      <li><Link className="name-item-menu" to="/home">HOME</Link></li>
      <li><Link className="name-item-menu" to="/user/quest">Cuộc thi của tôi</Link></li>
      <li><Link className="name-item-menu" to="/user/info">Tài khoản</Link></li>
      <li><Link className="name-item-menu" to="/home" onClick={()=>props.logout()} ><img  style={{width:'12px', height:'12px'}} src={Icon.LOGOUT}/></Link></li>
    </ul>
    <div className="burger">
      <div className="line1"></div>
      <div className="line2"></div>
      <div className="line3"></div>
    </div>
  </nav>
)
