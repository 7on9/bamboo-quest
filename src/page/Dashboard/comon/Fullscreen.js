import React, { Component } from 'react'
import { Helmet } from 'react-helmet'
import MenuDashboard from './Menu'
import Slidebar from './Slidebar'
import { connect } from 'react-redux'
import * as userActions from '../../../store/auth/action'

class Fullscreen extends Component {
  render() {
    return (
      <div>
        <Helmet>
          <meta charSet="utf-8" />
          <title>Dashboard</title>
          <link
            href="/comon/dashboard/vendor/fontawesome-free/css/all.min.css"
            rel="stylesheet"
            type="text/css"
          />
          <link
            href="https://fonts.googleapis.com/css?family=Nunito:200,200i,300,300i,400,400i,600,600i,700,700i,800,800i,900,900i"
            rel="stylesheet"
          />
          <link href="/comon/dashboard/css/sb-admin-2.css" rel="stylesheet" />
        </Helmet>
        <div>
          <div>
            <div id="wrapper">
              <Slidebar />
              <div id="content-wrapper" className="d-flex flex-column">
                <div id="content">
                  <MenuDashboard />
                  {this.props.children}
                </div>
                <footer className="sticky-footer bg-white">
                  <div className="container my-auto">
                    <div className="copyright text-center my-auto">
                      <span>Copyright © Your Website 2020</span>
                    </div>
                  </div>
                </footer>
              </div>
            </div>
            <a className="scroll-to-top rounded" href="#page-top">
              <i className="fas fa-angle-up" />
            </a>
            <div
              className="modal fade"
              id="logoutModal"
              tabIndex={-1}
              role="dialog"
              aria-labelledby="exampleModalLabel"
              aria-hidden="true">
              <div className="modal-dialog" role="document">
                <div className="modal-content">
                  <div className="modal-header">
                    <h5 className="modal-title" id="exampleModalLabel">
                      Bạn muốn đăng xuất?
                    </h5>
                    <button
                      className="close"
                      type="button"
                      data-dismiss="modal"
                      aria-label="Close">
                      <span aria-hidden="true">×</span>
                    </button>
                  </div>
                  <div className="modal-body">Vui lòng chọn</div>
                  <div className="modal-footer">
                    <button
                      className="btn btn-secondary"
                      type="button"
                      data-dismiss="modal">
                      Huỷ
                    </button>
                    <a
                      className="btn btn-primary"
                      href="/auth"
                      onClick={() => this.props.logout()}>
                      Đăng xuất
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  ...state,
})

const mapDispatchToProps = {
  logout: userActions.logout,
}

export default connect(mapStateToProps, mapDispatchToProps)(Fullscreen)
