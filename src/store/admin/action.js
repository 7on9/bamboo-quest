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
export const getQuestDashboard = () => {
  return async (dispatch) => {
    try {
      resetResult()
      let find = await AdminService.getQuests('find', undefined, undefined)
      find = find.data
      return dispatch({
        type: ADMIN_TYPE.GET,
        payload: { questDashboard: find },
      })
    } catch (error) {
      return dispatch({
        type: ADMIN_TYPE.GET,
        payload: {
          questDashboard: [],
        },
      })
    }
  }
}

export const createUser = (email, password, name, role) => {
  return async (dispatch) => {
    try {
      let res = await AdminService.createUser(email, password, name, role)
      dispatch({
        type: ADMIN_TYPE.CREATE_USER,
        payload: {
          createUser: {
            status: true,
            info: res.data,
          },
        },
      })
    } catch (error) {
      dispatch({
        type: ADMIN_TYPE.CREATE_USER,
        payload: {
          createUser: {
            status: false,
            info: {},
          },
        },
      })
    }
  }
}

export const getUserDashboard = () => {
  return async (dispatch) => {
    try {
      resetResult()
      let find = await AdminService.getUsers('find', undefined, undefined)
      find = find.data
      return dispatch({
        type: ADMIN_TYPE.GET,
        payload: { userDashboard: find },
      })
    } catch (error) {
      return dispatch({
        type: ADMIN_TYPE.GET,
        payload: {
          userDashboard: [],
        },
      })
    }
  }
}
export const getCount = (collection) => {
  return async (dispatch) => {
    try {
      let count = await AdminService.getCount(collection)
      var payloadInfo = {}
      switch (collection) {
        case 'user':
          payloadInfo = {
            type: ADMIN_TYPE.GET_COUNT_USER,
            payload: { countUser: count.data.count },
          }
          break
        case 'quest':
          payloadInfo = {
            type: ADMIN_TYPE.GET_COUNT_QUIZ,
            payload: { countQuiz: count.data.count },
          }
          break
        case 'game':
          payloadInfo = {
            type: ADMIN_TYPE.GET_COUNT_GAME,
            payload: { countGame: count.data.count },
          }
          break
        case 'category':
          payloadInfo = {
            type: ADMIN_TYPE.GET_COUNT_CATEGORY,
            payload: { countCategory: count.data.count },
          }
          break
        default:
          break
      }
      return dispatch(payloadInfo)
    } catch (error) {
      var payloadInfo = {}
      switch (collection) {
        case 'user':
          payloadInfo = {
            type: ADMIN_TYPE.GET_COUNT_USER,
            payload: { countUser: -2 },
          }
          break
        case 'quest':
          payloadInfo = {
            type: ADMIN_TYPE.GET_COUNT_QUIZ,
            payload: { countQuiz: -2 },
          }
          break
        case 'game':
          payloadInfo = {
            type: ADMIN_TYPE.GET_COUNT_GAME,
            payload: { countGame: -2 },
          }
          break
        case 'category':
          payloadInfo = {
            type: ADMIN_TYPE.GET_COUNT_CATEGORY,
            payload: { countCategory: -2 },
          }
          break
        default:
          break
      }
      return dispatch(payloadInfo)
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

export const changeStatusRunning = (running) => {
  return (dispatch) => {
    dispatch({
      type: EVENT.RUNNING,
      payload: {
        running,
      },
    })
  }
}

export const deleteUser = (id) => {
  return async (dispatch) => {
    try {
      await AdminService.deleteUser(id)
      return dispatch({
        type: ADMIN_TYPE.DELETE_USER,
        payload: { deleteUser: true },
      })
    } catch (error) {
      return dispatch({
        type: ADMIN_TYPE.DELETE_USER,
        payload: {
          deleteUser: false,
          running: false,
        },
      })
    }
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

export const getRole = () => {
  return async (dispatch) => {
    try {
      let roles = await AdminService.getRole()
      roles = roles.data
      return dispatch({
        type: ADMIN_TYPE.GET_ROLE,
        payload: { roles },
      })
    } catch (error) {
      return dispatch({
        type: ADMIN_TYPE.GET_ROLE,
        payload: {
          roles: [],
          running: false,
        },
      })
    }
  }
}
