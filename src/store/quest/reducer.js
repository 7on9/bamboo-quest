/* eslint-disable no-case-declarations */
//reducer user
import { QUEST_TYPES, EVENT } from './types'

let initialState = {
  info: null,
  running: false,
  result: false,
  quests: [],
  questPublic: [],
  isGetQuiz: false,
}

export const questReducer = (state = initialState, action) => {
  switch (action.type) {
    case QUEST_TYPES.LIST:
      state = {
        ...state,
        quests: action.payload.quests ? [...action.payload.quests] : [],
        running: false,
      }
      break
    case QUEST_TYPES.GET_QUIZ_PUBLIC:
      if (action.payload.index !== undefined) {
        const arrQuestPublic = [...state.questPublic]
        arrQuestPublic.splice(action.payload.index, 1)
        arrQuestPublic.splice(action.payload.index, 0, {
          quest: action.payload.quest,
          page: action.payload.page,
          _idCategory: action.payload._idCategory,
        })

        state = {
          ...state,
          questPublic: arrQuestPublic,
          running: false,
        }
      } else {
        const arrQuestPublic = [
          ...state.questPublic,
          {
            quest: action.payload.quest,
            page: action.payload.page,
            _idCategory: action.payload._idCategory,
          },
        ]

        state = {
          ...state,
          questPublic: arrQuestPublic,
          running: false,
          isGetQuiz: true,
        }
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
      let deletedArr = state.quests.forEach((quest) => {
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
    case QUEST_TYPES.MY_QUESTS:
    case QUEST_TYPES.RESET_QUIZ:
    case QUEST_TYPES.UPDATE_QUIZ:
    case QUEST_TYPES.DELETE_QUESTION:
    case QUEST_TYPES.LIKE_PUBLIC_QUEST:
    case QUEST_TYPES.RESET:
    case QUEST_TYPES.RESET_QUIZ_PUBLIC:
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
