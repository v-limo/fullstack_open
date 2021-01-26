import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
]

const App = ({ anecdotes }) => {
  const [selected, setSelected] = useState(5)
  const [points, setPoints] = useState(new Array(anecdotes.length).fill(0))

  const max = points.reduce((p, c) => Math.max(p, c))
  const index = points.indexOf(max)
  console.log(max)

  const handleVote = () => {
    const copy = [...points]
    copy[selected] += 1
    setPoints(copy)
  }

  return (
    <div className='container-fluid w-100 h-100 m-0 p-0 bg-white'>
      <div
        className=' w-50 m-5 mx-auto container  rounded border '
        style={{
          display: 'flex',
          flexDirection: 'column',
          backgroundColor: '#eeeeee',
        }}
      >
        <h3>anecdotes</h3>
        <h6>{anecdotes[selected]}</h6>
        <h6>Has {points[selected]} Votes</h6>
        <div className='row'>
          <button
            className='btn p-1 m-3 col-5 btn-success rounded '
            onClick={handleVote}
          >
            Vote
          </button>
          <button
            className='btn p-1 m-3 col-5 btn-success rounded '
            onClick={() =>
              setSelected(Math.floor(Math.random() * anecdotes.length))
            }
          >
            Next Anecdotes
          </button>
        </div>
        {max > 0 && (
          <>
            <h4>Anecdote with most votes :</h4>
            <h6>{anecdotes[index]}</h6>
            <h6>Votes : {max} Counts</h6>
          </>
        )}
      </div>
    </div>
  )
}

ReactDOM.render(<App {...{ anecdotes }} />, document.getElementById('root'))
