import { useState } from 'react'
import AnimationWeather from './AnimationWeather'
import dayjs from 'dayjs'
import LocationMenu from '../LocationMenu/LocationMenu'


type WeatherProps = {
  temperature: number;
  weatherCode: number;
  weatherDescription: string;
  location: string;
  isDay: number;
  feelsLike: number;
}

export default function MainWeatherScreen(props: WeatherProps) {
  const {
    temperature,
    weatherCode,
    weatherDescription,
    location,
    isDay,
    feelsLike,
  } = props

  const [ sideMenu , setSideMenu ] = useState(false)
  const today = dayjs().format('ddd, MMM D, YYYY')
  const backgroundColor = (isDay === 1) ? 'bg-[#65C2F5]' : 'bg-[#1E213A]'

  const handleSideMenu = () => {
    setSideMenu(prevState => !prevState)
  }

  return (
    <main className={`grid place-content-center h-[100dvh] gap-2 text-center overflow-x-hidden max-w-lg relative ${backgroundColor}`}>
      <button
        onClick={handleSideMenu}
        className='absolute px-4 py-2 bg-cyan-800 text-white rounded-sm shadow top-4 left-4 z-20'
      >
        Search Location
      </button>
      <LocationMenu
        open={sideMenu}
        handleClose={handleSideMenu}
      />
      <AnimationWeather weatherCode={weatherCode} isDay={isDay}/>
      <div>
        <p className='text-gray-50 text-[8rem] m-4 drop-shadow-lg'>
          {`${temperature}°C`}
        </p>
        <p className='text-gray-50 text-xl m-2 drop-shadow-lg'>
          {`Feels like ${feelsLike}°C`}
        </p>
      </div>
      <p className='text-gray-50 text-2xl font-medium m-2 drop-shadow-lg'>
        {weatherDescription}
      </p>
      <span className='text-gray-50 text-lg font-thin drop-shadow-lg'>Today | {today}</span>
      <p className='text-gray-50 text-3xl font-medium drop-shadow-lg gap-0'>
        {location}
      </p>
    </main>
  )
}
