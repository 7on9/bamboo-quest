//reducer user
import { ADMIN_TYPE, EVENT } from './types'

let initialState = {
  page: 1,
  user: [],
  running: false,
  result: false,
  count: 0
}

export const adminReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADMIN_TYPE.ADD:
    case ADMIN_TYPE.GET:
    case ADMIN_TYPE.DELETE:
    case ADMIN_TYPE.SET_PAGE:
    case EVENT.RUNNING:
      state = {
        ...state,
        ...action.payload,
      }
      break
    default:
      break
  }
  return state
}
