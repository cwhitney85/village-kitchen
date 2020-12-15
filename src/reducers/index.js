import { combineReducers } from 'redux';
import counterReducer from './counter';
import loggedReducer from './isLogged';
import postReducer from './post';
import userReducer from './user';


const rootReducer = combineReducers({
  // counter: counterReducer,
  isLogged: loggedReducer,
  post: postReducer,
  currentUser: userReducer
})

export default rootReducer;