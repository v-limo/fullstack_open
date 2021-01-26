import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div style={{ padding: '10px', margin: '2rem' }}>
      <Button value='good' onClickHandler={() => setGood(good + 1)} />
      <Button value='neutral' onClickHandler={() => setNeutral(neutral + 1)} />
      <Button value='bad' onClickHandler={() => setBad(bad + 1)} />
      {neutral || good || bad ? (
        <Statistics good={good} bad={bad} neutral={neutral} />
      ) : (
        <div>
          <h1>Statistics</h1>
          <h3>No feedback yet</h3>
        </div>
      )}
    </div>
  )
}

const Button = ({ value, onClickHandler }) => {
  return (
    <button
      style={{ padding: '1rem', margin: '1rem' }}
      onClick={onClickHandler}
    >
      {value}
    </button>
  )
}

const Statistics = ({ good, neutral, bad }) => {
  return (
    <div>
      <h1>Statistics</h1>
      <table>
        <tbody>
          <Statistic text='Good' value={good} />
          <Statistic text='Neutral' value={neutral} />
          <Statistic text='Bad' value={bad} />
          <Statistic text='All' value={bad + good + neutral} />
          <Statistic
            text='Average'
            value={(good * 1 + bad * -1 + neutral * 0) / (bad + good + neutral)}
          />
          <Statistic
            text='Positive'
            value={(good * 100) / (bad + good + neutral)}
          />
        </tbody>
      </table>
    </div>
  )
}

const Statistic = ({ text, value }) => {
  return (
    <tr>
      <td>{text}</td>
      <td>
        {value} {text === 'Positive' && '%'}
      </td>
    </tr>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
