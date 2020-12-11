import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'

export default function Navigation() {
  return (
    <Navbar bg="primary" >
      <Navbar.Brand href="/">Village Kitchen</Navbar.Brand>
      <Navbar.Collapse className="justify-content-end">
        <Nav className="flex-row">
          <Nav.Link href="/login">Log In</Nav.Link>
          <Nav.Link href="/register">Sign Up</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}
