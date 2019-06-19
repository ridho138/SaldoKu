import React, { Component } from "react";
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  TextInput,
  Alert
} from "react-native";
import { connect } from "react-redux";
import { fetchDataIncomeAdd, fetchDataIncomeList } from "../../actions"

class IncomeAdd extends Component {
  constructor(props) {
    super(props);
    state = {
      label: "",
      amount: "",
      organization: ""
    }
    
  }

  saveHandler = () => {
    const { label, amount, organization } = this.state
    const { id } = this.props.loginResult

    console.log(this.state)
    console.log(id)

    if(label !== "" && amount !== ""){
      this.props.dispatch(fetchDataIncomeAdd(id, label, amount, organization))
    }
    else {
      Alert.alert("Warning", "Label and/or Amount cannot be empty!");
    }
  }

  componentWillReceiveProps(nextProps){
    const { incomeAddResult } = nextProps
    console.log(nextProps)
    if (incomeAddResult === "200") {
      this.props.navigation.goBack()
    }
  }

  
  render() {
    //const { id } = this.props.loginResult;
    //console.log(this.props.loginResult);
    return (
      <View style={styles.container}>
        <View style={styles.flatListContainer}>
        <TextInput
            style={styles.input}
            placeholder="LABEL"
            onChangeText={value => this.setState({ label: value })}
            // value={this.state.email}
          />
          <TextInput
            style={styles.input}
            placeholder="AMOUNT"
            onChangeText={value => this.setState({ amount: value })}
            // value={this.state.password}
          />
          <TextInput
            style={styles.input}
            placeholder="ORGANIZATION"
            onChangeText={value => this.setState({ organization: value })}
            // value={this.state.password}
          />
          <TouchableOpacity style={styles.buttonContainer} onPress={() => this.saveHandler()}>
            <Text style={styles.buttonText}>SAVE</Text>
          </TouchableOpacity>
        </View>
        
      </View>
    );
  }
}

const mapStateToProps = state => {
  return {
    loginResult: state.dataLogin.data,
    incomeAddResult: state.dataIncomeAdd.status
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
