import weatherCodesJSON from './../../scripts/weatherCodes.json'
import Clear from '/weather-img/Clear.png'
import ClearNight from '/weather-img/ClearNight.png'
import CloudBackground from '/weather-img/Cloud-background.png'
import Hail from '/weather-img/Hail.png'
import HeavyCloud from '/weather-img/HeavyCloud.png'
import HeavyRain from '/weather-img/HeavyRain.png'
import LightCloud from '/weather-img/LightRain.png'
import Shower from '/weather-img/Shower.png'
import Sleet from '/weather-img/Sleet.png'
import Snow from '/weather-img/Snow.png'
import Thunderstorm from '/weather-img/Thunderstorm.png'
import 'animate.css'

type AnimationProps = {
  weatherCode: number;
  isDay: number;
}

export default function AnimationWeather(props: AnimationProps) {
  const { weatherCode, isDay } = props

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

  // const weatherDescription = weatherCodesJSON.codes.condition.filter(code => code.code === weatherCode)[0].description
  
  // function getIcon() {
  //   const animation = Object.entries(weatherAnimation).filter(entry => entry[0] === weatherDescription)
  //   return animation[0][1]
  // }

  function getIcon() {
    const animation = weatherCodesJSON.codes.condition.filter(code => code.code === weatherCode)[0].animation
    return animation
  }

  const animationIcon = getIcon()

  const animationElement:string = objWeatherImg[animationIcon as keyof typeof objWeatherImg]

  return (
    <>
      {
        animationElement !== Clear ?
          <div className='absolute h-full overflow-hidden w-full'>
            <img src={objWeatherImg.CloudBackground} className='relative top-28 opacity-10 scale-150 overflow-x-hidden animate-scrolling' />
            <img src={objWeatherImg.CloudBackground} className='relative top-[-70px] opacity-0 scale-110 overflow-x-hidden animate-scrollingDelay' />
          </div>
          : ''
      }
      <img src={isDay === 1 ? animationElement : (animationElement === Clear ? ClearNight : animationElement)} alt="Weather image" className='place-self-center'/>
    </>
  )
}