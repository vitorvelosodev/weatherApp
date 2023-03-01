import { useState, useEffect, useContext } from 'react'
import { fetchApiData } from './scripts/api-request'
import dataStd from './scripts/newAPIresponse.json'
import MainWeatherScreen from './components/MainWeatherScreen/MainWeatherScreen'
import { Context } from './context/Context'
import Forecast from './components/Forecast/Forecast'

function App() {
  const [ data , setData ] = useState(dataStd)

  const [ render, setRender ] = useState(false)

  const allWeatherDataMain = () => {    
    const location = data.location.name
    const temperature = data.current.temp_c
    const weatherCode = data.current.condition.code
    const weatherDescription = data.current.condition.text
    const isDay = data.current.is_day
    const feelsLike = data.current.feelslike_c

    return (
      {
        location,
        temperature,
        weatherCode,
        weatherDescription,
        isDay,
        feelsLike,
      }
    )
  }

  const allForecast = () => {
    const allData = data.forecast.forecastday.map(forecast => {
      return (
        {
          date: forecast.date,
          day: forecast.day,
        }
      )
    })
    return allData
  }

  const { city } = useContext(Context)

  const call = async () => {
    setData(await fetchApiData(city))
    // setData(await fetch('/.netlify/functions/apiRequestServer'))
    setRender(true)
  }

  useEffect(() => {
    call()
  }, [city])

  return (
    <>
      { render &&  
        <>
          <MainWeatherScreen
            { ...allWeatherDataMain() }
          />
          <Forecast
            forecast={ allForecast() }
          />
        </>
      }
    </>
  )
}

export default App
