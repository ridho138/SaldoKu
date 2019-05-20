import React, { Component } from 'react'
import { Text, FlatList } from 'react-native'

class IncomeList extends Component {
  renderContent = () => {
    return <Text>Test data</Text>
  }

  renderSeparator = () => {
    return (
      <View style={{ borderWidth: 0.5, borderColor: '#000' }} />
    )
  }

  render() {
    return (
      <FlatList 
        data={[
          {
            label: 'Salary',
            amount: '500000',
            organization: 'PT ABC',
          }, {
            label: 'Side Project',
            amount: '250000',
            organization: 'PT DEF',
          }, 
        ]}
        ItemSeparatorComponent={this.renderSeparator}
        renderItem={this.renderContent}
      />
    )
  }
}

export default IncomeList