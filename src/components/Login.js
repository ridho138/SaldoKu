import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Dimensions,
  Alert
} from "react-native";
import { connect } from 'react-redux'
import { fetchLogin } from '../actions/index'

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };
  }

  loginHandler = () => {
    const { email, password } = this.state;

    if (email === "" && password === "") {
      Alert.alert("Warning", "Email and/or Password cannot be empty!");
    } else {
      this.props.dispatch(fetchLogin(email, password))
    }
  }

  componentWillReceiveProps(nextProps){
    const { loginResult } = nextProps
    console.log(nextProps)
    if (!loginResult.isLoading && loginResult.id) {
      this.props.navigation.navigate('HomePage')
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.logoContainer}>
          <Text style={styles.logoText}>SaldoKu</Text>
        </View>
        <View style={styles.formContainer}>
          <TextInput
            style={styles.input}
            placeholder="EMAIL"
            onChangeText={value => this.setState({ email: value })}
            value={this.state.email}
          />
          <TextInput
            style={styles.input}
            placeholder="PASSWORD"
            secureTextEntry
            onChangeText={value => this.setState({ password: value })}
            value={this.state.password}
          />
          <TouchableOpacity 
            onPress={() => this.loginHandler()}
            style={styles.buttonContainer}>
            <Text style={styles.buttonText}>LOGIN</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.footerContainer}>
          <Text onPress={() => this.props.navigation.navigate("SignupPage")}>New User? Signup here.</Text>
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
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ccc"
  },
  logoContainer: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center"
  },
  logoText: {
    fontSize: 40,
    color: "#000",
    fontWeight: "700"
  },
  formContainer: {
    flex: 2,
    justifyContent: "flex-start",
    alignItems: "center"
  },
  input: {
    height: 60,
    width: Dimensions.get("window").width - 50
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
  footerContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});

export default connect(mapStateToProps) (Login);
