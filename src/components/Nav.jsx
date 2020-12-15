import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Button from 'react-bootstrap/Button'
import chef from '../chef.svg'

export default function Navigation() {
  return (
    <Navbar className="top-nav">
      <Navbar.Brand href="/" style={{fontFamily: "cursive"}}>
        <img 
          src={chef}
          width="30"
          height="30"
          className="d-inline-block align-top"
          
        />{' '}
        Village Kitchen</Navbar.Brand>
      <Navbar.Collapse className="justify-content-end">
        <Nav className="flex-row">
          <Button type="submit" variant="outline-dark">Log Out</Button>
          <Nav.Link href="/login">Log In</Nav.Link>
          <Nav.Link href="/register">Sign Up</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}
