import React, { useState } from 'react'
import axios from 'axios';
import { connect } from 'react-redux'
import { signup } from '../actions/index'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

function Register(props) {
  const [firstName, setFirstName] = useState()
  const [lastName, setLastName] = useState()
  const [email, setEmail] = useState()
  const [address, setAddress] = useState()
  const [password, setPassword] = useState()

  const signupSubmit = (e) => {
    e.preventDefault()
    props.signup(firstName, lastName, email, address, password)
    setFirstName()
    setLastName()
    setEmail()
    setAddress()
    setPassword()
  }

  return (
    <Form onSubmit={signupSubmit}>
      <Form.Group controlId="firstName">
        <Form.Label>First Name:</Form.Label>
        <Form.Control type="text" name="firstName" value={firstName} onChange={e => setFirstName(e.target.value)}/>
      </Form.Group>
      <Form.Group controlId="lastName">
        <Form.Label>Last Name:</Form.Label>
        <Form.Control type="text" name="lastName" value={lastName} onChange={e => setLastName(e.target.value)}/>
      </Form.Group>
      <Form.Group controlId="email">
        <Form.Label>Email</Form.Label>
        <Form.Control type="email" name="email" value={email} onChange={e => setEmail(e.target.value)}/>
      </Form.Group>
      <Form.Group controlId="address">
        <Form.Label>Address:</Form.Label>
        <Form.Control type="text" name="address" value={address} onChange={e => setAddress(e.target.value)}/>
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
    signup: (firstName, lastName, email, address, password) => dispatch(signup(firstName, lastName, email, address, password))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Register)