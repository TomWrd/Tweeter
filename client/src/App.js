import React from 'react';
import logo from './logo.svg';
import './App.css';
import twittercardReducer from './store/reducers/twittercard';
import ReduxThunk from 'redux-thunk';
import {createStore , combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import Main from './screens/Main/Main';

const rootReducer = combineReducers({twittercard: twittercardReducer});
const store = createStore(rootReducer, applyMiddleware(ReduxThunk));

function App() {
  return (
    <Provider store={store}>
      <div className="App">
      <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
        <Main />
      </div>
    </Provider>
  );
}

export default App;
