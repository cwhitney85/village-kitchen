import axios from 'axios'

export const increment = (num) => {
  return {
    type: 'INCREMENT',
    payload: num
  }
}

export const decrement = () => {
  return {
    type: 'DECREMENT'
  }
}

export const login = () => {
  return {
    type: 'SIGN_IN'
  }
}

export const fetchUserRequest = () => {
  return {
    type: 'FETCH_USER_REQUEST'
  }
}

export const fetchUserSuccess = (user) => {
  return {
    type: 'FETCH_USER_SUCCESS',
    payload: user
  }
}

export const fetchUserFailure = (error) => {
  return {
    type: 'FETCH_USER_FAILURE',
    payload: error
  }
}

export const fetchUser = () => {
  return (dispatch) => {
    dispatch(fetchUserRequest())
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then(response => {
        // response.data is an array of users
        
        dispatch(fetchUserSuccess(user))
      })
      .catch(error => {
        // error.message is the error description
        dispatch(fetchUserFailure(error.message))
      })
  }
}

// export const fetchPosts = () => dispatch => {
//   console.log('fetching')
//   fetch('https://jsonplaceholder.typicode.com/posts')
//   .then(res => res.json())
//   .then(posts => 
//     dispatch({
//       type: 'FETCH_POSTS',
//       payload: posts
//     })
//   )
// }