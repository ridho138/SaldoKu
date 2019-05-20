import React, { Component } from "react";
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  FlatList
} from "react-native";
import { connect } from "react-redux";

class SpendingList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataSpending: [
        {
          id: "1",
          label: "Makan Siang",
          amount: "35000",
          datetime: "ABC"
        },
        {
          id: "2",
          label: "Makan Malam",
          amount: "25000",
          datetime: "DEF"
        }
      ]
    };
  }

  renderList = item => {
      console.log(item)
    return (
      <View style={styles.listContainer}>
        <Text style={styles.textLabel}>{item.item.label}</Text>
        <Text style={styles.textAmount}>{item.item.amount}</Text>
        <Text style={styles.textOrganization}>{item.item.datetime}</Text>
      </View>
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
            data={this.state.dataSpending}
            keyExtractor={item => item.id}
            renderItem={this.renderList}
            ItemSeparatorComponent={this.renderSeparator}
          />
        </View>
        <View style={styles.footerContainer}>
          <TouchableOpacity 
            style={styles.buttonContainer} 
            onPress={() => this.props.navigation.navigate('SpendingAdd')}>
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

export default connect(mapStateToProps)(SpendingList);
