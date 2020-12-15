import React from 'react'
import { useDispatch } from 'react-redux'
import { logout } from '../actions/index'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Button from 'react-bootstrap/Button'
import chef from '../chef.svg'

export default function Navigation() {
  const dispatch = useDispatch()

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
          <Button onClick={() => dispatch(logout())} variant="outline-dark">Log Out</Button>
          <Nav.Link href="/login">Log In</Nav.Link>
          <Nav.Link href="/register">Sign Up</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}
