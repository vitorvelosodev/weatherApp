import axios from 'axios'

export async function fetchApiData(URL:string) {
  const response = await axios.get(URL)
  return response
  
}