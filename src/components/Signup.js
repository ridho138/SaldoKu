import React, { Component } from "react";
import {
  StyleSheet,
  Alert,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Dimensions
} from "react-native";
import { connect } from 'react-redux'
import { fetchSignup } from '../actions/index'

class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      confirmPassword: ""
    };
  }

  signupHandler = () => {
    const { email, password, confirmPassword } = this.state
    console.log('sadasdasddsad ', email)

    if (email === '' || password === '' || confirmPassword === '') {
      Alert.alert('Warning', 'Email dan Password tidak boleh kosong!')
    } else {
      
      if (password === confirmPassword){
        this.props.dispatch(fetchSignup(email, password))
      } else {
        Alert.alert('Warning', 'Password dan Confirmation Password tidak sama!')
      }

    }
  }

  componentWillReceiveProps(nextProp) {
    const { emailProps, tokenProps } = nextProp
    if (emailProps && tokenProps) {
      this.props.navigation.navigate('LoginPage')
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
          <TextInput
            style={styles.input}
            placeholder="CONFIRM PASSWORD"
            secureTextEntry
            onChangeText={value => this.setState({ confirmPassword: value })}
            value={this.state.confirmPassword}
          />
          <TouchableOpacity 
            onPress={this.signupHandler}
            style={styles.buttonContainer}>
            <Text style={styles.buttonText}>SIGNUP</Text>
          </TouchableOpacity>
          
        </View>
      </View>
    );
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
  }
});

const mapStateToProps = state => {
  console.log(state)
  return {
    // signupResult: state.dataSignup
    emailProps: state.dataSignup.email,
    tokenProps: state.dataSignup.id,
    isLoadingProps: state.dataSignup.isLoading
  }
}

export default connect(mapStateToProps) (Signup);
