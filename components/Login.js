var react = require('react-native');

import React, {
  Component,
} from 'react';

import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableHighlight
} from 'react-native';

import {
  bindActionCreators
} from 'redux';

import {
  connect
} from 'react-redux/native';

import * as Actions from '../actions';

function mapStateToProps(state){return{user: state.userReducers.user};}
function mapDispatchToProps(dispatch){return bindActionCreators(Actions, dispatch);}

var {View, TouchableHighlight, Text} = React;

var login = React.createClass({

  onLoginButtonPress(){
    this.props.login({
      user: 'testuser',
      password: 'hej123'
    });
  }

  render(){
    return(
      <View>
      {
        !this.user.loggedIn &&
          <TouchableHighlight onPress={this.onLoginButtonPress}>
            <Text>Log in</Text>
          </TouchableHighlight>
      }
      </View>
    );
  },

});

export default connect(mapStateToProps, mapDispatchToProps)(login);

AppRegistry.registerComponent('WetterWeather', () => WetterWeather);
