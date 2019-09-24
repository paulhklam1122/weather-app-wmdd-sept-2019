import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const Content = () => (
  <View style={styles.content}>
    <View>
      <Text style={styles.temp}>17 degrees</Text>
    </View>
    <View>
      <Text style={styles.cityName}>City</Text>
    </View>
    <View>
      <Text style={styles.countryName}>Country</Text>
    </View>
  </View>
)

const styles = StyleSheet.create({
  content: {
    flex: 1,
    width: '100%',
    backgroundColor: 'transparent',
    marginTop: 50
  },
  temp: {
    fontSize: 50,
    color: 'black',
    paddingLeft: 20,
    paddingTop: 50
  },
  countryName: {
    color: 'black',
    fontSize: 25,
    paddingLeft: 20
  },
  cityName: {
    fontSize: 35,
    paddingLeft: 20,
    paddingTop: 40,
    paddingBottom: 25
  }
})

export default Content