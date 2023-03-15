import axios from 'axios'
// import responseData from './newAPIresponse.json'

const apiKey = import.meta.env.VITE_API_KEY

export async function fetchApiData(city : string) {
  const URL = `https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${city}&days=5&aqi=no&alerts=no`
  const response = await axios.get(URL).catch(() => {
    return { data: null }
  })

  return response
}

export { fetchApiData }
