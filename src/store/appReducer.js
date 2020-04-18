import { combineReducers } from 'redux'
import { authReducer as user } from './auth/reducer'
import { questReducer as quest } from './quest/reducer'
import { gameReducer as game } from './socket/reducer'
import { adminReducer as admin } from './admin/reducer'

const rootReducer = combineReducers({
  user,
  quest,
  game,
  admin,
})

export default (state, action) => {
  return rootReducer(state, action)
}
