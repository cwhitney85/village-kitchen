const initialState = {
  loading: false,
  loggedIn: false,
  user: null,
  error: ''
}

const loggedReducer = (state = initialState, action) => {
  switch(action.type) {
    case 'LOGIN_START':
      return {
        ...state,
        loading: true
      }
    case 'LOGIN_SUCCESS':
      return {
        loading: false,
        loggedIn: true,
        user: action.payload,
        error: ''
      }
    case 'LOGIN_FAIL':
      return {
        loading: false,
        loggedIn: false,
        user: null,
        error: action.payload
      }
    case 'LOGOUT_SUCCESS':
      return {
        loading: false,
        loggedIn: false,
        user: null,
        error: ''
      }
    default:
      return state;
  }
}

export default loggedReducer;