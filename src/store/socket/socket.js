import io from 'socket.io-client'
import GAME_TYPES from './types'
import { SOCKET_URL } from '../../common/connection'
import { QuestService } from '../../services/quest'
import { APP_CONSTANTS } from '../../common/constants'

const socket = io(SOCKET_URL)

const GAME = GAME_TYPES.GAME
const STATUS = GAME_TYPES.STATUS

const configureSocket = dispatch => {
  socket.on('connect', () => {
    console.log('connected to server')
  })

  socket.on(GAME.START, (status, questions) => {
    if (status === STATUS.SUCCESS)
      return dispatch({
        type: GAME.START,
        payload: {
          result: true,
          running: false,
          questions,
        },
      })
  })

  socket.on(GAME.JOIN, (status, username, idGame) => {
    console.log(status, username, idGame)
    if (status) {
      return dispatch({
        type: GAME.JOIN,
        payload: {
          result: true,
          running: false,
          username,
          idGame,
        },
      })
    } else {
      return dispatch({
        type: GAME.JOIN,
        payload: {
          code: '',
          result: false,
          running: false,
        },
      })
    }
  })

  socket.on(GAME.NEW_PLAYER, player => {
    return dispatch({
      type: GAME.NEW_PLAYER,
      payload: {
        player: player.player,
        result: false,
        running: false,
      },
    })
  })

  socket.on(GAME.TIMEOUT, () => {
    return dispatch({
      type: GAME.BEGIN,
      payload: {
        timeout: true,
        newQuestion: false,
        result: true,
        running: false,
      },
    })
  })

  socket.on(GAME.NEW_QUESTION, idQuestion => {
    return dispatch({
      type: GAME.NEW_QUESTION,
      payload: {
        idQuestion,
        newQuestion: true,
        endGame: false,
        timeout: false,
        correct: 0,
        result: true,
        running: false,
      },
    })
  })

  socket.on(GAME.ANSWER, scoreBoard => {
    return dispatch({
      type: GAME.ANSWER,
      payload: {
        players: scoreBoard,
        result: true,
        running: false,
      },
    })
  })

  socket.on(GAME.CORRECT_ANSWER, res => {
    return dispatch({
      type: GAME.CORRECT_ANSWER,
      payload: {
        correct: res ? 1 : -1,
        result: false,
        running: false,
      },
    })
  })

  socket.on(GAME.END, () => {
    return dispatch({
      type: GAME.END,
      payload: {
        endGame: true,
      },
    })
  })

  return socket
}

export const joinGame = (code, username) => {
  socket.emit(
    GAME.JOIN,
    code,
    username,
    localStorage.getItem(APP_CONSTANTS.WEB_TOKEN)
  )
}

export const endGame = idGame => {
  socket.emit(GAME.END, idGame)
}

export const timeout = idGame => {
  socket.emit(GAME.TIMEOUT, idGame)
}

export const startGame = idQuest => {
  return dispatch => {
    QuestService.startGame(idQuest)
      .then(res => res.data)
      .then(res => {
        socket.emit(GAME.START, res.code, idQuest)
        return dispatch({
          type: GAME.START,
          payload: {
            code: res.code,
            result: true,
            running: false,
            idGame: res.idGame,
          },
        })
      })
      .catch(err => console.log(err))
  }
}

export const nextQuestion = (idGame, idQuestion) => {
  socket.emit(GAME.NEXT_QUESTION, idGame, idQuestion)
  return dispatch => {
    dispatch({
      type: GAME.NEXT_QUESTION,
      payload: {},
    })
  }
}

export const answer = (idGame, idQuestion, answer) => {
  socket.emit(GAME.ANSWER, idGame, idQuestion, answer)
}
// export const endGame = (idGame) => {
//   return dispatch => {
//       socket.emit(GAME.END, idGame);
//     }
// }

export const resetCorrect = () => {
  return {
    type: STATUS.CORRECT_ANSWER,
    payload: {
      correct: 0,
      result: false,
      running: false,
    },
  }
}
export const resetResult = () => {
  return {
    type: STATUS.RESET,
    payload: {
      result: false,
      running: false,
    },
  }
}

export default configureSocket
