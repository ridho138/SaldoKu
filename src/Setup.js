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

class Setup extends Component {
  render() {
    return (
      <Signup />
    );
  }
}

export default Setup