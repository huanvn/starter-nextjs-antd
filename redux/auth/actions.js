/**
 * Actions for auth module
 *
 */

export const LOAD_TOKEN = 'layouts/LOAD_TOKEN'
export const LOAD_TOKEN_SUCCESS = 'layouts/LOAD_TOKEN_SUCCESS'
export const LOAD_TOKEN_FAIL = 'layouts/LOAD_TOKEN_FAIL'

export const LOGIN = 'auth/LOGIN'
export const LOGIN_SUCCESS = 'auth/LOGIN_SUCCESS'
export const LOGIN_FAIL = 'auth/LOGIN_FAIL'

export const LOGOUT = 'auth/LOGOUT'
export const LOGOUT_SUCCESS = 'auth/LOGOUT_SUCCESS'

export default {
  doLoadToken() {
    return {
      type: LOAD_TOKEN
    }
  },
  doLoadTokenSuccess(response) {
    const {data: {token}} = response
    return {
      type: LOAD_TOKEN_SUCCESS,
      payload: {
        token
      }
    }
  },
  doLoadTokenFail(errors) {
    return {
      type: LOAD_TOKEN_FAIL,
      payload: {
        errors
      }
    }
  },
  doLogin(username, password) {
    return {
      type: LOGIN,
      payload: {
        username,
        password
      }
    }
  },
  doLoginSuccess(response) {
    const {data: {token, user}} = response
    return {
      type: LOGIN_SUCCESS,
      payload: {
        token,
        user
      }
    }
  },
  doLoginFail(errors) {
    return {
      type: LOGIN_FAIL,
      payload: {
        errors
      }
    }
  },
  doLogout() {
    return {
      type: LOGOUT
    }
  },
  doLogoutSuccess() {
    return {
      type: LOGOUT_SUCCESS
    }

  }
}


