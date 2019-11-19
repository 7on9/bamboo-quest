import { QuestService } from '../../services/quest'
import { EVENT, QUEST_TYPES } from './types'

// export const QUEST_TYPES_ACTIONS = {
//   quests,
//   questInfo,
//   createQuest : createQuest
// };

export const questInfo = quest => {
  return {
    type: QUEST_TYPES.GET,
    payload: {
      questInfo: quest,
      running: false,
      result: true,
    },
  }
}

export const quests = quests => {
  return {
    type: QUEST_TYPES.LIST,
    payload: {
      quests: quests,
      running: false,
    },
  }
}

export const createQuest = quest => {
  return dispatch => {
    QuestService.createQuest(quest)
      .then(res => res.data)
      .then(res => dispatch({
        type: QUEST_TYPES.CREATE,
        payload: {
          ...res,
          running: false,
        },
      })
      )
      .catch(() => dispatch({
        type: QUEST_TYPES.CREATE,
        payload: {
          result: false,
          running: false,
        },
      })
      )
  }
}

export const addQuestion = newQuestion => {
  return dispatch => {
    QuestService.addQuestion(newQuestion)
      .then(res => res.data)
      .then(res => dispatch({
        type: QUEST_TYPES.ADD,
        payload: {
          ...res,
          running: false,
        },
      })
      )
      .catch(() => dispatch({
        type: QUEST_TYPES.ADD,
        payload: {
          result: false,
          running: false,
        },
      })
      )
  }
}

export const deleteQuest = idQuest => {
  return dispatch => {
    QuestService.deleteQuest(idQuest)
      .then(res => res.data)
      .then(res => dispatch({
        type: QUEST_TYPES.DELETE,
        payload: {
          result: true,
          deletedQuest: res.deletedQuest,
        },
      })
      )
      .catch(() => dispatch({
        type: QUEST_TYPES.DELETE,
        payload: {
          result: false,
        },
      })
      )
  }
}
export const getInfoQuest = idQuest => {
  return dispatch => {
    QuestService.getQuest(idQuest)
      .then(res => res.data)
      .then(res => dispatch({
        type: QUEST_TYPES.GET,
        payload: {
          ...res,
        },
      })
      )
      .catch(() => dispatch({
        type: QUEST_TYPES.GET,
        payload: {
          info: null,
        },
      })
      )
  }
}

export const getsAllQuests = limit => {
  return dispatch => {
    QuestService.getAllQuests(limit)
      .then(res => res.data)
      .then(res => dispatch({
        type: QUEST_TYPES.LIST,
        payload: {
          ...res,
        },
      })
      )
      .catch(err => {
        console.log(err)
        return dispatch({
          type: QUEST_TYPES.LIST,
          payload: {
            result: false,
            quests: null,
          },
        })
      })
  }
}

export const resetResult = () => {
  return dispatch => {
    dispatch({
      type: EVENT.RESULT,
      payload: {
        result: false,
      },
    })
  }
}

export const changeStatusRunning = result => {
  return dispatch => {
    dispatch({
      type: EVENT.RUNNING,
      payload: {
        running: result,
      },
    })
  }
}
