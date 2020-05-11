import { combineReducers } from 'redux'
import { authReducer as user } from './auth/reducer'
import { questReducer as quest } from './quest/reducer'
import { gameReducer as game } from './socket/reducer'
import { adminReducer as admin } from './admin/reducer'
import { adminReducer as adminQuest } from './admin-quest/reducer'
import { categoryReducer as category } from './category/reducer'

const rootReducer = combineReducers({
  user,
  quest,
  game,
  admin,
  adminQuest,
  category,
})

export default (state, action) => {
  return rootReducer(state, action)
}
