import React, { Component } from 'react'
import { View, Text, TextInput, TouchableOpacity } from 'react-native'

class SpendingAdd extends Component {
  render() {
    return (
      <View>
        <View style={{ justifyContent: 'space-between' }}>
          <Text style={{ flex: 1 }}>Label</Text>
          <TextInput style={{ flex: 2, backgroundColor: 'yellow' }} />
        </View>
        <View style={{ justifyContent: 'space-between' }}>
          <Text style={{ flex: 1 }}>Amount</Text>
          <TextInput style={{ flex: 2, backgroundColor: 'blue' }} />
        </View>
        <TouchableOpacity style={{ borderColor: 'red', borderWidth: 1, borderRadius: 5, width: '50%' }}>
          <Text style={{ margin: 5 }}>Save</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

export default SpendingAdd