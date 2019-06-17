import React, { Component } from "react";
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  FlatList
} from "react-native";
import { connect } from "react-redux";

class IncomeList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataIncome: [
        {
          id: "1",
          label: "Salary",
          amount: "350,000",
          organization: "PT ABC"
        },
        {
          id: "2",
          label: "Side Project",
          amount: "150,000",
          organization: "-"
        }
      ]
    };
  }

  renderList = item => {
    return (
      <TouchableOpacity
        onPress={() => this.props.navigation.navigate('IncomeEdit')}
        style={styles.listContainer}>
        <Text style={styles.textLabel}>{item.label}</Text>
        <Text style={styles.textAmount}>{item.amount}</Text>
        <Text style={styles.textOrganization}>{item.organization}</Text>
      </TouchableOpacity>
    );
  };

  renderSeparator = () => {
    return <View style={{ borderWidth: 0.5, borderColor: "#000" }} />;
  };

  render() {
    const { id } = this.props.loginResult;
    console.log(this.props.loginResult);
    return (
      <View style={styles.container}>
        <View style={styles.flatListContainer}>
          <FlatList
            data={this.state.dataIncome}
            keyExtractor={item => item.id}
            renderItem={({ item }) => this.renderList(item)}
            ItemSeparatorComponent={this.renderSeparator}
          />
        </View>
        <View style={styles.footerContainer}>
          <TouchableOpacity style={styles.buttonContainer} onPress={() => this.props.navigation.navigate('IncomeAdd')}>
            <Text style={styles.buttonText}>ADD</Text>
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
    flex: 5
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
});

export default connect(mapStateToProps)(IncomeList);
