import { combineReducers } from 'redux';
import loggedReducer from './isLogged';
import cookReducer from './cook';


const rootReducer = combineReducers({
  isLogged: loggedReducer,
  currentCook: cookReducer
})

export default rootReducer;