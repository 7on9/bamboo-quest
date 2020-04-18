import { AdminService } from '../../services/admin'
import { EVENT, ADMIN_TYPE } from './types'

export const getAllUsers = (page) => {
  return async (dispatch) => {
    try {
      resetResult()
      // changeStatusRunning(false)
      let count = await AdminService.getUsers('count')
      count = count.data.count
      page=(page-1) * 5
      let find = await AdminService.getUsers('find', page, 5)
      find = find.data
      return dispatch({
        type: ADMIN_TYPE.GET,
        payload: { user: find, count },
      })
    } catch (error) {
      return dispatch({
        type: ADMIN_TYPE.GET,
        payload: {
          result: false,
          user: [],
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
