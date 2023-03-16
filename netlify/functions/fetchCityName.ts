import axios from 'axios'

async function fetchCityName (city? : string) {
  const apiKey = process.env.VITE_API_KEY
  const { data } = await axios(`https://api.weatherapi.com/v1/search.json?key=${apiKey}&q=${city}`)
  
  return data
}

export async function handler (event) {
  const city = event.queryStringParameters.city
  const data = await fetchCityName(city)

  return {
    statusCode: 200,
    body: JSON.stringify(data)
  }
}
