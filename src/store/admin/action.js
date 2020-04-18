import { AdminService } from '../../services/admin'
import { EVENT, ADMIN_TYPE } from './types'

export const getAllUsers = (skip) => {
  return async (dispatch) => {
    try {
      resetResult()
      // changeStatusRunning(false)
      let count = await AdminService.getUsers('count')
      count = count.data
      let find = await AdminService.getUsers('find', skip, 5)
      find = find.data
      return dispatch({
        type: ADMIN_TYPE.GET,
        payload: { page: { user: find, alluser: count } },
      })
    } catch (error) {
      return dispatch({
        type: ADMIN_TYPE.GET,
        payload: {
          result: false,
          page: null,
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
