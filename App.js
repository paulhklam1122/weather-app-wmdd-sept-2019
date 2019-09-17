import React, { Component } from 'react'
import { StyleSheet, Text, View } from 'react-native'

import Form from './src/components/Form'

const API_KEY = 'c8c4865b1ee49f77a87780ffabb644b3'

class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Form />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%'
  },
})

export default App
