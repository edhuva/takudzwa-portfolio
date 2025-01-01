import React from 'react'

const RegisterPage = () => {
  return (
    <section className='main-section'>
      <h2>Register</h2>
      <form>
        <input type='text' placeholder='Name' required />
        <input type='email' placeholder='Email' required />
        <input type='password' placeholder='Password' required />
        <button type='submit'>Submit</button>
      </form>
    </section>
  )
}

export default RegisterPage
