import React from 'react'
import { Button } from 'react-bootstrap'
import Form from 'react-bootstrap/Form'

export default function Login() {
  return (
    <Form>
      <Form.Group controlId="username">
        <Form.Label>Username</Form.Label>
        <Form.Control type="text" />
      </Form.Group>
      <Form.Group controlId="password">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" />
      </Form.Group>
      <Button>Submit</Button>
    </Form>
  )
}
