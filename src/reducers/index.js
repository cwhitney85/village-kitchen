import { combineReducers } from 'redux';
import loggedReducer from './isLogged';
import userReducer from './user';


const rootReducer = combineReducers({
  isLogged: loggedReducer,
  currentUser: userReducer
})

export default rootReducer;