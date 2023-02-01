import { useState, useEffect } from 'react'
import { fetchApiData } from './scripts/api-request'
import dataStd from './scripts/data.json'
import weatherCodes from './scripts/weatherCodes.json'
import MainWeatherScreen from './components/MainWeatherScreen/MainWeatherScreen'

function App() {
  const [ data , setData ] = useState(dataStd)
  // console.log(data)

  const [ render, setRender ] = useState(false)

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

  useEffect(() => {
    const apiKey = import.meta.env.VITE_API_KEY
    // const URL = `http://api.weatherstack.com/current?access_key=${apiKey}&query=Goiania`
    const call = async () => {
      // const response = await fetchApiData(URL)
      // console.log(response)
      // setData(response.data)
      setData(dataStd)
      setRender(true)
    }
    call()
  }, [])

  return (
    <>
      { render &&
        <MainWeatherScreen
          {...allWeatherData()}
        />
      }
    </>
  )
}

export default App
