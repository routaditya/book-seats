import * as action from "./actions";

const initialState = {
  token: null
}

export default function loginReducer(state = initialState, { type, payload }) {
  switch (type) {
    case action.LOGIN:
      return {
        ...state,
        loading: true
      }
    case action.LOGIN_SUCCESS:
      return {
        ...state,
        loading: false,
        token: payload.result.data.token,
        user: payload.result.data.user
      }
    case action.LOGIN_FAIL:
      return {
        ...state,
        // error: payload.error, //TODO - ERROR HANDLING
        loading: false
      }
    default: return state
  }
}
