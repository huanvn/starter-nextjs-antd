import {
  LOAD_TOKEN,
  LOAD_TOKEN_FAIL,
  LOAD_TOKEN_SUCCESS,
  LOGIN,
  LOGIN_FAIL,
  LOGIN_SUCCESS,
  LOGOUT_SUCCESS
} from "./actions";

const initialState = {
  initialized: false,
  loading: false,
  authenticated: false,
  user: null,
  errors: null,
  token: null
}

export default function reducer(state = initialState, action = {}) {
  const {payload} = action
  switch (action.type) {
    case LOAD_TOKEN:
      return {
        ...state,
        initialized: true,
        loading: true,
        authenticated: false,
      }
    case LOAD_TOKEN_SUCCESS:
      return {
        ...state,
        initialized: true,
        loading: false,
        authenticated: true,
        token: data.token
      }
    case LOAD_TOKEN_FAIL:
      return {
        ...state,
        initialized: true,
        loading: false,
        authenticated: false,
        token: null,
      }
    case LOGIN:
      return {
        ...state,
        initialized: true,
        loading: true,
        token: null,
        user: null,
        authenticated: false
      }
    case LOGIN_SUCCESS: {
      const {
      } = action
      return {
        ...state,
        loading: false,
        token: payload.token,
        user: payload.user,
        authenticated: true
      }
    }
    case LOGIN_FAIL:
      return {
        ...state,
        loading: false,
        token: null,
        user: null,
        authenticated: false,
        error: error
      }
    case LOGOUT_SUCCESS:
      return {
        ...state,
        loading: false,
        authenticated: false,
        token: null,
        user: null,
      }

    default:
      return state
  }
}
