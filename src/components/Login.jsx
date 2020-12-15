import React, { useState } from 'react'
import axios from 'axios';
import { useHistory } from 'react-router-dom'
import { useSelector, useDispatch, connect } from 'react-redux'
import { login } from '../actions/index'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'

function Login(props) {
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()
  const history = useHistory()
  

  const loginSubmit = (e) => {
    e.preventDefault()
    props.login(email, password)
    setEmail()
    setPassword()
    history.push('/')
  }



  return (
    <Form onSubmit={loginSubmit}>
      <Form.Group controlId="email">
        <Form.Label>Email</Form.Label>
        <Form.Control type="email" name="email" value={email} onChange={e => setEmail(e.target.value)}/>
      </Form.Group>
      <Form.Group controlId="password">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" name="password" value={password} onChange={e => setPassword(e.target.value)}/>
      </Form.Group>
      <Button type="submit" style={{backgroundColor: "salmon"}}>Submit</Button>
    </Form>
  )
}

const mapStateToProps = (state) => {
  return {
    authenticated: state.isLogged.user !== null,
    loading: state.isLogged.loading,
    error: state.isLogged.error
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    login: (email, password) => dispatch(login(email, password))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)
