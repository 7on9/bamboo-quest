/* eslint-disable react/prop-types */
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link, Switch, Redirect } from 'react-router-dom'
import * as authAction from '../../store/auth/action'
import './style.css'
import { ERROR } from '../../store/auth/types'
import { APP_CONSTANTS } from '../../common/constants'
import Helmet from 'react-helmet'

class Auth extends Component {
  constructor(props) {
    super(props)
    this.state = {
      login: true,
    }
  }

  onType = event => {
    this.setState({
      submit: false,
      error: '',
      [event.target.name]: event.target.value,
    })
  }

  onSubmit = () => {
    let { email, password, login, reTypePassword, name } = this.state
    // console.log(email, password, login, reTypePassword, name)
    if (
      (email && password && login) ||
      (email && password && reTypePassword && name && !login)
    ) {
      this.props.changeStatusRunning(true)
      if (this.state.login) {
        this.props.login(this.state.email, this.state.password)
      } else {
        this.props.register(
          this.state.email,
          this.state.password,
          this.state.name
        )
      }
      setTimeout(() => {
        this.setState({
          submited: true,
        })
      }, 1000)
    } else {
      this.setState({
        error: 'Hãy điền đủ các trường',
      })
    }
  }

  renderSpinner = () => {
    return this.props.user.running ? (
      <div className="linear-activity">
        <div className="indeterminate" />
      </div>
    ) : null
  }

  renderLogin = () => {
    return (
      <form className="login100-form validate-form">
        <span className="login100-form-title">Đăng nhập</span>
        <div
          className="wrap-input100 validate-input"
          data-validate="Valid email is required: ex@abc.xyz">
          <input
            className="input100"
            type="text"
            name="email"
            placeholder="Email"
            onChange={this.onType}
          />
          <span className="focus-input100" />
          <span className="symbol-input100">
            <i className="fa fa-envelope" aria-hidden="true" />
          </span>
        </div>
        <div
          className="wrap-input100 validate-input"
          data-validate="Password is required">
          <input
            className="input100"
            type="password"
            name="password"
            placeholder="Mật khẩu"
            onChange={this.onType}
          />
          <span className="focus-input100" />
          <span className="symbol-input100">
            <i className="fa fa-lock" aria-hidden="true" />
          </span>
        </div>
        <div className="container-login100-form-btn">
          <button
            className="login100-form-btn"
            onClick={e => {
              e.preventDefault()
              this.onSubmit()
            }}>
            Đăng nhập
          </button>
        </div>
        {this.state.error ? (
          <div className="error">{this.state.error}</div>
        ) : null}
        {this.renderSpinner()}
        <div className="text-center p-t-12">
          <a className="txt2" href="#">
            Quên mật khẩu?
          </a>
        </div>
        <div className="text-center p-t-136">
          <Link
            to="#"
            style={{ cursor: 'pointer' }}
            className="txt2 change_state"
            onClick={() =>
              this.setState({ login: !this.state.login, error: '' })
            }>
            Đăng ký
            <i className="fa fa-long-arrow-right m-l-5" aria-hidden="true" />
          </Link>
        </div>
      </form>
    )
  }

  renderRegister = () => {
    return (
      <form className="login100-form validate-form">
        <span className="login100-form-title">ĐĂNG KÝ</span>
        <div
          className="wrap-input100 validate-input"
          data-validate="Valid email is required: ex@abc.xyz">
          <input
            className="input100"
            type="text"
            name="email"
            placeholder="Email"
            onChange={this.onType}
          />
          <span className="focus-input100" />
          <span className="symbol-input100">
            <i className="fa fa-envelope" aria-hidden="true" />
          </span>
        </div>
        <div
          className="wrap-input100 validate-input"
          data-validate="Valid email is required: ex@abc.xyz">
          <input
            className="input100"
            type="text"
            name="name"
            placeholder="Họ và tên"
            onChange={this.onType}
          />
          <span className="focus-input100" />
          <span className="symbol-input100">
            <i className="fa fa-user" aria-hidden="true" />
          </span>
        </div>
        <div
          className="wrap-input100 validate-input"
          data-validate="Password is required">
          <input
            className="input100"
            type="password"
            name="password"
            placeholder="Mật khẩu"
            onChange={this.onType}
          />
          <span className="focus-input100" />
          <span className="symbol-input100">
            <i className="fa fa-lock" aria-hidden="true" />
          </span>
        </div>
        <div
          className="wrap-input100 validate-input"
          data-validate="Password is required">
          <input
            className="input100"
            type="password"
            name="reTypePassword"
            placeholder="Nhập lại mật khẩu"
            onChange={this.onType}
          />
          <span className="focus-input100" />
          <span className="symbol-input100">
            <i className="fa fa-lock" aria-hidden="true" />
          </span>
        </div>

        <div className="container-login100-form-btn">
          <button
            onClick={e => {
              e.preventDefault()
              this.onSubmit()
            }}
            className="login100-form-btn">
            Đăng ký
          </button>
        </div>
        {this.state.error ? (
          <div className="error">{this.state.error}</div>
        ) : null}
        {this.renderSpinner()}
        <div className="text-center p-t-136">
          <Link
            to="#"
            style={{ cursor: 'pointer' }}
            className="txt2 change_state"
            onClick={() =>
              this.setState({ login: !this.state.login, error: '' })
            }>
            <i className="fa fa-long-arrow-left m-r-5" aria-hidden="true" />
            Đăng nhập
          </Link>
        </div>
      </form>
    )
  }

  UNSAFE_componentWillMount() {
    if (localStorage.getItem(APP_CONSTANTS.WEB_TOKEN)) {
      this.props.verify()
      // this.props.getInfo()
    } else {
      let { from } = this.props.location.state || {
        from: { pathname: '/user/quest' },
      }
      return <Redirect to={from} />
    }
  }
  render() {
    const { login, submited } = this.state
    const { result, running, token, authenticated } = this.props.user

    if (this.props.authenticated) {
      return <Redirect to={{ from: { pathname: '/home' } }} />
    }

    if (token) {
      let { from } = this.props.location.state || {
        from: { pathname: '/user/quest' },
      }
      return <Redirect to={from} />
    }

    if (submited && !running) {
      console.log(running, result, login)

      if (result && !login) {
        alert('Tạo tài khoản thành công! Hãy đăng nhập vào hệ thống!')
        this.setState({
          login: true,
          submited: false,
        })
        this.props.resetResult()
      } else {
        if (!result && !login) {
          this.setState({
            error: 'Email đã tồn tại!',
            submited: false,
          })
          this.props.resetResult()
        } else {
          if (!running && result && login) {
            this.props.resetResult()
            let { from } = this.props.location.state || {
              from: { pathname: '/home' },
            }
            return <Redirect to={from} />
          } else {
            this.setState({
              submited: false,
              error: 'Sai tên đăng nhập hoặc mật khẩu',
            })
            this.props.resetResult()
          }
        }
      }
    }
    return (
      <div className="limiter">
        <Helmet>
          <link rel="stylesheet" type="text/css" href="/comon/css/util.css"/>
          <link rel="stylesheet" type="text/css" href="/comon/css/main.css"/>
        </Helmet>
        <div className="container-login100">
          <div className="wrap-login100">
            <div className="login100-pic js-tilt" data-tilt>
              <img src="/images/auth.png" alt="auth" />
            </div>
            {login ? this.renderLogin() : this.renderRegister()}
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  ...state,
})

const mapDispatchToProps = {
  changeStatusRunning: authAction.changeStatusRunning,
  resetResult: authAction.resetResult,
  register: authAction.register,
  login: authAction.login,
  verify: authAction.verify,
}

export default connect(mapStateToProps, mapDispatchToProps)(Auth)
