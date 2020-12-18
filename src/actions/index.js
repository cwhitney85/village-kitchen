import axios from 'axios'

export const getCookRequest = () => {
  return {
    type: 'GET_COOK_REQUEST'
  }
}

export const getCookSuccess = (cook) => {
  return {
    type: 'GET_COOK_SUCCESS',
    payload: cook
  }
}

export const getCookFail = (error) => {
  return {
    type: 'GET_COOK_FAIL',
    payload: error
  }
}

export const removeCook = () => {
  return {
    type: 'REMOVE_COOK'
  }
}

export const newCook = (userName, specialty, avatar, banner) => {
  return (dispatch) => {
    dispatch(getCookRequest())
    axios.post(process.env.REACT_APP_API_URL + '/api/v1/cooks/', {
      username: userName,
      specialty: specialty,
      avatar: avatar,
      banner: banner
    }, {withCredentials: true})
    .then(res => {
      console.log(res.data)
      const cook = res.data
      dispatch(getCookSuccess(cook))
    })
    .catch(error => {
      const errMsg = error.message
      dispatch(getCookFail(errMsg))
    })
  }
}

export const getCook = (id) => {
  return (dispatch) => {
    dispatch(getCookRequest)
    axios.get(process.env.REACT_APP_API_URL + '/api/v1/cooks' + id, {withCredentials: true})
    .then(res => {
      const cook = res.data
      console.log(cook)
      dispatch(getCookSuccess(cook))
    })
    .catch(error => {
      const errMsg = error.message
      dispatch(getCookFail(errMsg))
    })
  }
}

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
    dispatch(removeCook())
    axios.get(process.env.REACT_APP_API_URL + '/user/logout', {withCredentials: true})
  }
}

export const login = (email, password) => {
  return (dispatch) => {
    dispatch(loginStart())
    axios.post(process.env.REACT_APP_API_URL + '/user/login', {
      email: email,
      password: password
    }, {withCredentials: true})
    .then(res => {
      console.log(res.data)
      const user = res.data.data
      dispatch(loginSuccess(user))
      dispatch(getCookRequest())
      axios.get(process.env.REACT_APP_API_URL + '/api/v1/cooks/' + user.id, {withCredentials: true})
        .then(res => {
          console.log(res.data)
          const cook = res.data.data
          dispatch(getCookSuccess(cook))
        }).catch(error => {
          const errMsg = error.message
          dispatch(getCookFail(errMsg))
        })
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
    axios.post(process.env.REACT_APP_API_URL + '/user/register', {
      first_name: firstName,
      last_name: lastName,
      email: email,
      address: address,
      password: password
    }, {withCredentials: true})
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

