import { QuestService } from '../../services/quest'
import { EVENT, QUEST_TYPES } from './types'

// export const QUEST_TYPES_ACTIONS = {
//   quests,
//   questInfo,
//   createQuest : createQuest
// };

export const questInfo = (quest) => {
  return {
    type: QUEST_TYPES.GET,
    payload: {
      questInfo: quest,
      running: false,
      result: true,
    },
  }
}

export const quests = (quests) => {
  return {
    type: QUEST_TYPES.LIST,
    payload: {
      quests,
      result: true,
      running: false,
    },
  }
}

export const createQuest = (newQuest) => {
  return async (dispatch) => {
    try {
      resetResult()
      // changeStatusRunning(false)
      let quest = await QuestService.createQuest(newQuest)
      quest = quest.data
      dispatch({
        type: QUEST_TYPES.CREATE,
        payload: {
          quest,
          result: true,
          running: false,
        },
      })
    } catch (error) {
      dispatch({
        type: QUEST_TYPES.CREATE,
        payload: {
          error,
          result: false,
          running: false,
        },
      })
    }
  }
}

export const addQuestion = (newQuestion) => {
  return async (dispatch) => {
    try {
      resetResult()
      // changeStatusRunning(false)
      let quest = await QuestService.addQuestion(newQuestion)
      quest = quest.data
      dispatch({
        type: QUEST_TYPES.ADD,
        payload: {
          quest,
          result: true,
          running: false,
        },
      })
    } catch (error) {
      console.log(error)
      dispatch({
        type: QUEST_TYPES.ADD,
        payload: {
          result: false,
          running: false,
        },
      })
    }
  }
}

export const deleteQuest = (idQuest) => {
  return async (dispatch) => {
    try {
      resetResult()
      // changeStatusRunning(false)
      let res = await QuestService.deleteQuest(idQuest)
      res = res.data
      dispatch({
        type: QUEST_TYPES.DELETE,
        payload: {
          result: true,
          deletedQuest: res.deletedQuest,
        },
      })
    } catch (error) {
      console.log(error)
      dispatch({
        type: QUEST_TYPES.DELETE,
        payload: {
          result: false,
        },
      })
    }
  }
}

export const getInfoQuest = (idQuest) => {
  return async (dispatch) => {
    try {
      resetResult()
      // changeStatusRunning(false)
      let res = await QuestService.getQuest(idQuest)
      res = res.data
      dispatch({
        type: QUEST_TYPES.GET,
        payload: {
          info: res,
          running: false,
          result: true,
        },
      })
    } catch (error) {
      dispatch({
        type: QUEST_TYPES.GET,
        payload: {
          info: null,
        },
      })
    }
  }
}

export const getMyQuests = () => {
  return async (dispatch) => {
    try {
      resetResult()
      let myQuests = await QuestService.getMyQuests()
      myQuests = myQuests.data
      dispatch({
        type: QUEST_TYPES.MY_QUESTS,
        payload: { myQuests },
      })
    } catch (error) {
      dispatch({
        type: QUEST_TYPES.MY_QUESTS,
        payload: {
          result: false,
          myQuests: [],
        },
      })
    }
  }
}

export const getsAllQuests = (limit) => {
  return async (dispatch) => {
    try {
      resetResult()
      // changeStatusRunning(false)
      let quests = await QuestService.getAllQuests(limit)
      quests = quests.data
      return dispatch({
        type: QUEST_TYPES.LIST,
        payload: { quests },
      })
    } catch (error) {
      return dispatch({
        type: QUEST_TYPES.LIST,
        payload: {
          result: false,
          quests: null,
        },
      })
    }
  }
}

export const getsQuestCategory = (limit, _idCategory) => {
  return async (dispatch) => {
    try {
      let quest = await QuestService.getQuestCategory(limit, _idCategory)
      quest = quest.data
      return dispatch({
        type: QUEST_TYPES.GET_QUIZ_PUBLIC,
        payload: { quest },
      })
    } catch (error) {
      return dispatch({
        type: QUEST_TYPES.LIST,
        payload: {
          result: false,
          quests: null,
        },
      })
    }
  }
}

export const resetResult = () => {
  return (dispatch) => {
    dispatch({
      type: EVENT.RESULT,
      payload: {
        result: false,
      },
    })
  }
}

export const changeStatusRunning = (result) => {
  return (dispatch) => {
    dispatch({
      type: EVENT.RUNNING,
      payload: {
        running: result,
      },
    })
  }
}
