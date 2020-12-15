import React from 'react'
import {LinkContainer} from 'react-router-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
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
    <Navbar className="top-nav brand">
      <LinkContainer to="/" style={{fontFamily: "cursive"}}>
        <Navbar.Brand >
          <img 
            src={chef}
            width="30"
            height="30"
            className="d-inline-block align-top"
            alt="village kitchen logo"
          />{' '}
          Village Kitchen
        </Navbar.Brand>
      </LinkContainer>
      <Navbar.Collapse className="justify-content-end">
        <Nav className="flex-row test">
          {user
          ? <>
            <Navbar.Text className="userFirstName">Hi, {user.first_name}</Navbar.Text>
            <LinkContainer to="/newcook">
              <Nav.Link>Become a Cook!</Nav.Link>
            </LinkContainer>
            <Button onClick={() => dispatch(logout())} variant="outline-dark">Log Out</Button>
            </>
          : <>
            <LinkContainer to="/login">
              <Nav.Link>Login</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/register">
              <Nav.Link>Sign Up</Nav.Link>
            </LinkContainer>
            </>}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}
