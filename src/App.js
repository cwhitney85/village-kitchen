import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link, Redirect } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import { useSelector, useDispatch } from 'react-redux';
import {increment, decrement} from './actions/index';
import Home from './components/Home';
import Navigation from './components/Nav';


export default function App() {
  const counter = useSelector(state => state.counter);
  const islogged = useSelector(state => state.islogged)
  const dispatch = useDispatch();

  return (
    <Router>
      <Navigation/>
      <Container>
        <Switch>
          <Route path="/" exact component={Home}/>
        </Switch>
      </Container>
    </Router>
  )
}

