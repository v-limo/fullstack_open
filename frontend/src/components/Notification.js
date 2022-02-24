import React from 'react'

function Notification({ message }) {
  return (
    <div
      className={`border-2 rounded border-${message[1]} px-2 m-auto text-${message[1]}`}
    >
      <h5>{message[0]}</h5>
    </div>
  )
}

export default Notification
