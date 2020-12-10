import * as action from "./actions";

const initialState = {
  normal3D: null,
  glass3D: null,
  bookingTokenID: null
}

export default function seatsReducer(state = initialState, { type, payload }) {
  switch (type) {
    case action.BOOK_SEATS:
      return {
        ...state,
      };
    case action.BOOK_SEATS_SUCCESS:
      return {
        ...state,
        normal3D: [],
        glass3D: [],
        bookingTokenID: payload.result.data.bookingTokenID,
      };
    case action.BOOK_SEATS_FAIL:
      return {
        ...state,
      };
    default:
      return state;
  }
}
