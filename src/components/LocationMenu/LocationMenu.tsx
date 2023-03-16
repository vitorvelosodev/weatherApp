import axios from 'axios'
import { SyntheticEvent, useContext, useEffect, useState } from 'react'
import { Context } from '../../context/Context'
import { TCity } from './../../types/type'

type PropsMenu = {
  open: boolean;
  handleClose: (event: null | React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
}

export default function LocationMenu(props: PropsMenu) {
  const { open, handleClose } = props
  const show = open ? 'right-0' : 'right-full'
  const { setCity } = useContext(Context)

  const [ cityList, setCityList ] = useState<string[]>([])
  const [ inputCity, setInputCity ] = useState<string>('')
  const [ searchList, setSearchList ] = useState<null | TCity[]>(null)

  useEffect(() => {
    setSearchList(null)
  }, [open])

  const handleCityChange = (event: SyntheticEvent) => {
    const target = event.target as Element
    setCity(target.innerHTML)
  }

  function handleInputCityChange(event: React.ChangeEvent<HTMLInputElement>):void {
    const { value } = event.target
    setInputCity(value)
    if (value.length > 3) {
      setTimeout(async () => {
        const { data } = await axios.get(`/.netlify/functions/fetchCityName?city=${value}`)
        setSearchList(data)
      }, 600)
    } else {
      setSearchList(null)
    }
  }

  function addNewCityToList(cityMapped: string):void {
    setInputCity('')
    const cityIsRepeated = cityList.some(city => city === cityMapped)
    if (!cityIsRepeated) {
      setCityList(prevState => [...prevState, cityMapped])
    }
    setSearchList(null)
    handleClose(null)
    setCity(cityMapped)
  }

  return (
    <>
      <aside className={`absolute h-full w-full z-30 bg-[#1E213A] transition-all duration-300 ${show} text-left text-white text-lg`} >
        <div
          className="mr-2 ml-auto my-2 p-1 w-8 text-center font-semibold cursor-pointer text-white"
          onClick={ handleClose }
        >
          X
        </div>
        <div
          className='relative w-[80%] mx-auto'
          // onBlur={ () => setSearchList(null) }
        >
          <input
            type="text"
            onChange={ handleInputCityChange }
            value={ inputCity }
            className='w-full block mx-auto h-12 bg-[#1E213A] border-2 border-white outline-none px-4 '
          />
          <div className='absolute w-full bg-slate-600 mx-auto'>
            { 
              searchList
                ? (searchList.map((city : TCity, i : number) => {
                  if (i > 4) {
                    return ''
                  }
                  return (
                    <div
                      key={i}
                      onClick={ () => addNewCityToList(city.name) }
                      className='cursor-pointer py-2 px-4 border border-slate-600 hover:border-white'
                    >
                      <p>{`${city.name} - ${city.region} - ${city.country}`}</p>
                    </div>
                  )
                }))
                : ''
            }
          </div>
        </div>
        <ul>
          {
            cityList.map((city, i) => (
              <li
                className='w-[80%] mx-auto my-4 p-4 border border-[#616475] cursor-pointer'
                key={i}
                onClick={handleCityChange}
              >{city}</li>
            ))
          }
        </ul>
      </aside>
    </>
  )
}