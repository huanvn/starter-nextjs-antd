import {call, put, takeLatest} from 'redux-saga/effects'

import actions, {LOAD_TOKEN, LOGIN, LOGOUT,} from './actions'
import axios from 'axios'
import Cookies from "js-cookie";
import request from "../../services/_request";
import constants from "../../config/contants";
import {useRouter} from "next/router";


function* handleLoadToken() {

  try {
    // Load fake token
    const response = yield call(request.get, `/auth/login`)
    const token = 'fake-token'
    Cookies.set(constants.COOKIE_JWT, token)

    //yield put(actions.doLoginSuccess({data: {token}}))
    yield put(actions.doLoadTokenSuccess({data: {token}}))
  } catch (e) {
    yield put(actions.doLoadTokenFail())
  }
}


function* handleLogin(action) {
  const {username, password} = action.payload

  try {
    // Fake request
    const response = yield call(axios.post, `/auth/login`, {username, password}  )
    // And fake response
    if (username === 'admin@test.com' && password === 'testtest') {
      const token = 'fake-token'
      Cookies.set(constants.COOKIE_JWT, token)
      yield put(actions.doLoginSuccess({data: {token}}))
    }
  } catch (e) {
    console.log(e)
    yield put(actions.doLoginFail([{message: e.message}]))
  }

}

function* handleLogout() {
  Cookies.remove(constants.COOKIE_JWT)
  request.defaults.headers.common['Authorization'] = null
}

function* root() {
  yield takeLatest(LOAD_TOKEN, handleLoadToken)
  yield takeLatest(LOGIN, handleLogin)
  yield takeLatest(LOGOUT, handleLogout)
}

export default root
