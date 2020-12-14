import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link, Redirect } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import { useSelector, useDispatch } from 'react-redux';
import {increment, decrement, login} from './actions/index';
import Home from './components/Home';
import Navigation from './components/Nav';
import Login from './components/Login';
import Register from './components/Register';
import Counter from './components/Counter';



export default function App() {
  const counter = useSelector(state => state.counter);
  const islogged = useSelector(state => state.islogged)
  const dispatch = useDispatch();

  // const loginSubmit = (e) => {
  //   e.preventDefault()
  //   dispatch(login())
  // }

  return (
    <Router>
      <Navigation/>
      <Container>
        <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register}/>
          <Route path="/counter" component={Counter}/>
        </Switch>
      </Container>
    </Router>
  )
}

