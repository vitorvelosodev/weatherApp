import axios from 'axios'
import responseJSON from './../../src/assets/response.json'
// import responseData from './newAPIresponse.json'

async function fetchApiData(apiKey? : string, city? : string) {
  const URL = `https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${city}&days=5&aqi=no&alerts=no`
  const { data } = await axios.get(URL)
  
  return data
}

export async function handler(event) {
  const apiKey = process.env.VITE_API_KEY

  const city = event.queryStringParameters.city
  const data = await fetchApiData(apiKey, city)

  return {
    statusCode: 200,
    body: JSON.stringify(data)
  }
}
