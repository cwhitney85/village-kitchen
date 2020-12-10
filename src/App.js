import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {increment, decrement} from './actions/index';
import Post from './components/Post';
import Postform from './components/Postform';

export default function App() {
  const counter = useSelector(state => state.counter);
  const islogged = useSelector(state => state.islogged)
  const dispatch = useDispatch();

  return (
    <div>
      <h1>Counter {counter}</h1>
      <button onClick={() => dispatch(increment(5))}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
      
      <Postform/>
      <hr/>
      <Post/>
    </div>
  )
}

