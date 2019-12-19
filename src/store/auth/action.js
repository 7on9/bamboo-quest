import { AuthenticationService } from '../../services/authentication'
import { USER_TYPE, EVENT } from './types'
import { APP_CONSTANTS } from '../../common/constants'

const authenAction = (type, token, email, result) => {
  return {
    type: type,
    payload: {
      result: result,
      token: token,
      email: email,
    },
  }
}

export const login = (email, password) => {
  return dispatch => {
    AuthenticationService.login(email, password)
      .then(res => res.data)
      .then(res => {
        if (!res.result) {
          return dispatch({
            type: USER_TYPE.AUTH.LOGIN,
            payload: {
              ...res,
            },
          })
        } else {
          localStorage.setItem(APP_CONSTANTS.WEB_TOKEN, res.token)
          return dispatch({
            type: USER_TYPE.AUTH.LOGIN,
            payload: {
              ...res,
            },
          })
        }
      })
      .catch(err => {
        console.log(err)
        dispatch({
          type: USER_TYPE.AUTH.LOGIN,
          payload: {
            result: false,
            token: '',
            email: '',
          },
        })
      })
  }
}

export const resetResult = () => {
  return dispatch => {
    dispatch({
      type: EVENT.RESULT,
      payload: {
        result: false,
      },
    })
  }
}

export const changeStatusRunning = status => {
  return dispatch => {
    dispatch({
      type: EVENT.RUNNING,
      payload: {
        running: status,
      },
    })
  }
}

export const register = (email, password, name) => {
  return dispatch => {
    AuthenticationService.register(email, password, name)
      .then(res => res.data)
      .then(res => {
        if (!res.result) {
          return dispatch({
            type: USER_TYPE.AUTH.REGISTER,
            payload: {
              running: false,
              result: false,
            },
          })
        } else {
          return dispatch({
            type: USER_TYPE.AUTH.REGISTER,
            payload: {
              running: false,
              result: res.result,
            },
          })
        }
      })
      .catch(() => {
        return dispatch({
          type: USER_TYPE.AUTH.REGISTER,
          payload: {
            result: false,
            running: false,
          },
        })
      })
  }
}

export const logout = () => {
  return dispatch => {
    localStorage.removeItem(APP_CONSTANTS.WEB_TOKEN)
    localStorage.removeItem(APP_CONSTANTS.WEB_EMAIL)
    AuthenticationService.logout().catch(() => {
      return dispatch(authenAction(USER_TYPE.AUTH.LOGOUT, null, null, false))
    })
  }
}

export const verify = () => {
  return dispatch => {
    AuthenticationService.verify()
      .then(res => res.data)
      .then(res => {
        console.log(res)
        localStorage.setItem(APP_CONSTANTS.WEB_USER_INFO, res.info)
        localStorage.setItem(APP_CONSTANTS.WEB_EMAIL, res.info.email)
        localStorage.setItem (APP_CONSTANTS.WEB_TOKEN, res.token)
        return dispatch({
          type: USER_TYPE.AUTH.VERIFY,
          payload: {
            ...res,
          },
        })
      })
      .catch(() => {
        localStorage.removeItem(APP_CONSTANTS.WEB_USER_INFO)
        localStorage.removeItem(APP_CONSTANTS.WEB_TOKEN)
        localStorage.removeItem(APP_CONSTANTS.WEB_EMAIL)
        return dispatch({
          type: USER_TYPE.AUTH.VERIFY,
          payload: {
            result: false,
          },
        })
      })
  }
}

export const resetToken = () => {
  return authenAction(USER_TYPE.LOGIN, null, null, false)
}
