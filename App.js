import React, { Component } from 'react'
import { StyleSheet, Text, View } from 'react-native'

import Form from './src/components/Form'
import Footer from './src/components/Footer'
import Content from './src/components/Content'

const API_KEY = 'c8c4865b1ee49f77a87780ffabb644b3'

class App extends Component {
  state = {
    temp: '',
    windSpeed: '',
    pressure: '',
    minTemp: '',
    city: '',
    countryCode: ''
  }

  fetchData = () => {
    this.fetchCityData(this.state.city)
  }

  fetchCityData = async (city) => {
    const url = `http://api.openweathermap.org/data/2.5/weather?q=London&appid=${API_KEY}&units=metric`
    const api_call = await fetch(url)

    const response = await api_call.json()
    console.log('response', response)

    this.setState({
      temp: response.main.temp,
      windSpeed: response.wind.speed,
      minTemp: response.main.temp_min,
      pressure: response.main.pressure,
      countryCode: response.sys.countryCode
    })
  }

  render() {
    const {temp, windSpeed, minTemp, pressure, countryCode} = this.state
    return (
      <View style={styles.container}>
        <Form
          onSubmit={this.fetchData}
          onChangeText={text => this.setState({ city: text })}
        />
        <Content />
        <Footer
          pressure={pressure}
          windSpeed={windSpeed}
          minTemp={minTemp}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%'
  }
})

export default App
