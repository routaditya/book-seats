import { combineReducers } from 'redux';
import loginReducer from '../views/Login/reducer';
import seatsReducer from '../views/Booking/reducer';

const rootReducer = combineReducers({
  loginReducer,
  seatsReducer,
});

export default rootReducer;
