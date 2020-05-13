import React from 'react'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import * as authAction from '../../store/auth/action'
import './style.css'
import { Icon } from '../../res/icon/index'
export const Menu = React.memo(() => {
  const dispatch = useDispatch()
  const handleLogout = () => {
    dispatch(authAction.logout())
  }
  return (
    <nav className="menu">
      <div className="logoMenu">
        <Link to="/home" className="logoMenu">
          BAMBOO QUEST
        </Link>
      </div>
      <ul
        className="nav-links"
        style={{ listStyleType: 'none', margin: '0', padding: '0' }}>
        <li>
          <Link className="name-item-menu" to="/home">
            HOME
          </Link>
        </li>
        <li>
          <Link className="name-item-menu" to="/user/quest">
            Cuộc thi của tôi
          </Link>
        </li>
        <li>
          <Link className="name-item-menu" to="/user/info">
            Tài khoản
          </Link>
        </li>
        <li>
          <Link className="name-item-menu" to="/" onClick={handleLogout}>
            <img
              style={{ width: '12px', height: '12px' }}
              src={Icon.LOGOUT}
              alt="menu"
            />
          </Link>
        </li>
      </ul>
      <div className="burger">
        <div className="line1"></div>
        <div className="line2"></div>
        <div className="line3"></div>
      </div>
    </nav>
  )
})
