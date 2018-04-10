/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from "react";
import { StyleSheet, ActivityIndicator, Text, View } from "react-native";
import { connect } from "react-redux";
import { fetchData } from "./actions";
import Login from './screens/login'

class Setup extends Component {
  render() {
    return <Login />
  }
}

export default connect()(Setup);
