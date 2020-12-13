import React from 'react'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'

export default function Login() {
  return (
    <Form>
      <Form.Group controlId="email">
        <Form.Label>Email</Form.Label>
        <Form.Control type="email" />
      </Form.Group>
      <Form.Group controlId="password">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" />
      </Form.Group>
      <Button style={{backgroundColor: "salmon"}}>Submit</Button>
    </Form>
  )
}
