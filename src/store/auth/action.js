import { AuthenticationService } from '../../services/authentication'
import { USER_TYPE, EVENT } from './types'
import { APP_CONSTANTS } from '../../common/constants'

const authenAction = (type, token, email, result) => {
  return {
    type,
    payload: { result, token, email },
  }
}

export const login = (email, password) => {
  return async dispatch => {
    try {
      let res = await AuthenticationService.login(email, password)
      res = res.data
      localStorage.setItem(APP_CONSTANTS.WEB_TOKEN, res.token)
      return dispatch({
        type: USER_TYPE.AUTH.LOGIN,
        payload: {
          result: true,
          user: res.user,
          authenticated: true,
        },
      })
    } catch (error) {
      return dispatch({
        type: USER_TYPE.AUTH.LOGIN,
        payload: {
          result: false,
          user: null,
          token: null,
          email: null,
          authenticated: false,
        },
      })
    }
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
  return async dispatch => {
    try {
      await AuthenticationService.register(email, password, name)
      dispatch({
        type: USER_TYPE.AUTH.REGISTER,
        payload: {
          running: false,
          result: true,
        },
      })
    } catch (error) {
      dispatch({
        type: USER_TYPE.AUTH.REGISTER,
        payload: {
          running: false,
          result: false,
        },
      })
    }
  }
}

export const update = (avatar_path, dob, name, phone, gender, organization) => {
  return async dispatch => {
    try {
      await AuthenticationService.update(avatar_path, dob, name, phone, gender, organization)
      dispatch({
        type: USER_TYPE.UPDATE,
        payload: {
          running: false,
          result: true,
        },
      })
    } catch (error) {
      dispatch({
        type: USER_TYPE.UPDATE,
        payload: {
          running: false,
          result: false,
        },
      })
    }
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
  return async dispatch => {
    try {
      let res = await AuthenticationService.verify()
      res = res.data
      localStorage.setItem(APP_CONSTANTS.WEB_EMAIL, res.info.email)
      localStorage.setItem(APP_CONSTANTS.WEB_TOKEN, res.token)
      dispatch({
        type: USER_TYPE.AUTH.VERIFY,
        payload: {
          info: res.info,
          token: res.token,
          authenticated: true,
        },
      })
    } catch (error) {
      localStorage.removeItem(APP_CONSTANTS.WEB_USER_INFO)
      localStorage.removeItem(APP_CONSTANTS.WEB_TOKEN)
      localStorage.removeItem(APP_CONSTANTS.WEB_EMAIL)
      dispatch({
        type: USER_TYPE.AUTH.VERIFY,
        payload: {
          result: false,
          authenticated: false,
        },
      })
    }
  }
}

export const resetToken = () => {
  return authenAction(USER_TYPE.LOGIN, null, null, false)
}
