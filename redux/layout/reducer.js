import {SHOW_ERRORS} from "./actions";

const initialState = {
  errors: []
}

export default function reducer(state = initialState, action = {}) {

  if (action.type === SHOW_ERRORS) {
    return {
      ...state,
      errors: action.errors
    }
  } else {
    return state
  }
}
