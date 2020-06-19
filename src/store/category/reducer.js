//reducer user
import { CATEGORY_TYPE, EVENT } from './types'

let initialState = {
  categories: [],
  running: false,
  result: false,
  categoriesCnt: [],
  itemSeleted: -1,
  update: false,
}

export const categoryReducer = (state = initialState, action) => {
  switch (action.type) {
    case CATEGORY_TYPE.GET:
    case CATEGORY_TYPE.DELETE:
    case CATEGORY_TYPE.ITEM_SELECTED:
    case CATEGORY_TYPE.UPDATE:
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
