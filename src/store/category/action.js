import { CategoryService } from '../../services/category'
import { EVENT, CATEGORY_TYPE } from './types'

export const getCategory = () => {
  return async (dispatch) => {
    try {
      let categories = await CategoryService.getCategories()
      return dispatch({
        type: CATEGORY_TYPE.GET,
        payload: { categories: categories.data},
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
