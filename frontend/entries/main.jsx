import React, { Component } from 'react'
import { createStore, combineReducers, applyMiddleware } from 'redux'
import ReactDOM from 'react-dom'
import { Router, Route, browserHistory, Link, IndexRoute } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import _ from 'lodash'
import 'babel-polyfill'

import MainContainer from '../containers/MainContainer';
import configureStore from '../stores/configureMainStore';

const store = configureStore()
const history = syncHistoryWithStore(browserHistory, store)

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Route path="*" component={MainContainer}/>
    </Router>
  </Provider>,
  document.getElementById('content')
);
