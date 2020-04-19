import { AdminService } from '../../services/admin'
import { EVENT, ADMIN_TYPE } from './types'


export const getAllQuests = (page) => {
  return async (dispatch) => {
    try {
      resetResult()
      page=(page-1) * 5
      let count = await AdminService.getQuests('count',page, 5)
      count = count.data.count
      let find = await AdminService.getQuests('find', page, 5)
      find = find.data
      return dispatch({
        type: ADMIN_TYPE.GET_QUEST,
        payload: { quest: find, count },
      })
    } catch (error) {
      return dispatch({
        type: ADMIN_TYPE.GET_QUEST,
        payload: {
          result: false,
          quest: [],
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

export const setPage = (page) => {
  return (dispatch) => {
    dispatch({
      type: ADMIN_TYPE.SET_PAGE,
      payload: {
        page
      },
    })
  }
}

export const setItem = (item) => {
  return (dispatch) => {
    dispatch({
      type: ADMIN_TYPE.ITEM,
      payload: {
        item
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
