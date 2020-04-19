//reducer user
import { ADMIN_TYPE, EVENT } from './types'

let initialState = {
  page: 1,
  quest: [],
  running: false,
  result: false,
  count: 0,
  item: 0
}

export const adminReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADMIN_TYPE.ADD:
    case ADMIN_TYPE.GET_QUEST:
    case ADMIN_TYPE.DELETE:
    case ADMIN_TYPE.SET_PAGE:
    case ADMIN_TYPE.ITEM:
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
