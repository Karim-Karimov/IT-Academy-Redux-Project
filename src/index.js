import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { combineReducers, createStore } from 'redux';

import App from './App';
import { addToListReducer } from './redux/reducers/list.reduce';
import { getDataReducer } from './redux/reducers/reducer';

const reducers = combineReducers({
  movies: getDataReducer,
  list: addToListReducer
})

const GlobalStore = createStore(
  reducers
)

ReactDOM.render(
  <Provider store={GlobalStore}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);
