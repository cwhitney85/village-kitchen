const initialState = {
  loading: false,
  cook: null,
  error: ''
}

const cookReducer = (state = initialState, action) => {
  switch(action.type) {
    case 'GET_COOK_REQUEST':
      return {
        ...state,
        loading: true
      }
    case 'GET_COOK_SUCCESS':
      return {
        loading: false,
        cook: action.payload,
        error: ''
      }
    case 'GET_COOK_FAIL':
      return {
        loading: false,
        cook: null,
        error: action.payload
      }
    default:
      return state
  }
}

export default cookReducer