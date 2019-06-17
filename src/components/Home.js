import React, { Component } from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import { connect } from "react-redux";
import { fetchLogout } from "../actions/index";
import { fetchDataIncomeList } from '../actions'

class Home extends Component {
  render() {
    const { id } = this.props.loginResult;
    
    return (
      <View style={styles.container}>
        <View style={styles.headerContainer}>
          <Text style={styles.headerWelcome}>Welcome User! </Text>
          <Text style={styles.headerDate}>21 Mei 2019</Text>
        </View>
        <View style={styles.saldoContainer}>
          <Text style={styles.saldoText}>Sisa Saldo</Text>
          <Text style={styles.saldoAmount}>IDR. 140,000.00</Text>
        </View>
        <TouchableOpacity
          style={styles.incomeContainer}
          onPress={() => this.props.navigation.navigate("IncomeList")}
        >
          <Text style={styles.incomeText}>Total Income</Text>
          <Text style={styles.incomeAmount}>IDR. 500,000.00</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.spendingContainer}
          onPress={() => this.props.navigation.navigate("SpendingListPage")}
        >
          <Text style={styles.spendingText}>Total Spending</Text>
          <Text style={styles.spendingAmount}>IDR. 360,000.00</Text>
        </TouchableOpacity>
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
  headerContainer: {
    flex: 1,
    justifyContent: "center",
    padding: 20,
    borderBottomWidth: 5,
    borderBottomColor: "#000"
  },
  headerWelcome: {
    fontSize: 35,
    color: "#000",
    fontWeight: "bold"
  },
  headerDate: {
    fontSize: 15,
    color: "#000"
  },
  saldoContainer: {
    flex: 2,
    justifyContent: "center",
    padding: 20,
    borderBottomWidth: 2,
    borderBottomColor: "#000"
  },
  saldoText: {
    fontSize: 12,
    color: "#000",
    fontWeight: "bold"
  },
  saldoAmount: {
    fontSize: 35,
    color: "#000"
  },
  incomeContainer: {
    flex: 2,
    justifyContent: "center",
    padding: 20,
    borderBottomWidth: 2,
    borderBottomColor: "#000"
  },
  incomeText: {
    fontSize: 12,
    color: "#000",
    fontWeight: "bold"
  },
  incomeAmount: {
    fontSize: 20,
    color: "#000"
  },
  spendingContainer: {
    flex: 2,
    justifyContent: "center",
    padding: 20,
    borderBottomWidth: 2,
    borderBottomColor: "#000"
  },
  spendingText: {
    fontSize: 12,
    color: "#000",
    fontWeight: "bold"
  },
  spendingAmount: {
    fontSize: 20,
    color: "#000"
  }
});

export default connect(mapStateToProps)(Home);
