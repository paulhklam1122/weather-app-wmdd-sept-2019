import React from 'react'
import { StyleSheet, TextInput, View } from 'react-native'

const styles = StyleSheet.create({
  header: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    width: '100%'
  },
  textInput: {
    width: 300,
    height: 40,
    borderColor: 'grey',
    borderWidth: 2,
    padding: 5,
    marginTop: 50
  }
})

const Form = () => (
  <View style={styles.header}>
    <TextInput
      style={styles.textInput}
    />
  </View>
)

export default Form
