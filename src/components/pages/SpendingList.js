import React, { Component } from "react";
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  FlatList
} from "react-native";
import { connect } from "react-redux";
import { fetchDataSpending } from '../../actions'

class SpendingList extends Component {
  componentDidMount() {
    const { id } = this.props.loginResult
    this.props.dispatch(fetchDataSpending(id))
  }

  componentDidMount() {
    const { id } = this.props.loginResult
    this.props.dispatch(fetchDataSpending(id))
  }

  renderList = item => {
      console.log(item)
    return (
      <TouchableOpacity 
        onPress={() => this.props.navigation.navigate('SpendingEditPage')}
        style={styles.listContainer}>
        <Text style={styles.textLabel}>{item.item.label}</Text>
        <Text style={styles.textAmount}>{item.item.amount}</Text>
        <Text style={styles.textOrganization}>{item.item.datetime}</Text>
      </TouchableOpacity>
    );
  };

  renderSeparator = () => {
    return <View style={{ borderWidth: 0.5, borderColor: "#000" }} />;
  };

  render() {
    
    return (
      <View style={styles.container}>
        <View style={styles.flatListContainer}>
          <FlatList
            data={this.props.dataSpending}
            keyExtractor={item => item.id}
            renderItem={this.renderList}
            ItemSeparatorComponent={this.renderSeparator}
          />
        </View>
        <View style={styles.footerContainer}>
          <TouchableOpacity 
            style={styles.buttonContainer} 
            onPress={() => this.props.navigation.navigate('SpendingAddPage')}>
            <Text style={styles.buttonText}>ADD</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const mapStateToProps = state => {
  console.log(state)
  return {
    loginResult: state.dataLogin.data,
    dataSpending: state.dataSpending.data
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
