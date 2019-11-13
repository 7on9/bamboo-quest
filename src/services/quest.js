import { FETCH_TYPES } from './types'
import { FETCH, MAKE_FROM_BODY } from './fetch';

export const QuestService = {
  getAllQuests: () => {
    return FETCH(FETCH_TYPES.GET, "quest/", null);
  },
  getQuestInfo: (idQuest) => {
    return FETCH(FETCH_TYPES.GET, "quest/" + idQuest, null);
  },
  getQuest: (idQuest) => {
    return FETCH(FETCH_TYPES.GET, "quest/" + idQuest, null);
  },
  createQuest: (newQuest) => {
    let formBody = MAKE_FROM_BODY({
      newQuest: JSON.stringify(newQuest)
    });
    return FETCH(FETCH_TYPES.POST, "quest/", formBody);
  },
  addQuestion: (newQuestion) => {
    let formBody = MAKE_FROM_BODY({
      newQuestion: JSON.stringify(newQuestion)
    });
    return FETCH(FETCH_TYPES.POST, "quest/question", formBody);
  },
  startGame: (idQuest) => {
    let formBody = MAKE_FROM_BODY({
      idQuest: idQuest
    });
    return FETCH(FETCH_TYPES.POST, "quest/start", formBody);
  },
  deleteQuest: (idQuest) => {
    let formBody = MAKE_FROM_BODY({
      idQuest: idQuest
    });
    return FETCH(FETCH_TYPES.POST, "quest/delete", formBody);
  },
}
