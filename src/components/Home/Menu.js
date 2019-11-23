import { Link } from 'react-router-dom'

import React from 'react'

export const Menu = ({ ...props }) => (

  <div
    className="container-fulid menu"
    id="myHeader"
    style={{ height: 'auto', marginBottom:"100px" }}>
    <nav className="navbar fixed-top navbar-expand-lg navbar-light bg-light ">
      <div className="container">
        <p className="navbar-brand" href="#">
          <img src={window.location.origin+"/images/logoMau.png"} style={{ height: '3vw' }} />
        </p>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <Link
              to="/home"
              className="nav-item nav-link active"
              style={{ cursor: 'pointer' }}>
              {' '}
              <p style={{ fontWeight: 'bold', color: '#fff' }}>Trang chủ </p>
              <span className="sr-only">(current)</span>
            </Link>
            <Link
              to="/user/quest"
              className="nav-item nav-link active"
              style={{ cursor: 'pointer' }}>
              {' '}
              <p style={{ fontWeight: 'bold', color: '#fff' }}>
                Thử thách của tôi
              </p>
              <span className="sr-only">(current)</span>
            </Link>
            <Link
              to="/user/info"
              className="nav-item nav-link active"
              style={{ cursor: 'pointer' }}>
              {' '}
              <p style={{ fontWeight: 'bold', color: '#fff' }}>Tài khoản </p>
              <span className="sr-only">(current)</span>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  </div>
)
