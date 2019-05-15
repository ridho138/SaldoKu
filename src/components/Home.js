import React, { Component } from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";

class Home extends Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
          <Text>HOME</Text>
        </View>
        <View style={{ flex: 1, justifyContent: "flex-end", alignItems: "center", paddingBottom: 15 }}>
          <TouchableOpacity
            onPress={() => this.loginHandler()}
            style={styles.buttonContainer}
          >
            <Text style={styles.buttonText}>LOGOUT</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
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


export default Home;
