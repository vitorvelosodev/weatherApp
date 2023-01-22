import { useState } from 'react'
import AnimationWeather from './AnimationWeather'

interface WeatherProps {
  id: number;
  temperature: number;
  weather: string;
  location: string;
}

export default function MainWeatherScreen(props: WeatherProps) {

  const [ temperature , setTemperature ] = useState('--')
  return (
    <>
      <AnimationWeather />
      {props.temperature}
    </>
  )
}