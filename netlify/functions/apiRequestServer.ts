import axios from 'axios'
// import process from 'node'

export const handler = async (event) => {
  const apiKey = process.env.VITE_API_KEY
  // const apiKey = '6fc24338b3868a98d96f1acd2893285a'
  const URL = `http://api.weatherstack.com/current?access_key=${apiKey}&query=New York`

  async function fetchApiData(URL:string) {
    const response = await axios.get(URL)
    return response
  }

  const response = await fetchApiData(URL)
  response.data.key = apiKey
  // event.queryStringParameters.url
  
  // 6fc24338b3868a98d96f1acd2893285a
  // const data = fetchApiData()

  return {
    statusCode: 200,
    body: JSON.stringify(apiKey)
  }
}