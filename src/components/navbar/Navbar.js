import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className='navbar'>
      <h1 className='logo'><Link to='/'>ShopMax</Link></h1>
      <ul className='navLinks'>
        <Link to='/'><li>Home</li></Link>
        <Link to='/cart'><li>Cart</li></Link>
        <Link to='/login'><li>Login</li></Link>
        <Link to='/register'><li>Register</li></Link>
      </ul>
    </nav>
  )
}

export default Navbar
