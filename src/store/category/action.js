import { CategoryService } from '../../services/category'
import { EVENT, CATEGORY_TYPE } from './types'

export const getCategory = () => {
  return async (dispatch) => {
    try {
      let categories = await CategoryService.getCategories()
      return dispatch({
        type: CATEGORY_TYPE.GET,
        payload: { categories: categories.data },
      })
    } catch (error) {
      return dispatch({
        type: CATEGORY_TYPE.GET,
        payload: {
          category: null,
        },
      })
    }
  }
}

export const updateCategory = (data) => {
  return async (dispatch) => {
    try {
      await CategoryService.update(data)
      return dispatch({
        type: CATEGORY_TYPE.UPDATE,
        payload: { update: true },
      })
    } catch (error) {
      return dispatch({
        type: CATEGORY_TYPE.UPDATE,
        payload: {
          update: false,
        },
      })
    }
  }
}

export const getCategoryCount = (id) => {
  return async (dispatch) => {
    try {
      await CategoryService.deleteCategory(id)
      return dispatch({
        type: CATEGORY_TYPE.DELETE,
        payload: {},
      })
    } catch (error) {
      return dispatch({
        type: CATEGORY_TYPE.DELETE,
        payload: {},
      })
    }
  }
}

export const setItemSelected = (id) => {
  return async (dispatch) => {
    return dispatch({
      type: CATEGORY_TYPE.ITEM_SELECTED,
      payload: {
        itemSeleted: id,
      },
    })
  }
}

export const deleteCategory = (id) => {
  return async (dispatch) => {
    try {
      await CategoryService.deleteCategory(id)
      return dispatch({
        type: CATEGORY_TYPE.DELETE,
        payload: {},
      })
    } catch (error) {
      return dispatch({
        type: CATEGORY_TYPE.DELETE,
        payload: {},
      })
    }
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
