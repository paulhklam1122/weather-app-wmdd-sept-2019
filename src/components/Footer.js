import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

import moment from 'moment'

const Footer = ({ pressure, windSpeed, minTemp }) => (
  <View styles={styles.footer}>
    <View style={styles.timeContainer}>
      <Text style={styles.time}>{moment().format('LLLL')}</Text>
    </View>
    <View style={styles.dataContainer}>
      <View style={{ flex: 1 }}>
        <Text style={styles.textLabel}>
          Pressure
        </Text>
        <Text style={styles.textBody}>
          {pressure}
        </Text>
      </View>
      <View style={{ flex: 1 }}>
        <Text style={styles.textLabel}>
          Wind Speed
        </Text>
        <Text style={styles.textBody}>
          {windSpeed}
        </Text>
      </View>
      <View style={{ flex: 1 }}>
        <Text style={styles.textLabel}>
          Min Temp
        </Text>
        <Text style={styles.textBody}>
          {minTemp }
        </Text>
      </View>
    </View>
  </View>
)

const styles = StyleSheet.create({
  footer: {
    flex: 3,
    width: '100%'
  },
  dataContainer: {
    flexDirection: 'row',
    paddingHorizontal: 20,
    flex: 3,
    paddingTop: 20
  },
  textLabel: {
    backgroundColor: 'transparent'
  },
  textBody: {
    fontSize: 30,
    backgroundColor: 'transparent'
  },
  timeContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1
  },
  time: {
    fontSize: 15,
    color: 'red',
    paddingBottom: 20,
    backgroundColor: 'transparent'
  }
})

export default Footer
