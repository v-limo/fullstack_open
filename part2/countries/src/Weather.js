import axios from 'axios'
import React, { useEffect, useState } from 'react'

export function Weather({ capital }) {
  const [weather, setWeather] = useState([])

  useEffect(() => {
    let API_key = 'f0660d31603e0488a06ca0bcec5932e2'
    let url = `http://api.weatherstack.com/current?access_key=${API_key}&query=${capital}`
    axios.get(url).then((res) => {
      setWeather(res.data.current)
    })
  }, [capital])

  const { temperature, weather_icons, wind_speed, wind_dir } = weather

  return (
    <div>
      <h2>Weather in {capital}</h2>
      {weather && (
        <div>
          <h4>Temperature : {temperature} Census</h4>
          <img src={weather_icons} alt='Weather icon ' />
          <h4>
            Wind : {wind_speed} mph Direction: {wind_dir}
          </h4>
        </div>
      )}
    </div>
  )
}
