import { QuestService } from '../../services/quest'
import { EVENT, QUEST_TYPES } from './types'

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
          running: false,
        },
      })
    }
  }
}

export const updateInfoQuest = (newQuest) => {
  return async (dispatch) => {
    try {
      resetResult()
      let res = await QuestService.updateQuest(newQuest)
      res = res.data
      console.log(res)
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
          running: false,
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

export const deleteQuestion = (quest) => {
  return async (dispatch) => {
    try {
      resetResult()
      let myQuest = await QuestService.deleteQuestion(quest)
      myQuest = myQuest.data
      dispatch({
        type: QUEST_TYPES.DELETE_QUESTION,
        payload: { info: myQuest },
      })
    } catch (error) {
      dispatch({
        type: QUEST_TYPES.DELETE_QUESTION,
        payload: {
          result: false,
          info: null,
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

export const getsQuestCategory = (skip, _idCategory, index) => {
  return async (dispatch) => {
    try {
      let quest = await QuestService.getQuestCategory(skip, _idCategory)
      quest = quest.data
      return dispatch({
        type: QUEST_TYPES.GET_QUIZ_PUBLIC,
        payload: { quest, page: skip, index, _idCategory },
      })
    } catch (error) {
      return dispatch({
        type: QUEST_TYPES.LIST,
        payload: {
          result: false,
          quest: [],
        },
      })
    }
  }
}

export const likePublicQuest = (_idQuest) => {
  return async (dispatch) => {
    try {
      await QuestService.likeQuest(_idQuest)
    } catch (error) {
      return dispatch({
        type: QUEST_TYPES.LIKE_PUBLIC_QUEST,
        payload: {
          result: false,
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

export const resetQuizPublic = () => {
  return (dispatch) => {
    dispatch({
      type: QUEST_TYPES.RESET_QUIZ_PUBLIC,
      payload: {
        questPublic: [],
      },
    })
  }
}

export const resetQuiz = () => {
  return (dispatch) => {
    dispatch({
      type: QUEST_TYPES.RESET_QUIZ,
      payload: {
        info: null,
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
