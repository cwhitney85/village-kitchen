import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link, Redirect } from 'react-router-dom';
// import { Container, Button } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container'
import { useSelector, useDispatch } from 'react-redux';
import {increment, decrement} from './actions/index';
import Home from './components/Home';


export default function App() {
  const counter = useSelector(state => state.counter);
  const islogged = useSelector(state => state.islogged)
  const dispatch = useDispatch();

  return (
    <Router>
      <Container>
        <h1>Village Kitchen</h1>
        <Button variant="primary">Primary</Button>{' '}
        <Switch>
          <Route path="/" exact component={Home}/>
        </Switch>
      </Container>
    </Router>
  )
}

