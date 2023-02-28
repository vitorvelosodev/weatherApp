import { Tforecastday, Tforecast } from './../../types/type'


export default function Forecast({ forecast }: { forecast: Tforecastday[] }) {
  // const { forecast } = props

  const isTomorrow = (day: Tforecastday, i: number) => {
    return (
      i === 0
        ? <h3>Tomorrow</h3>
        : <h3>{day.date}</h3>
    )
  }

  return (
    <div className="h-[100dvh] bg-[#100E1D] text-white grid grid-cols-2 place-items-center">
      {
        forecast.map((day: Tforecast, i: number) => {
          return (
            <div key={`${day} - ${i}`}>
              {
                isTomorrow(day, i)
              }

            </div>
          )
        })
      }
    </div>
  )
}