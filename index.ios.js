var React = require('react-native');
var {AppRegistry, StyleSheet, Text, View} = React;
var login = require('.src/Components/Login');
var userReducer = require('.src/reducers/user');

import {createStore, combineReducers} from 'redux';
import {Provider} from 'react-redux/native';

let store = createStore(combineReducers({userReducers}));

class App extends React.Component{
  render(){
    return(
      <Login/>
    );
  }
}

class MyApp extends React.Component{
  render(){
    return(
      <Provider store={store}>
      {() => <App/>}
      </Provider>
    );
  }
}

AppRegistry.registerComponent('WetterWeather', () => WetterWeather);
