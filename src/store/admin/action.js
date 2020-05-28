import { AdminService } from '../../services/admin'
import { EVENT, ADMIN_TYPE } from './types'

export const getAllUsers = (page) => {
  return async (dispatch) => {
    try {
      resetResult()
      page = (page - 1) * 5
      let count = await AdminService.getUsers('count', page, 5)
      count = count.data.count
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
        page,
      },
    })
  }
}

export const setItem = (item) => {
  return (dispatch) => {
    dispatch({
      type: ADMIN_TYPE.ITEM,
      payload: {
        item,
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
export const createCollection = (newCategory) => {
  return async (dispatch) => {
    try {
      let myCollection = await AdminService.createCollection(newCategory)
      myCollection = myCollection.data
      return dispatch({
        type: ADMIN_TYPE.CREATECOLLECTION,
        payload: { result: true, myCollection },
      })
    } catch (error) {
      return dispatch({
        type: ADMIN_TYPE.CREATECOLLECTION,
        payload: {
          result: false,
          running: false,
        },
      })
    }
  }
}
export const getAllCollection = () => {
  return async (dispatch) => {
    try {
      let allCollection = await AdminService.getAllCollections()
      allCollection = allCollection.data
      return dispatch({
        type: ADMIN_TYPE.GETCOLLECTION,
        payload: { allCollection },
      })
    } catch (error) {
      return dispatch({
        type: ADMIN_TYPE.GETCOLLECTION,
        payload: {
          result: false,
          running: false,
        },
      })
    }
  }
}
