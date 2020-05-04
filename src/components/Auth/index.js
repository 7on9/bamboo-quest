import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import Helmet from 'react-helmet'
import { APP_CONSTANTS } from '../../common/constants'
import * as authAction from '../../store/auth/action'
import { URL } from '../../common/constant'
import { CONTENT_TYPE } from './comon/constant'
import Login from './login'
import Register from './register'

export default function Authentication() {
  const dispatch = useDispatch()
  const history = useHistory()
  const user = useSelector((state) => state.user)
  const [contentType, setContentType] = useState(CONTENT_TYPE.LOGIN)
  const [isCorrect, setIsCorrect] = useState(true)
  const [isSubmitLogin, setIsSubmitLogin] = useState(false)
  const [isSubmitRegister, setIsSubmitRegister] = useState(false)

  useEffect(() => {
    if (localStorage.getItem(APP_CONSTANTS.WEB_TOKEN) !== null) {
      dispatch(authAction.verify())
    }
  }, [])
  useEffect(() => {
    if (user.authenticated === true) {
      history.push(URL.USER.QUEST)
    }
    if (contentType === CONTENT_TYPE.LOGIN && isSubmitLogin) {
      if (user.authenticated !== true) {
        setIsCorrect(false)
        setIsSubmitLogin(false)
      }
    }
  }, [user])

  useEffect(() => {
    if (contentType === CONTENT_TYPE.REGISTER && isSubmitRegister) {
      if (user.register === true) {
        alert('Bạn đã tạo tài khoản thành công')
        setIsSubmitRegister(false)
        setContentType(CONTENT_TYPE.LOGIN)
      } else {
        setIsSubmitRegister(false)
        alert('Email đã tồn tại, vui lòng đăng kí email khác!')
      }
    }
  }, [user])

  const handleLogin = (email, password) => {
    dispatch(authAction.login(email, password))
  }

  const handleRegister = (email, password, name) => {
    dispatch(authAction.register(email, password, name))
    setIsSubmitRegister(true)
  }

  const handleChangePage = (page) => {
    setContentType(page)
    setIsCorrect(true)
    setIsSubmitLogin(false)
    setIsSubmitRegister(false)
  }
  return (
    <div className="limiter">
      <div className="limiter">
        <Helmet>
          <link rel="stylesheet" type="text/css" href="/comon/css/util.css" />
          <link rel="stylesheet" type="text/css" href="/comon/css/main.css" />
        </Helmet>
        <div className="container-login100">
          <div className="wrap-login100">
            <div className="login100-pic js-tilt" data-tilt>
              <img src="/images/auth.png" alt="auth" />
            </div>
            {contentType === CONTENT_TYPE.LOGIN && (
              <Login
                handleLogin={handleLogin}
                isCorrect={isCorrect}
                setIsSubmitLogin={setIsSubmitLogin}
                handleChangePage={handleChangePage}
              />
            )}
            {contentType === CONTENT_TYPE.REGISTER && (
              <Register
                handleRegister={handleRegister}
                handleChangePage={handleChangePage}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
