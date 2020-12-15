import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import ReactDOM from 'react-dom';
// import thunk from 'redux-thunk';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// Store - a globalized state with access from all components


// Action - a function that returns an object


// Reducer - a function used to update the store baeed on its corresponding action


// Dispatch -> Action -> Reducer -> Update Store 


ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
