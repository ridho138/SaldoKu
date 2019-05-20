import React, { Component } from "react";
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  TextInput
} from "react-native";
import { connect } from "react-redux";

class IncomeAdd extends Component {
  constructor(props) {
    super(props);
    
  }

  
  render() {
    const { id } = this.props.loginResult;
    console.log(this.props.loginResult);
    return (
      <View style={styles.container}>
        <View style={styles.flatListContainer}>
        <TextInput
            style={styles.input}
            placeholder="LABEL"
            // onChangeText={value => this.setState({ email: value })}
            // value={this.state.email}
          />
          <TextInput
            style={styles.input}
            placeholder="AMOUNT"
            onChangeText={value => this.setState({ password: value })}
            // value={this.state.password}
          />
          <TextInput
            style={styles.input}
            placeholder="ORGANIZATION"
            // onChangeText={value => this.setState({ password: value })}
            // value={this.state.password}
          />
          <TouchableOpacity style={styles.buttonContainer}>
            <Text style={styles.buttonText}>SAVE</Text>
          </TouchableOpacity>
        </View>
        
      </View>
    );
  }
}

const mapStateToProps = state => {
  return {
    loginResult: state.dataLogin.data
  };
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ccc"
  },
  flatListContainer: {
    flex: 5,
    justifyContent:"flex-start",
    alignItems:"center"
  },
  listContainer: {
    padding: 20
  },
  textLabel: {
    fontSize: 20,
    color: "#000"
  },
  textAmount: {
    fontSize: 25,
    color: "#000",
    fontWeight: "bold"
  },
  textOrganization: {
    fontSize: 15,
    color: "#000"
  },
  footerContainer: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems:"center",
    padding: 20
  },
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
  },
  input: {
    height: 60,
    width: Dimensions.get("window").width - 50
  },
});

export default connect(mapStateToProps)(IncomeAdd);
