import React from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import * as authAction from '../../store/auth/action'
import * as adminAction from '../../store/admin/action'
import './style.css'
import { Icon } from '../../res/icon/index'
export const Menu = React.memo(() => {
  const dispatch = useDispatch()
  const user = useSelector((state) => state.user)
  const admin = useSelector((state) => state.admin)

  React.useEffect(() => {
    dispatch(adminAction.getRole())
  }, [])

  const handleLogout = () => {
    dispatch(authAction.logout())
  }

  const isAdmin = React.useCallback(() => {
    if (user.info && admin.roles.length > 0) {
      const role = admin.roles.find((item) => item._id === user.info.role)
      console.log(role)
      if (role.name !== 'user') {
        return true
      }
    }
    return false
  }, [admin])

  return (
    <nav className="menu">
      <div className="logoMenu">
        <Link to="/home" className="logoMenu">
          BAMBOO QUEST
        </Link>
      </div>
      <ul
        className="nav-links"
        style={{
          listStyleType: 'none',
          margin: '0',
          padding: '0',
          width: isAdmin ? '45%' : '30%',
        }}>
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
          <Link className="name-item-menu" to="/">
            Chơi ngay
          </Link>
        </li>
        {user.info ? (
          isAdmin() && (
            <li>
              <Link className="name-item-menu" to="/dashboard">
                Dashborad
              </Link>
            </li>
          )
        ) : (
          <></>
        )}

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
