import React from 'react'

const LoginPage = () => {
  return (
    <sectin className='main-section'>
      <h2>Login</h2>
      <form>
        <input type='email' placeholder='Email' required />
        <input type='password' placeholder='Password' requireq />
        <button type='submit'>Login</button>
      </form>
    </sectin>
  )
}

export default LoginPage
