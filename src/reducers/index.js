import counterReducer from './counter';
import loggedReducer from './isLogged';
import postReducer from './post';
import { combineReducers } from 'redux';

const allReducers = combineReducers({
  counter: counterReducer,
  isLogged: loggedReducer,
  post: postReducer
})

export default allReducers;