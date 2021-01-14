import React, {useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route, Link, Redirect } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import { useSelector, useDispatch } from 'react-redux';
import { login, getCook } from './actions/index';
import Home from './components/Home';
import Navigation from './components/Nav';
import Login from './components/Login';
import Register from './components/Register';
import NewCook from './components/NewCook';
import Meal from './components/Meal';
import Cook from './components/Cook';
import NewMeal from './components/NewMeal'


export default function App() {
  

  return (
    <Router>
      <Navigation/>
      <Container>
        <Switch>
          <Route path="/" exact>
            <Home/>
          </Route>
          <Route path="/login">
            <Login/>
          </Route>
          <Route path="/register">
            <Register/>
          </Route>
          <Route path="/newcook">
            <NewCook/>
          </Route>
          <Route path="/newmeal">
            <NewMeal/>
          </Route>
          <Route path="/meals/:id">
            <Meal/>
          </Route>
          <Route path="/cook/:cookId">
            <Cook/>
          </Route>
        </Switch>
      </Container>
    </Router>
  )
}

