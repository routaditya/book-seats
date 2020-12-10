import { takeLatest, put, call } from 'redux-saga/effects';
import * as action from './actions';
import { bookSeats } from './api';

export function* bookSeatsDataWorker({ payload }) {
  try {
    const data = yield call(bookSeats, payload);
    yield put({
      type: action.BOOK_SEATS_SUCCESS,
      payload: {
        result: data,
      },
    });
  } catch (e) {
    yield put({ type: action.BOOK_SEATS_FAIL });
  }
}

export function* bookSeatsDataWatcher() {
  yield takeLatest(action.BOOK_SEATS, bookSeatsDataWorker);
}

export default {
  bookSeatsDataWatcher,
};
