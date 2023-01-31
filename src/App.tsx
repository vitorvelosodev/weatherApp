import { useState, useEffect } from 'react'
import { fetchApiData } from './scripts/api-request'
import data from './scripts/data.json'
import weatherCodes from './scripts/weatherCodes.json'
import MainWeatherScreen from './components/MainWeatherScreen/MainWeatherScreen'

function App() {
  const allWeatherData = () => {
    const location = data.location.name
    const temperature = data.current.temperature
    const weatherCode = data.current.weather_code
    const weatherDescription = data.current.weather_descriptions
    const isDay = data.current.is_day
    const feelsLike = data.current.feelslike

    return (
      {
        location,
        temperature,
        weatherCode,
        weatherDescription,
        isDay,
        feelsLike
      }
    )
  }

  // useEffect(() => {
  //   // console.log(data)
  //   const apiKey = import.meta.env.VITE_API_KEY
  //   console.log('APIKEY', apiKey)
  //   // 6fc24338b3868a98d96f1acd2893285a
  //   // const URL = `http://api.weatherstack.com/current?access_key=${apiKey}&query=New York`
  //   // console.log(URL)
  //   const call = async () => {
  //     const response = await fetchApiData(URL)
  //     console.log(response)
  //     return response
  //   }
  //   const response = call()
  // }, [])

  return (
    <>
      <MainWeatherScreen
        {...allWeatherData()}
      />
    </>
  )
}

export default App
