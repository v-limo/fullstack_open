import React from 'react'

function LoginForm({
  username,
  password,
  setUsername,
  setPassword,
  handleLogin,
}) {
  return (
    <div>
      <h1>Login in to application</h1>
      <form action='' onSubmit={handleLogin}>
        <div>
          <label>Username : </label>
          <input
            type='text'
            value={username}
            name='Username'
            onChange={({ target }) => setUsername(target.value)}
          ></input>
        </div>
        <br />
        <div>
          <label>Password : </label>
          <input
            type='password'
            value={password}
            name='Password'
            onChange={({ target }) => setPassword(target.value)}
          ></input>
        </div>

        <div>
          <button type='submit' className='btn-info'>
            Login
          </button>
        </div>
      </form>
    </div>
  )
}

export default LoginForm
