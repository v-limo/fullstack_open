import React from 'react'
import ReactDOM from 'react-dom'

const App = () => {
  const course = {
    name: 'half stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
      },
      {
        name: ' Using props to pass data',
        exercises: 7,
      },
      {
        name: 'State of component',
        exercises: 14,
      },
    ],
  }
  return (
    <div>
      <Header course={course.name} />
      <Content parts={course.parts} />
      <Total exercises={course.parts} />
    </div>
  )
}

const Header = ({ course }) => {
  return <h1>{course}</h1>
}

const Content = ({ parts }) => {
  return (
    <div>
      <Part1 part={parts[0]} />
      <Part2 part={parts[1]} />
      <Part3 part={parts[2]} />
    </div>
  )
}

const Total = ({ exercises }) => {
  return (
    <p>
      Number of exercises :
      {exercises[0].exercises + exercises[1].exercises + exercises[2].exercises}
    </p>
  )
}

const Part1 = (props) => {
  const { name, exercises } = props.part
  return (
    <p>
      {name} : {exercises}
    </p>
  )
}
const Part2 = (props) => {
  const { name, exercises } = props.part
  return (
    <p>
      {name} : {exercises}
    </p>
  )
}
const Part3 = (props) => {
  const { name, exercises } = props.part
  return (
    <p>
      {name} : {exercises}
    </p>
  )
}
ReactDOM.render(<App />, document.getElementById('root'))
