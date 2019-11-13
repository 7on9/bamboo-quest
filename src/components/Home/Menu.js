import {
  Link,
} from "react-router-dom";

import React from 'react'

export const Menu = ({ ...props }) => (
    <div className='container-fulid menu' id="myHeader" style={{ height: "auto", }}>

      {/* <nav className="navbar navbar-fixed-top navbar-light bg-light justify-content-between navbar-inverse"  >
        <Link to="/home" className="navbar-brand"></Link>
        <div className="btn-group center-div">
          <p style={{color:"#000"}}>Home</p>
          <div className='showGm' style={{ marginRight: '5px' }}>{props.email}</div>
          <button type="button" className="btn" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            <img src={props.img ? props.img : '/images/avatar.jpg'} style={{ width: '35px', height: '35px', objectFit: 'cover' }} />
          </button>
          <div className="dropdown-menu dropdown-menu-right">
            <Link className="dropdown-item" to='/user/info'>
              <div className='row'>
                <div className='col-1'>
                  <i className="fas fa-user"/>
                </div>
                <div className='col-9'>
                  Tài khoản
                </div>
              </div>
            </Link>
            <Link to="/quest/my" className="dropdown-item" href="#">
              <div className='row'>
                <div className='col-1'>
                  <i className="fas fa-question"/>
                </div>
                <div className='col-9'>
                  Thử thách
                </div>
              </div>
            </Link>
            <Link to="/quest/create" className="dropdown-item" href="#">
              <div className='row'>
                <div className='col-1'>
                  <i className="fas fa-plus"/>
                </div>
                <div className='col-9'>
                  Tạo thử thách
                </div>
              </div>
            </Link>
            <div className="dropdown-divider" />
            <Link to="" className="dropdown-item" >
              <div className='row'>
                <div className='col-1'>
                  <i className="fas fa-sign-out-alt"/>
                </div>
                <div className='col-9'>
                  Đăng xuất
                </div>
              </div>
            </Link>
          </div>
        </div>
      </nav> */}
      <nav className="navbar fixed-top navbar-expand-lg navbar-light bg-light ">
        <div className="container">
          <p className="navbar-brand" href="#" ><img src="images/logoMau.png" style={{height:"3vw"}}/></p>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <Link to="/home" className="nav-item nav-link active"  style={{cursor:"pointer"}}> <p style={{fontWeight:"bold"}}>Trang chủ </p><span className="sr-only">(current)</span></Link>
              <Link to="/quest/my" className="nav-item nav-link active"  style={{cursor:"pointer"}}> <p style={{fontWeight:"bold"}}>Thử thách của tôi</p><span className="sr-only">(current)</span></Link>
              <Link to="/user/info" className="nav-item nav-link active"  style={{cursor:"pointer"}}> <p style={{fontWeight:"bold"}}>Tài khoản </p><span className="sr-only">(current)</span></Link>
            
            </div>
          </div>
        </div>

      </nav>

    </div>
  )
