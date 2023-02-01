import { useState } from 'react'
import AnimationWeather from './AnimationWeather'
import * as dayjs from 'dayjs'


type WeatherProps = {
  temperature: number;
  weatherCode: number;
  weatherDescription: string[];
  location: string;
  isDay: string;
  feelsLike: number;
}

export default function MainWeatherScreen(props: WeatherProps) {
  const {
    temperature,
    weatherCode,
    weatherDescription,
    location,
    isDay,
    feelsLike
  } = props

  const today = dayjs().format('ddd, MMM D')
  const backgroundColor = (isDay === 'yes') ? 'bg-[#87CEEB]' : 'bg-[#1E213A]'

  return (
    <main className={`grid place-content-center h-screen gap-2 text-center overflow-x-hidden ${backgroundColor}`}>
      <AnimationWeather weatherCode={weatherCode}/>
      <br/>
      <div>
        <p className='text-gray-50 text-[8rem] m-4'>
          {`${temperature}°C`}
        </p>
        <p className='text-gray-50 text-xl m-2'>
          {`Feels like ${feelsLike}°C`}
        </p>
      </div>
      <p className='text-gray-50 text-2xl font-medium m-2'>
        {weatherDescription}
      </p>
      <span className='text-gray-50 text-lg font-thin m-2'>Today | {today}</span>
    </main>
  )
}