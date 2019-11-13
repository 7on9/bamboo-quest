//reducer user
import { QUEST_TYPES, EVENT } from './types'

let initialState = {
  info: null,
  running: false,
  result: false,
  quests: [],
}

export const questReducer = (state = initialState, action) => {
  switch (action.type) {
    case QUEST_TYPES.LIST:
      state = {
        ...state,
        quests: action.payload.quests ? [...action.payload.quests] : [],
      }
      break
    case QUEST_TYPES.CREATE:
      let { quests } = state
      if (action.payload.newQuest) {
        quests.push(action.payload.newQuest)
        state = {
          ...state,
          result: action.payload.result,
          quests: [...quests],
        }
      } else {
        state = {
          ...state,
          ...action.payload,
        }
      }
      break
    case QUEST_TYPES.DELETE:
      let deletedArr = state.quests.map(quest => {
        if (quest._id !== action.payload.deletedQuest._id) {
          return quest
        }
      })
      state = {
        ...state,
        result: 'SUCCESS',
        quests: [...deletedArr],
      }
      break
    case QUEST_TYPES.SET_STATUS:
      state = {
        ...state,
        result: action.payload.result,
      }
      break
    case QUEST_TYPES.ADD:
    case QUEST_TYPES.GET:
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
