//reducer user
import { ADMIN_TYPE, EVENT } from './types'

let initialState = {
  page: [],
  running: false,
  result: false,
}

export const adminReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADMIN_TYPE.ADD:
    case ADMIN_TYPE.GET:
    case ADMIN_TYPE.DELETE:
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
