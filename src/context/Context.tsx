/* eslint-disable @typescript-eslint/no-empty-function */
import { createContext, useState } from 'react'

type Tcontext = {
  city: string;
  setCity: React.Dispatch<React.SetStateAction<string>>;
  handleCityChange: (event: any) => void;
}

const initialContext = {
  city: 'New York',
  setCity: () => {},
  handleCityChange: () => {}
}

export const Context = createContext<Tcontext>(initialContext)

export function ContextProvider({ children }:{ children: React.ReactNode }) {
  const [ city , setCity ] = useState('New York')
  const handleCityChange = (event: any) => {
    setCity(event?.target.innerHTML)
  }

  return (
    <Context.Provider
      value={{ city, setCity, handleCityChange }}
    >
      { children }
    </Context.Provider>
  )
}
