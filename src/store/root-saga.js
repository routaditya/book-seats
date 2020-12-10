import { all, fork } from 'redux-saga/effects';
import { getLoginTokenDataWatcher } from '../views/Login/saga';
import { bookSeatsDataWatcher } from '../views/Booking/saga';

export function* rootSaga() {
  yield all([getLoginTokenDataWatcher, bookSeatsDataWatcher].map(fork));
}
