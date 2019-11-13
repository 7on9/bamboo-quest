const GAME_TYPES = {
  GAME: {
    JOIN: "joinRoom",
    NEW_PLAYER: "newPlayer",
    START: "startGame",
    BEGIN: "beginGame",
    NEW_QUESTION: "newQuestion",
    NEXT_QUESTION: "nextQuestion",
    END: "endGame",
    LEAVE: "leaveRoom",
    KICK: "kickPlayer",
    ANSWER: "answerQuest",
    SCOREBOARD: "scoreBoard",
    TIMEOUT: "questTimeOut",
    CORRECT_ANSWER: "questCorrectAnswer"
  },
  STATUS: {
    RESET: 'GAME/RESET_STATUS',
    SUCCESS: 'GAME/SUCCESS',
    FAIL: 'GAME/FAIL'
  },
  ERROR: {
    WRONG_CODE: "wrongCode",
    DUPLICATE: "duplicate",
    NOT_EXIST: "notExist",
    UNAUTHORIZED: "UnAuthorized"
  }
}
export default GAME_TYPES;