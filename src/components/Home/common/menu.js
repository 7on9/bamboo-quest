import React from 'react'
import Helmet from 'react-helmet'
import { Link } from 'react-router-dom'

export const Menu = () => {
  return (
    <div>
      <Helmet>
        <link rel="stylesheet" type="text/css" href="/comon/css/home.css" />
      </Helmet>
      <nav
        className="navbar navbar-expand-lg navbar-mainbg"
        style={{
          position: 'fixed',
          width: '100%',
          zIndex: '100',
        }}>
        <a className="navbar-brand navbar-logo" href="#">
          BAMBOO QUEST
        </a>
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
            <div className="hori-selector">
              {/* <div className="left" />
                <div className="right" /> */}
            </div>
            <li className="nav-item active">
              <Link
                to="/home"
                className="nav-link"
                style={{ background: '#fff', color: '#57b846' }}>
                <i className="fas fa-tachometer-alt" />
                Khám phá
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/user/quest" className="nav-link">
                <i className="far fa-address-book" />
                User
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  )
}
