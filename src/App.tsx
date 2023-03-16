import { useState, useEffect, useContext } from 'react'
import dataStd from './scripts/newAPIresponse.json'
import MainWeatherScreen from './components/MainWeatherScreen/MainWeatherScreen'
import { Context } from './context/Context'
import Forecast from './components/Forecast/Forecast'
import { fetchApiData } from './scripts/apiRequest'

function App() {
  const [ data , setData ] = useState(dataStd)
  const [ apiError , setApiError ] = useState(false)
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
    const newWeather = (await fetchApiData(city))

    if (newWeather.data === null) {
      setApiError(true)
    } else {
      setData(newWeather.data)
      // setData(await fetch('/.netlify/functions/apiRequestServer'))
      setRender(true)
      setApiError(false)
    }
  }

  useEffect(() => {
    call()
  }, [city])

  const errorAlert = () => {
    return (
      <div className="alert alert-error shadow-lg absolute bottom-[2%] w-[95%] max-w-[600px] animate-revealUp z-20">
        <div>
          <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current flex-shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
          <span>Error! There was a problem with the data received from our servers.</span>
        </div>
      </div>
    )
  }

  return (
    <>
      { apiError && errorAlert() }
      { render
        ? 
        <div
          className='custom:grid custom:grid-cols-2 place-items-center w-full max-w-6xl h-screen max-h-[1440px] drop-shadow-app'
        >
      
          <>
            <MainWeatherScreen
              { ...allWeatherDataMain() }
            />
            <div className='grid place-items-center bg-[#100E1D] w-full'>
              <Forecast
                forecast={ allForecast() }
              />
            </div>
          </>
        </div>
        :
        <div className='grid place-items-center w-full max-w-6xl h-screen max-h-[1440px] drop-shadow-app'>
          <div className='h-24 w-24'>
            <svg version="1.1" id="L9" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
              viewBox="0 0 100 100" enableBackground="new 0 0 0 0" xmlSpace="preserve">
              <path fill="#fff" d="M73,50c0-12.7-10.3-23-23-23S27,37.3,27,50 M30.9,50c0-10.5,8.5-19.1,19.1-19.1S69.1,39.5,69.1,50">
                <animateTransform 
                  attributeName="transform" 
                  attributeType="XML" 
                  type="rotate"
                  dur="1s" 
                  from="0 50 50"
                  to="360 50 50" 
                  repeatCount="indefinite" />
              </path>
            </svg>
          </div>
        </div>
      }
    </>
  )
}

export default App
