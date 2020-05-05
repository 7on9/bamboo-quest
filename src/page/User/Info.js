import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
class Info extends Component {
  render() {
    return (
      <div className="row">
        <div className="container emp-profile">
          <form method="post">
            <div className="col-12 row">
              <div className="col-md-4">
                <div className="profile-img">
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS52y5aInsxSm31CvHOFHWujqUx_wWTS9iM6s7BAm21oEN_RiGoog"
                    alt=""
                  />
                </div>
              </div>
              <div className="col-md-8">
                <div className="profile-head profile-header">
                  <div className="row">
                    <div className="col">
                      <h5>
                        {this.props.user.info
                          ? this.props.user.info.name
                          : 'Tên'}
                      </h5>
                    </div>
                    <div className="d-flex justify-content-end col">
                      <Link
                        to="/user/edit"
                        className="edit-profile btn btn-success">
                        <i class="fa fa-pencil-square fa-lg p-r-5" />
                        Chỉnh sửa
                      </Link>
                    </div>
                  </div>
                  <ul className="nav nav-tabs" id="myTab" role="tablist">
                    <li className="nav-item">
                      <a
                        className="nav-link active"
                        id="home-tab"
                        data-toggle="tab"
                        href="#home"
                        role="tab"
                        aria-controls="home"
                        aria-selected="true">
                        Thông tin tài khoản
                      </a>
                    </li>
                  </ul>
                  <div className="col-md-8">
                    <div className="tab-content profile-tab" id="myTabContent">
                      <div
                        className="tab-pane fade show active"
                        id="home"
                        role="tabpanel"
                        aria-labelledby="home-tab">
                        <div className="row">
                          <div className="col-md-6">
                            <i className="fas fa-user icon" />
                            <label>Name</label>
                          </div>
                          <div className="col-md-6">
                            <p>
                              {this.props.user.info
                                ? this.props.user.info.name
                                : 'Tên'}
                            </p>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-md-6">
                            <i className="fas fa-envelope icon" />
                            <label>Email</label>
                          </div>
                          <div className="col-md-6">
                            <p>
                              {this.props.user.info
                                ? this.props.user.info.email
                                : 'Email'}
                            </p>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-md-6">
                            <i className="fas fa-phone icon" />
                            <label>Phone</label>
                          </div>
                          <div className="col-md-6">
                            <p>
                              {this.props.user.info
                                ? this.props.user.info.phone
                                  ? this.props.user.info.phone
                                  : 'Chưa cập nhật'
                                : null}
                            </p>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-md-6">
                            <i className="fas fa-building icon" />
                            <label>Organization</label>
                          </div>
                          <div className="col-md-6">
                            <p>
                              {this.props.user.info
                                ? this.props.user.info.organization
                                  ? this.props.user.info.organization
                                  : 'Chưa cập nhật'
                                : null}
                            </p>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-md-6">
                            <i className="fas fa-venus-mars icon" />
                            <label>Gender</label>
                          </div>
                          <div className="col-md-6">
                            <p>
                              {this.props.user.info
                                ? this.props.user.info.gender === false
                                  ? 'Nữ'
                                  : this.props.user.info.gender === true
                                  ? 'Nam'
                                  : 'Chưa cập nhật'
                                : null}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  ...state,
})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(Info)
