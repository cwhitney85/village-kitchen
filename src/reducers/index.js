import counterReducer from './counter';
import loggedReducer from './isLogged';
import postReducer from './post';
import userReducer from './user';
import { combineReducers } from 'redux';

const allReducers = combineReducers({
  counter: counterReducer,
  isLogged: loggedReducer,
  post: postReducer,
  currentUser: userReducer
})

export default allReducers;