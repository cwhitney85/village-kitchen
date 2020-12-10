import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {increment, decrement} from './actions/index';

export default function App() {
  const counter = useSelector(state => state.counter);
  const islogged = useSelector(state => state.islogged)
  const dispatch = useDispatch();

  return (
    <div>
      <h1>Counter {counter}</h1>
      <button onClick={() => dispatch(increment(5))}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
      {islogged ? <h3>Classified</h3> : ''}
    </div>
  )
}

