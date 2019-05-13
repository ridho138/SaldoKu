/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react'
import {
  StyleSheet,
  ActivityIndicator,
  Text,
  View
} from 'react-native'
import Login from "./components/Login"
import Signup from "./components/Signup"
import Home from './components/Home'
import { createStackNavigator } from 'react-navigation'

class Setup extends Component {
  render() {
    return <RootNavigation />
  }
}

const RootNavigation = createStackNavigator({
  LoginPage: {
    screen: Login
  }, 
  SignupPage: {
    screen: Signup
  },
  HomePage: {
    screen: Home
  }
})


export default Setup