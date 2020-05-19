import { dataProvider } from './dataProvider'

export const QuestService = {
  getMyQuests: () => {
    return dataProvider('/quest/my-quests', { method: 'GET' })
  },
  getAllQuests: (limit) => {
    return dataProvider('/quest/', { method: 'GET', params: { limit } })
  },
  getQuestCategory: (skip, _idCategory) => {
    return dataProvider('/quest', {
      method: 'GET',
      params: {
        limit: 4,
        skip: (skip - 1) * 4,
        filter: { category: _idCategory },
      },
    })
  },
  getQuestInfo: (idQuest) => {
    return dataProvider(`/quest/${idQuest}`, { method: 'GET' })
  },
  getQuest: (idQuest) => {
    return dataProvider(`/quest/${idQuest}`, { method: 'GET' })
  },
  createQuest: (newQuest) => {
    return dataProvider('/quest', {
      method: 'POST',
      data: { newQuest: newQuest },
    })
  },
  updateQuest: (newQuest) => {
    return dataProvider('/quest/update', {
      method: 'POST',
      data: { newQuest: newQuest },
    })
  },
  addQuestion: (newQuestion) => {
    return dataProvider('/quest/question', {
      method: 'POST',
      data: { newQuestion: newQuestion },
    })
  },
  startGame: (idQuest) => {
    return dataProvider('/quest/start', { method: 'POST', data: { idQuest } })
  },
  deleteQuest: (idQuest) => {
    return dataProvider('/quest/delete', { method: 'POST', data: { idQuest } })
  },
}
