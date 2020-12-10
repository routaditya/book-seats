import { takeLatest, put, call } from "redux-saga/effects";
import * as action from "./actions";
import { getLoginToken } from "./api";

export function* getLoginTokenDataWorker({ payload }) {
  try {
    const data = yield call(getLoginToken, payload);
    yield put({
      type: action.LOGIN_SUCCESS,
      payload: {
        result: data
      }
    });
  } catch (e) {
    yield put({ type: action.LOGIN_FAIL });
  }
}

export function* getLoginTokenDataWatcher() {
  yield takeLatest(action.LOGIN, getLoginTokenDataWorker);
}

export default {
  getLoginTokenDataWatcher
};
