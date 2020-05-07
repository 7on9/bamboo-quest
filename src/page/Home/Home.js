/* eslint-disable react/prop-types */
import React, { Component } from 'react'
import './style.css'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import * as authAction from '../../store/auth/action'
import * as questActions from '../../store/quest/action'
import { Item } from '../../components'
import { APP_CONSTANTS } from '../../common/constants'
import Helmet from 'react-helmet'

class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {
      category: 1,
      nav: false,
      iconUser: false,
      backgroundColor: false,
    }
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this)
  }
  changeCategory = (id) => {
    this.setState({
      category: id,
    })
  }
  UNSAFE_componentWillMount() {
    this.props.getsAllQuests(25)
    if (localStorage.getItem(APP_CONSTANTS.WEB_TOKEN)) {
      if (!this.props.user.email) {
        this.props.verify()
        if (this.props.user.token === null) {
          this.setState({
            authenticated: false,
          })
        } else {
          this.setState({
            authenticated: true,
          })
          this.props.getsAllQuests()
        }
      }
    } else {
      this.setState({
        authenticated: false,
      })
    }
  }
  componentDidMount() {
    const height = document.getElementById('header').clientHeight
    window.addEventListener('scroll', () => this.changeColorOnScroll(height))
    this.updateWindowDimensions()
    window.addEventListener('resize', this.updateWindowDimensions)
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.changeColorOnScroll)
    window.removeEventListener('resize', this.updateWindowDimensions)
  }
  changeColorOnScroll(height) {
    if (window.scrollY > height) {
      this.setState({ backgroundColor: true })
    } else {
      this.setState({ backgroundColor: false })
    }
  }
  updateWindowDimensions() {
    if (window.innerWidth > 990) {
      this.setState({
        nav: false,
        iconUser: true,
      })
    } else this.setState({ iconUser: false, nav: true })
  }
  top() {
    window.scrollTo(0, 0)
  }
  render() {
    const { quests } = this.props.quest
    const { info } = this.props.user
    const { token } = this.props.user
    return (
      <div className="home">
        <Helmet>
          <link rel="stylesheet" type="text/css" href="/comon/css/util.css" />
          <link rel="stylesheet" type="text/css" href="/comon/css/main.css" />
          <link rel="stylesheet" href="/comon/css/style.css" />
        </Helmet>
        <header>
          <div className="header-area fixed-top">
            <div id="sticky-header" className="main-header-area">
              <div className="container-fluid p-0">
                <div
                  className="row align-items-center no-gutters "
                  style={{
                    backgroundColor: this.state.backgroundColor
                      ? '#21D1C2'
                      : '#ff000012',
                  }}>
                  {this.state.nav ? <div /> : <div className="col-1" />}
                  <div className={this.state.nav ? 'col-12' : 'col-10'}>
                    <div
                      className={
                        this.state.nav
                          ? ''
                          : 'flex-grow-1 w-100 d-flex justify-content-center'
                      }>
                      <div className="main-menu ">
                        <nav className="navbar navbar-expand-lg navbar-light">
                          {/* <a class="navbar-brand"></a> */}
                          <button
                            onClick={() =>
                              this.setState({
                                toggle: !this.state.toggle,
                                backgroundColor: true,
                              })
                            }
                            className="navbar-toggler"
                            type="button"
                            data-toggle="collapse"
                            data-target="#navigation"
                            aria-controls="navigation"
                            aria-expanded="false"
                            aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                          </button>
                          <div
                            className="collapse navbar-collapse"
                            id="navigation">
                            <ul className=" navbar-nav mr-auto mt-2 mt-lg-0">
                              <li className="m-b-5">
                                <Link
                                  className={
                                    this.state.nav
                                      ? 'active nav-item'
                                      : 'active nav-item btn-login'
                                  }
                                  to="/home"
                                  style={{ fontWeight: 'bold' }}>
                                  Trang chủ
                                </Link>
                              </li>
                              <li className="m-b-5">
                                <Link
                                  to="/"
                                  style={{ fontWeight: 'bold' }}
                                  className={
                                    this.state.nav
                                      ? 'nav-item'
                                      : 'nav-item btn-login'
                                  }>
                                  Chơi ngay
                                </Link>
                              </li>
                              {token && (
                                <li className="m-b-5">
                                  <Link
                                    className={
                                      this.state.nav
                                        ? 'nav-item'
                                        : 'nav-item btn-login'
                                    }
                                    to="/user/quest"
                                    style={{ fontWeight: 'bold' }}>
                                    Thử thách của tôi
                                  </Link>
                                </li>
                              )}
                            </ul>
                          </div>
                          {this.state.iconUser ? (
                            <div />
                          ) : !this.state.toggle ? (
                            <div className=" d-flex align-self-center flex-shrink-1">
                              <div className="log_chat_area">
                                {token ? (
                                  <Link
                                    to="#test-form"
                                    className="login popup-with-form">
                                    <div className="dropdown">
                                      <img
                                        style={{
                                          width: '2em',
                                          height: '2em',
                                          borderRadius: '1em',
                                        }}
                                        src={
                                          info && info.avatar_path
                                            ? info.avatar_path
                                            : '/images/avatar-default.png'
                                        }
                                        data-toggle="dropdown"
                                        aria-haspopup="true"
                                        aria-expanded="false"
                                        alt=""
                                      />
                                      <div
                                        className="dropdown-menu dropdown-menu-right"
                                        aria-labelledby="dropdownMenuButton">
                                        <Link
                                          className="dropdown-item"
                                          to="/user/info">
                                          Thông tin tài khoản
                                        </Link>

                                        <Link
                                          className="dropdown-item"
                                          to="/user/edit">
                                          Chỉnh sửa thông tin
                                        </Link>
                                        <div className="dropdown-divider" />
                                        <Link
                                          className="dropdown-item"
                                          onClick={() => this.props.logout()}>
                                          <i
                                            className="fas fa-sign-out-alt"
                                            style={{ color: '#000' }}
                                          />
                                          Đăng xuất
                                        </Link>
                                      </div>
                                    </div>
                                  </Link>
                                ) : null}
                              </div>
                            </div>
                          ) : (
                            <div />
                          )}
                        </nav>
                      </div>
                    </div>
                  </div>
                  {this.state.iconUser ? (
                    <div className="col-1">
                      <div className=" d-flex justify-content-center flex-shrink-1">
                        <div className="log_chat_area">
                          {token ? (
                            <Link
                              to="#test-form"
                              className="login popup-with-form">
                              <div className="dropdown">
                                <img
                                  style={{
                                    width: '2em',
                                    height: '2em',
                                    borderRadius: '1em',
                                  }}
                                  src="/images/avatar-default.png"
                                  data-toggle="dropdown"
                                  aria-haspopup="true"
                                  aria-expanded="false"
                                  alt=""
                                />
                                <div
                                  className="dropdown-menu dropdown-menu-right"
                                  aria-labelledby="dropdownMenuButton">
                                  <Link
                                    className="dropdown-item"
                                    to="/user/info">
                                    Thông tin tài khoản
                                  </Link>

                                  <Link
                                    className="dropdown-item"
                                    to="/user/edit">
                                    Chỉnh sửa thông tin
                                  </Link>
                                  <div className="dropdown-divider" />
                                  <Link
                                    className="dropdown-item"
                                    onClick={() => this.props.logout()}>
                                    <i
                                      className="fas fa-sign-out-alt"
                                      style={{ color: '#000' }}
                                    />
                                    Đăng xuất
                                  </Link>
                                </div>
                              </div>
                            </Link>
                          ) : null}
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div />
                  )}

                  {/* sd */}

                  <div className="col-12">
                    <div className="mobile_menu d-block d-lg-none" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>
        {/* header-end */}

        {/* slider_area_start */}
        <div className="slider_area p-t-50" id="header">
          <div className="single_slider d-flex align-items-center justify-content-center background-single_slider">
            <div className="container">
              <div className="row align-items-center justify-content-center">
                <div className="col-xl-6 col-md-6">
                  <div className="illastrator_png">
                    <img src="/images/home/edu_ilastration.png" alt="" />
                  </div>
                </div>
                <div className="col-xl-6 col-md-6">
                  <div className="slider_info">
                    <h3>BAMBOO QUEST</h3>
                    <h3 style={{ fontSize: '-webkit-xxx-large' }}>
                      ỨNG DỤNG HỌC TẬP
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* slider_area_end */}
        {/* popular_courses_start */}
        <div className="popular_courses">
          <div className="container">
            <div className="row">
              <div className="col-xl-12 category">
                <div className="col-xl-12">
                  <div className="course_nav"></div>
                </div>
              </div>
            </div>
          </div>
          <div className="all_courses">
            <div className="container">
              <div className="tab-content" id="myTabContent">
                <div
                  className="tab-pane fade show active"
                  id="home"
                  role="tabpanel"
                  aria-labelledby="home-tab">
                  <div className="row">
                    {/* List quest */}
                    {quests.map((quest) => (
                      <div
                        className="col-xl-4 col-lg-4 col-md-6"
                        key={quest._id}>
                        <Item
                          id={quest._id}
                          questionLength={quest.questions.length}
                          title={quest.title}
                          description={quest.description}
                          link={`/quest/info/${quest._id}`}
                          img_path={quest.img_path}
                        />
                      </div>
                    ))}
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
  verify: authAction.verify,
  getsAllQuests: questActions.getsAllQuests,
  logout: authAction.logout,
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
