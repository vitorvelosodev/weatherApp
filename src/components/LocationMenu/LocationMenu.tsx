import { SyntheticEvent, useContext, useState } from 'react'
import { Context } from '../../context/Context'

type PropsMenu = {
  open: boolean;
  handleClose: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
}

export default function LocationMenu(props: PropsMenu) {
  const { open, handleClose } = props
  const show = open ? 'right-0' : 'right-full'
  const { city, setCity } = useContext(Context)

  const [ cityList, setCityList ] = useState<string[]>(['Fortaleza', 'Propria', 'Barcelona'])

  const handleCityChange = (event: SyntheticEvent) => {
    const target = event.target as Element
    setCity(target.innerHTML)
  }

  const [ inputCity, setInputCity ] = useState<string>('')

  function handleInputCityChange(event: React.ChangeEvent<HTMLInputElement>):void {
    const { value } = event.target
    setInputCity(value)
  }

  function addNewCityToList():void {
    setCityList(prevState => [...prevState, inputCity])
  }

  return (
    <>
      <aside className={`absolute h-full w-full z-30 bg-cyan-600 transition-all ${show} text-left`} >
        <div
          className="mr-2 ml-auto my-2 p-1 bg-slate-500 w-8 text-center font-semibold"
          onClick={ handleClose }
        >
          X
        </div>
        <input
          type="text"
          onChange={ handleInputCityChange }
          value={ inputCity }
        />
        <button
          onClick={ addNewCityToList }
        >Search</button>
        <ul>
          {
            cityList.map((city, i) => (
              <li
                className='p-4'
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