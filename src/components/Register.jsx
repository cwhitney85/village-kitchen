import React, { useState } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

export default function Register() {
  const [firstName, setFirstName] = useState()
  const [lastName, setLastName] = useState()
  const [email, setEmail] = useState()
  const [address, setAddress] = useState()
  const [password, setPassword] = useState()

  return (
    <Form>
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
      <Button style={{backgroundColor: "salmon"}}>Submit</Button>
    </Form>
  )
}
