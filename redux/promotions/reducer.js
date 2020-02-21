// Sample code

import {GET_ADS, GET_ADS_SUCCESS} from "./actions";

const initialState = {
  loading: false,
  response: {
    data: {},
    errors: []
  }
}

export default function reducer(state = initialState, action = {}) {

  switch (action.type) {
    case GET_ADS:
        return {
          ...state,
          loading: true
        }
    case GET_ADS_SUCCESS:
      return {
        ...state,
        loading: false,
        response: action.response
      }
    default:
      return state
  }
}
