import axios from 'axios'
// import responseData from './newAPIresponse.json'

// const apiKey = import.meta.env.VITE_API_KEY

export async function fetchApiData(city : string) {
  const URL = `/.netlify/functions/apiRequestServerless?city=${city}`
  const response = await axios.get(URL)
  // console.log(response)

  return response
}
