import { Tforecastday } from './../../types/type'
import weatherCodesJSON from './../../scripts/weatherCodes.json'
import Clear from '/weather-img/Clear.png'
import CloudBackground from '/weather-img/Cloud-background.png'
import Hail from '/weather-img/Hail.png'
import HeavyCloud from '/weather-img/HeavyCloud.png'
import HeavyRain from '/weather-img/HeavyRain.png'
import LightCloud from '/weather-img/LightRain.png'
import Shower from '/weather-img/Shower.png'
import Sleet from '/weather-img/Sleet.png'
import Snow from '/weather-img/Snow.png'
import Thunderstorm from '/weather-img/Thunderstorm.png'


export default function Forecast({ forecast }: { forecast: Tforecastday[] }) {

  const objWeatherImg = {
    Clear,
    CloudBackground,
    Hail,
    HeavyCloud,
    HeavyRain,
    LightCloud,
    Shower,
    Sleet,
    Snow,
    Thunderstorm
  }
  
  const isTomorrow = (cast: Tforecastday, i: number) => {
    const date = cast.date.split('-')
    
    return (
      i === 0
        ? <h3 className='text-center text-xl font-semibold'>Tomorrow</h3>
        : <h3 className='text-center text-xl font-semibold'>{`${date[1]} - ${date[2]}`}</h3>
    )
  }

  function getIcon(weatherCode: number) {
    const animation = weatherCodesJSON.codes.condition.filter(code => code.code === weatherCode)[0].animation
    return animation
  }

  const forecastImageAndText = (cast: Tforecastday) => {
    const weatherCode = cast.day.condition.code
    const animationIcon = getIcon(weatherCode)
    const animationElement:string = objWeatherImg[animationIcon as keyof typeof objWeatherImg]
    return (
      <>
        <img src={animationElement}
          alt="Weather image"
          className='max-h-16 mx-auto'/>
        <p
          className='mt-4 text-center text-sm'
        >{cast.day.condition.text}</p>
      </>
    )            
  }

  const forecastTemp = (cast: Tforecastday) => {
    const [ tempMax , tempMin ] = [ cast.day.maxtemp_c , cast.day.mintemp_c]
    return (
      <div>
        <p className='text-center'>{`Max: ${tempMax}°C`}</p>
        <p className='text-center'>{`Min: ${tempMin}°C`}</p>
      </div>
    )
  }

  return (
    <div className="h-[100dvh] max-h-[1024px] min-h-[820px] bg-[#100E1D] text-white grid grid-cols-2 place-items-center p-4">
      {
        forecast.map((cast: Tforecastday, i: number) => {
          return (
            <div
              key={`${cast} - ${i}`}
              className='bg-[#1E213A] w-44 h-60 grid place-items-center p-4'
            >
              { isTomorrow(cast, i) }
              { forecastImageAndText(cast) }
              { forecastTemp(cast) }
            </div>
          )
        })
      }
    </div>
  )
}