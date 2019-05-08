import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Dimensions
} from "react-native";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };
  }

  loginHandler = () => {
    // 1. Lakukan validasi email dan password tidak boleh kosong
    // 2. Jika email dan password kosong, tampilkan Alert notif
    // Alert.alert('Title', '')
    // 3. Jika email dan password ada isinya maka lakukan console.log()
    // If - else

    const { email, password } = this.state;

    if (email === "" && password === "") {
      Alert.alert("Warning", "Email and/or Password cannot be empty!");
    } else {
      console.log(`Email: ${email}`);
      console.log(`Password: ${password}`);
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

export default Login;
