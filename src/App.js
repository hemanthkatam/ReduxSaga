import React from 'react';
import Tabs from "./components/Tabs";
import { createStore,applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { inutReducer } from './reducers/inputReducer';
import createSagaMiddleware from 'redux-saga'
import mySaga from './sagas/Mysaga'
import './App.css';

const sagamiddleWare = createSagaMiddleware();
const store = createStore(inutReducer,applyMiddleware(sagamiddleWare));


function App() {
  return (
    <Provider store={store}>
        <Tabs />
    </Provider>

  );
}

export default App;

// eslint-disable-next-line no-unused-expressions
sagamiddleWare.run(mySaga)
