import React, { useState } from 'react'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'

export default function Login() {
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()
  return (
    <Form>
      <Form.Group controlId="email">
        <Form.Label>Email</Form.Label>
        <Form.Control type="email" name="email" value={email} onChange={e => setEmail(e.target.value)}/>
      </Form.Group>
      <Form.Group controlId="password">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" name="password" value={password} onChange={e => setPassword(e.target.value)}/>
      </Form.Group>
      <Button style={{backgroundColor: "salmon"}}>Submit</Button>
    </Form>
  )
}
