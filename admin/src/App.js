import React, { Component } from 'react';
import './App.css';
import {Provider} from 'react-redux';
import store from './store/index.js';
import Router from './router';
class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className = "App" >
          <Router/>
          </div>
      </Provider>
    );
  }
}

export default App;
