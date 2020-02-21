import {all} from 'redux-saga/effects'

import Auth from './auth/saga'
import Layout from './layout/saga'
// Config HTTP requests

export default function* createSagaEffects() {
  yield all([
    Auth(),
    Layout(),
  ])
}
