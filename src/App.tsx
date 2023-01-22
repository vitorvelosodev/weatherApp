import { useState, useEffect } from 'react'
import { fetchApiData } from './scripts/api-request'
import data from './scripts/data.json'


function App() {

  useEffect(() => {
    console.log(data)
    // const apiKey = import.meta.env.VITE_API_KEY
    // const URL = 'http://api.weatherstack.com/current?access_key=6fc24338b3868a98d96f1acd2893285a&query=New York'
    // console.log(URL)
    // const call = async () => {
    //   const response = await fetchApiData(URL)
    //   return response
    // }
    // const response = call()
    // console.log(response)
  }, [])

  return (
    <main>

    </main>
  )
}

export default App
