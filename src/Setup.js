/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from "react";
import { createStackNavigator } from "react-navigation";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Home from "./components/Home";

const Router = createStackNavigator({
  Login: {
    screen: Login
  },
  Signup: {
    screen: Signup
  },
  Home: {
    screen: Home
  }
},{
  headerMode:"none"
});

class Setup extends Component {
  render() {
    return <Router />;
  }
}

export default Setup;
