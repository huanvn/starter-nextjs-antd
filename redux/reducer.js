import {combineReducers} from 'redux'

import auth from './auth/reducer'
import layout from './layout/reducer'

export default function createReducer() {
  return combineReducers({
    layout,
    auth,
  })
}
