import React, { useEffect } from 'react'
import Helmet from 'react-helmet'
import Animation from './animation'
import { Link } from 'react-router-dom'

export const Menu = () => {
  useEffect(() => {
    Animation()
  }, [])
  return (
    <div>
      <Helmet>
        <link rel="stylesheet" type="text/css" href="/comon/css/nav.css" />
      </Helmet>
      <nav className="navbar navbar-expand-lg navbar-mainbg">
        <Link to="/home" className="navbar-brand navbar-logo">
          BAMBOO QUEST
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation">
          <i className="fas fa-bars text-white" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item ">
              <Link to="/home" className="nav-link">
                <i className="fas fa-tachometer-alt" />
                Trang chủ
              </Link>
            </li>
            <li className="nav-item active">
              <Link to="/user/quest" className="nav-link">
                <i className="fas fa-user" />
                User
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  )
}
