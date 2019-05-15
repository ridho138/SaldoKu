import React, { Component } from "react";
import { Text, View } from "react-native";
import { connect } from 'react-redux'
import { fetchLogout } from '../actions/index'

class Home extends Component {
  render() {
    const { id } =  this.props.nextProps.loginResult
    return (
      <View>
        
        {/* Logout onPress={ () => this.props.dispatch(fetchLogout(id))} */}
      </View>
    );
  }
}

const mapStateToProps = state => {
  return {
    loginResult: state.dataLogin.data
  }
}

export default connect(mapStateToProps) (Home);
