//reducer user
import { USER_TYPE, EVENT } from './types'

let initialState = {
  token: '',
  info: null,
  running: false,
  result: false,
}

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case USER_TYPE.AUTH.LOGIN:
    case USER_TYPE.AUTH.LOGOUT:
    case USER_TYPE.AUTH.VERIFY:
      state = {
        ...state,
        ...action.payload,
        running: false,
      }
      break
    case USER_TYPE.AUTH.REGISTER:
    case EVENT.RESULT:
      state = {
        ...state,
        ...action.payload,
      }
      break
    case EVENT.RUNNING:
      state = {
        ...state,
        running: action.payload.running,
      }
      break
    default:
      break
  }
  return state
}
