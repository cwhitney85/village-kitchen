const initialState = {
  items: [{title: 'test', body: 'test'}],
  item: {}
}

const postReducer = (state = initialState, action) => {
  switch(action.type) {
    case 'FETCH_POSTS':
      return {
        ...state,
        items: action.payload
      }
    default:
      return state
  }
}

export default postReducer