//reducer user
import { CATEGORY_TYPE, EVENT } from './types'

let initialState = {
  categories: [],
  running: false,
  result: false,
}

export const categoryReducer = (state = initialState, action) => {
  switch (action.type) {
    case CATEGORY_TYPE.GET:
      state = {
        ...state,
        ...action.payload,
        running: false,
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
