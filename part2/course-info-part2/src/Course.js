import React from 'react'


const Course = ({ courses }) => {
  return (
    <div >
      {courses.map(({ name, id, parts }) => (
        <div key={id}>
          <Header name={name} />
          <Content parts={parts} />
        </div>
      ))}
    </div>
  )
}

const Header = ({ name }) => {
  return <h1>{name}</h1>
}

const Content = ({ parts }) => {
  return (
    <div>
      <Part parts={parts} />
      <Total parts={parts} />
    </div>
  )
}

const Part = ({ parts }) => {
  return (
    <div>
      {parts.map(({ name, exercises, id }) => (
        <p key={id}>
          {name} : {exercises}
        </p>
      ))}
    </div>
  )
}

const Total = ({ parts }) => (
  <h4>
    Total number of exercises : {parts.reduce((s, p) => s + p.exercises, 0)}
  </h4>
)

export default Course
