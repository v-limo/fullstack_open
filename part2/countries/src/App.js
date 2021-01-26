import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Weather } from './Weather'

const App = () => {
  const [countries, setCountries] = useState([])
  const [query, setQuery] = useState('')
  const [show, setShow] = useState(false)

  const handleChangeSearch = (e) => {
    setQuery(e.target.value)
  }

  useEffect(() => {
    const url = `https://restcountries.eu/rest/v2/name/${query}`
    axios.get(url).then((res) => {
      setCountries(res.data)
    })
  }, [query])

  return (
    <div>
      <label htmlFor='query'>Find countries : </label>
      <input type='text' value={query} onChange={handleChangeSearch} />
      {countries.length > 10 && (
        <p>Too many matches, please specify another filter.</p>
      )}
      {countries.length <= 10 &&
        countries.length > 1 &&
        countries.map(({ name, population, capital, languages, flag }) => (
          <div key={name}>
            <hr />
            <h1>
              {name}
              <button onClick={() => setShow(!show)}>
                {show ? 'show less' : 'show more'}
              </button>{' '}
            </h1>

            {show && (
              <div>
                <h4>Population : {population}</h4>
                <h4>Capital : {capital}</h4>
                <ul>
                  {languages.map(({ name }) => (
                    <li key={name}>{name}</li>
                  ))}
                </ul>
                <img src={flag} alt={capital} width='300px' />
                <Weather capital={capital} />
              </div>
            )}
          </div>
        ))}

      {countries.length === 1 &&
        countries.map(({ capital, name, population, languages, flag }) => {
          return (
            <div key={name}>
              <h2>{name}</h2>
              <h3>Population : {population}</h3>
              <h3>Capital : {capital}</h3>
              <ul>
                {languages.map(({ name }) => (
                  <li>{name}</li>
                ))}
              </ul>
              <img src={flag} alt={capital} width='300px' />

              <Weather capital={capital} />
            </div>
          )
        })}
    </div>
  )
}

export default App
