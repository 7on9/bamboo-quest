//reducer user
import { ADMIN_TYPE, EVENT } from './types'

let initialState = {
  page: 1,
  user: [],
  questDashboard: [],
  running: false,
  result: false,
  count: 0,
  item: 0,
  myCollection: [],
  allCollection: [],
  countUser: -1,
  countQuiz: -1,
  countGame: -1,
  countCategory: -1,
}

export const adminReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADMIN_TYPE.ADD:
    case ADMIN_TYPE.GET:
    case ADMIN_TYPE.DELETE:
    case ADMIN_TYPE.SET_PAGE:
    case ADMIN_TYPE.ITEM:
    case ADMIN_TYPE.CREATECOLLECTION:
    case ADMIN_TYPE.GETCOLLECTION:
    case ADMIN_TYPE.GET_COUNT_USER:
    case ADMIN_TYPE.GET_COUNT_QUIZ:
    case ADMIN_TYPE.GET_COUNT_GAME:
    case ADMIN_TYPE.GET_COUNT_CATEGORY:
    case EVENT.RUNNING:
      state = {
        ...state,
        running: false,
        ...action.payload,
      }
      break
    default:
      break
  }
  return state
}
