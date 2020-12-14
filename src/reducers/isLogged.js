const initialState = {
  loggedIn: false
}

const loggedReducer = (state = initialState, action) => {
  switch(action.type) {
    case 'SIGN_IN':
      return {
        ...state,
        loggedIn: !state.loggedIn
      }
    default:
      return state;
  }
}

export default loggedReducer;