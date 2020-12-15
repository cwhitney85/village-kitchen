import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link, Redirect } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import { useSelector, useDispatch } from 'react-redux';
import { login } from './actions/index';
import Home from './components/Home';
import Navigation from './components/Nav';
import Login from './components/Login';
import Register from './components/Register';
import NewCook from './components/NewCook';



export default function App() {
  const islogged = useSelector(state => state.islogged)
  const dispatch = useDispatch();

  return (
    <Router>
      <Navigation/>
      <Container>
        <Switch>
          {/* <Route exact path="/">
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
          </Route> */}
          <Route path="/" exact component={Home}/>
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register}/>
          <Route path="/newcook" component={NewCook}/>
        </Switch>
      </Container>
    </Router>
  )
}

