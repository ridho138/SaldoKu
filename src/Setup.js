/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react'
import {
  StyleSheet,
  ActivityIndicator,
  Text,
  View
} from 'react-native'
import { connect } from 'react-redux'
import { fetchData } from './actions'



class Setup extends Component {
  componentDidMount(){
    this.props.dispatch(fetchData())
  }


  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        {
          this.props.data ? (<Text>{this.props.data}</Text>) : (<ActivityIndicator size='large' />)
        }
      </View>
    );
  }
}


const mapStateToProps = (state) => {
  console.log(state)
  return {
    data: state.data.items
  }
}

export default connect(mapStateToProps)(Setup)