import weatherCodesJSON from './../../scripts/weatherCodes.json'
import weatherAnimation from './../../scripts/weatherAnimation.json'
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
import 'animate.css'

type AnimationProps = {
  weatherCode: number;
}

export default function AnimationWeather(props: AnimationProps) {
  const { weatherCode } = props

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

  const weatherDescription = weatherCodesJSON.codes.condition.filter(code => code.code === weatherCode)[0].description
  
  function getIcon() {
    const animation = Object.entries(weatherAnimation).filter(entry => entry[0] === weatherDescription)
    return animation[0][1]
  }

  const key = getIcon()

  const animationElement:string = objWeatherImg[key as keyof typeof objWeatherImg]

  // const element

  return (
    <>
      <img src={objWeatherImg.CloudBackground} className='absolute top-28 opacity-10 ' />
      <img src={animationElement} alt="Weather image" />
    </>
  )
}