import React, { Component } from 'react'
import { Image, StyleSheet, View } from 'react-native'

import Form from './src/components/Form'
import Footer from './src/components/Footer'
import Content from './src/components/Content'

const API_KEY = 'c8c4865b1ee49f77a87780ffabb644b3'

const images = {
  Clear: 'http://ayay.co.uk/mobiles/weather/strange/northern-lights.jpg',
  Clouds: 'https://i.pinimg.com/736x/54/59/d7/5459d741279e8d72661990f52774473f--cell-phone-wallpapers-gif-photos.jpg'
}

class App extends Component {
  state = {
    temp: '',
    windSpeed: '',
    pressure: '',
    minTemp: '',
    city: '',
    country: ''
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
      country: response.sys.country,
      weather: response.weather[0].main
    })
  }

  render() {
    const {temp, city, country, windSpeed, minTemp, pressure, weather} = this.state
    return (
      <View style={styles.container}>
        <Image style={{ position: 'absolute', width: '100%', height: '100%' }} source={{ uri: images[weather] }} />
        <Form
          onSubmit={this.fetchData}
          onChangeText={text => this.setState({ city: text })}
        />
        <Content
          country={country}
          cityName={city}
          temp={temp}
        />
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
