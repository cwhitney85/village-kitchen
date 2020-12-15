import axios from 'axios'

export const loginStart = () => {
  return {
    type: 'LOGIN_START'
  }
}

export const loginSuccess = (user) => {
  return {
    type: 'LOGIN_SUCCESS',
    payload: user
  }
}

export const loginFail = (error) => {
  return {
    type: 'LOGIN_FAIL',
    payload: error
  }
}

export const logoutSuccess = () => {
  return {
    type: 'LOGOUT_SUCCESS'
  }
}

export const logout = () => {
  return (dispatch) => {
    dispatch(logoutSuccess())
    axios.get('http://localhost:8000/user/logout/')
  }
}

export const login = (email, password) => {
  return (dispatch) => {
    dispatch(loginStart())
    axios.post('http://localhost:8000/user/login', {
      email: email,
      password: password
    })
    .then(res => {
      console.log(res.data)
      const user = res.data.data
      dispatch(loginSuccess(user))
    })
    .catch(error => {
      const errMsg = error.message
      dispatch(loginFail(errMsg))
    })
  }
}

export const signup = (firstName, lastName, email, address, password) => {
  return (dispatch) => {
    dispatch(loginStart())
    axios.post('http://localhost:8000/user/register', {
      first_name: firstName,
      last_name: lastName,
      email: email,
      address: address,
      password: password
    })
    .then(res => {
      console.log(res.data)
      const user = res.data
      dispatch(loginSuccess(user))
    })
    .catch(error => {
      const errMsg = error.message
      dispatch(loginFail(errMsg))
    })
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
        const user = response.data
        dispatch(fetchUserSuccess(user))
      })
      .catch(error => {
        // error.message is the error description
        dispatch(fetchUserFailure(error.message))
      })
  }
}

