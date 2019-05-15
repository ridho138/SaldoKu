import React, { Component } from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import { connect } from 'react-redux'
import { fetchLogout } from '../actions/index'

class Home extends Component {
  render() {
    const { id } =  this.props.nextProps.loginResult
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
          <Text>HOME</Text>
        </View>
        <View style={{ flex: 1, justifyContent: "flex-end", alignItems: "center", paddingBottom: 15 }}>
          <TouchableOpacity
            onPress={ () => this.props.dispatch(fetchLogout(id))}
            style={styles.buttonContainer}
          >
            <Text style={styles.buttonText}>LOGOUT</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}


const mapStateToProps = state => {
  return {
    loginResult: state.dataLogin.data
  }
}

const styles = StyleSheet.create({
  
  buttonContainer: {
    backgroundColor: "#000",
    borderRadius: 30,
    paddingVertical: 8,
    width: 150,
    elevation: 5
  },
  buttonText: {
    color: "#fff",
    textAlign: "center",
    fontWeight: "700"
  }
});

export default connect(mapStateToProps) (Home);
