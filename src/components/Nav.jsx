import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory, Link } from 'react-router-dom'
import { logout } from '../actions/index'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Button from 'react-bootstrap/Button'
import chef from '../chef.svg'

export default function Navigation() {
  const user = useSelector(state => state.isLogged.user)
  const dispatch = useDispatch()
  const history = useHistory()

  return (
    <Navbar onClick={()=> history.push('/')} className="top-nav brand">
      <Navbar.Brand style={{fontFamily: "cursive"}}>
        <img 
          src={chef}
          width="30"
          height="30"
          className="d-inline-block align-top"
          
        />{' '}
        Village Kitchen</Navbar.Brand>
      <Navbar.Collapse className="justify-content-end">
        <Nav className="flex-row test">
          {user
          ? <>
            <Navbar.Text className="userFirstName">Hi, {user.first_name}</Navbar.Text>
            <Nav.Link>Become a Cook!</Nav.Link>
            <Button onClick={() => dispatch(logout())} variant="outline-dark">Log Out</Button>
            </>
          : <>
            <Nav.Link href="/login">Log In</Nav.Link>
            <Nav.Link href="/register">Sign Up</Nav.Link>
            </>}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}
