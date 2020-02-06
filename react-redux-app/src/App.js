import React from 'react';
import './App.css';

import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

import { cryptoReducer as reducer } from './reducers/cryptoReducer';

const store = createStore(reducer, applyMiddleware(thunk));

export default function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <header className="App-header"></header>
        <h2>Show me the MoNey $</h2>
      </div>
    </Provider>
  );
}
