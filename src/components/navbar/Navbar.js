import React, { useState, useContext } from 'react'
import {RiMenu3Line, RiCloseLine} from 'react-icons/ri';
import { Link, useNavigate } from 'react-router-dom'
import Notify from '../notify/Notify'
import { AuthContext } from '../../context/AuthContext';

// Menu
const Menu = ({ currentUser}) => (
  <ul className='flex justify-between items-center text-xl text-white font-semibold gap-10 pt-2 '>
      {currentUser 
        ? <Link to="/dashboard"><li className='hover:text-blue-400 border-t border-b border-gray-600 rounded-md hover:border-blue-400 py-1 px-1 transition-colors'>Dashboard</li></Link>
        : <Link to="/"><li className='hover:text-blue-400 border-t border-b border-gray-600 rounded-md hover:border-blue-400 py-1 px-1 transition-colors'>Home</li></Link>}
      <Link to="about"><li className='hover:text-blue-400 border-t border-b border-gray-600 rounded-md hover:border-blue-400 py-1 px-1 transition-colors'>About</li></Link>
      <Link to="service"><li className='hover:text-blue-400 border-t border-b border-gray-600 rounded-md hover:border-blue-400 py-1 px-1 transition-colors'>Service</li></Link>
      <Link to="contact"><li className='hover:text-blue-400 border-t border-b border-gray-600 rounded-md hover:border-blue-400 py-1 px-1 transition-colors'>Contact</li></Link>
  </ul>
)

// Menu
const MenuSm = ({ currentUser }) => (
  <ul className=' justify-between list-none items-center text-white dark:text-blue-400 pt-2 pb-6 px-2'>
      {currentUser ? 
        <Link to="/dashboard"><li className='border-t border-b border-gray-600 rounded-md hover:border-blue-400  px-1 py-3 my-3.5 transition-colors' >Dashboard</li></Link>
        : 
        <Link to="/"><li className='border-t border-b border-gray-600 rounded-md hover:border-blue-400  px-1 py-3 my-3.5 transition-colors' >Home</li></Link>
      }
      <Link to="about"><li className='border-t border-b border-gray-600 rounded-md hover:border-blue-400 px-1 pt-3 py-3 mt-3.5 mb-1 transition-colors'>About</li></Link>
      <Link to="service"><li className='border-t border-b border-gray-600 rounded-md hover:border-blue-400 px-1 py-3 my-3.5 transition-colors'>Services</li></Link>
      
      <Link to="contact"><li className='border-t border-b border-gray-600 rounded-md hover:border-blue-400 px-1 pt-3 py-3 mt-3.5 mb-1 transition-colors'>Contact</li></Link>
       
  </ul>
)

// Menu
const MenuMd = ({ currentUser }) => (
  <ul className='  justify-between list-none items-center text-white dark:text-blue-400 pt-2  px-2'>
      {currentUser ?
      <Link to="/"><li className='border-t border-b border-gray-600 rounded-md hover:border-blue-400 px-1 py-5 my-5 transition-colors' >Home</li></Link>
      :
    <Link to="/"><li className='border-t border-b border-gray-600 rounded-md hover:border-blue-400 px-1 py-5 my-5 transition-colors' >Home</li></Link> }
      <Link to="about"><li className='border-t border-b border-gray-600 rounded-md hover:border-blue-400 px-1 py-5 my-5 transition-colors'>About</li></Link>
      <Link to="service"><li className='border-t border-b border-gray-600 rounded-md hover:border-blue-400 px-1 py-5 my-5 transition-colors'>Services</li></Link>
      <Link to="contact"><li className='border-t border-b border-gray-600 rounded-md hover:border-blue-400 px-1 py-5 my-5 transition-colors'>Contact</li></Link>

  </ul>
)

// bg-blue-50 
const Navbar = () => {
  const { accessToken, currentUser, logout } = useContext(AuthContext)
  const [toggleMenu, setToggleMenu] = useState(false);
  const navigate = useNavigate()

  const handleLogout = () => {
    logout()
    navigate('/')
  }

  const NavLg = (
    <>
      <div className=' hidden lg:flex w-full justify-between items-center px-5 py-3 font-family '>
          <Link  to='/'>
            <h2 className='text-3xl text-white  font-bold'>Takudzwa Masawi</h2>
        </Link>
        <div className='flex'>
          <Menu currentUser={currentUser} />
          <div className='flex justify-between items-center text-xl text-white font-semibold  ml-8 pt-2 '>
            {accessToken ? 
            <>
            <button onClick={() => handleLogout()} className='border-gray-600 rounded-lg hover:bg-red-400 bg-red-500 py-1 px-2 transition-colors'>Logout</button>
            </> :
            <>
              <Link to="login"><li className='hover:text-blue-400 border-t border-b border-gray-600 rounded-md hover:border-blue-400 list-none py-1 px-2 transition-colors'>Login</li></Link>
            </>
            }
          </div> 
        </div>
      </div>
    </>
  )

  const NavSm = (
    <div className='flex w-full justify-between font-family  px-1 '>
            <Link to='/'>
              <div className='flex justify-between w-30 h-12 '>
                  <h2 className='text-3xl text-white font-bold '>Takudzwa</h2>
                </div>
            </Link>
              
              <div className='flex items-center gap-3 justify-between'>
                <span className=' text-blue-600  rounded-full pr-2'> 
                  {toggleMenu
                    ? <RiCloseLine className='inline-block border   border-blue-600 rounded-full p-2' size={40} onClick={() => setToggleMenu(false)} /> 
                    : <RiMenu3Line className='inline-block border   border-blue-600 rounded-full p-2' size={40} onClick={() => setToggleMenu(true)}/>
                  }

                  {toggleMenu && (
                      <div className='w-full col-span-1 bg-gray-900  justify-start items-start text-center absolute top-23 right-1 z-10 mt-3 pb-3  border  border-gray-900 shadow-md rounded-md'>
                        <div >
                          <MenuSm currentUser={currentUser}/>
                          <div className='flex justify-center items-center text-xl text-white font-semibold pt-2 pb-6'>
                            {accessToken ? 
                              <>
                              <button onClick={() => handleLogout()} className=' border-gray-600 rounded-lg hover:bg-red-400 bg-red-500 py-2 px-9 transition-colors'>Logout</button>
                              </> :
                              <>
                                <Link to="login"><li className='hover:text-blue-400 border-t border-b border-gray-600 rounded-md hover:border-blue-400 list-none py-2 px-10 transition-colors'>Login</li></Link>
                              </>
                            }
                          </div> 
                        </div>
                      </div>
                  )}
                  
                </span>
              </div>
          </div>
  )

  const NavMd = (
    <div className='flex w-full justify-between px-5 py-3 font-family'>
              <Link to='/'>
                <h2 className=' text-3xl text-white font-bold'>Takudzwa Masawi</h2>
              </Link>
        
              <div className='flex items-center gap-3  justify-between'>
              <span className=' text-blue-600  rounded-full pr-1'> 
                  {toggleMenu
                    ? <RiCloseLine className='inline-block border   border-blue-600 rounded-full p-2' size={40} onClick={() => setToggleMenu(false)} /> 
                    : <RiMenu3Line className='inline-block border   border-blue-600 rounded-full p-2' size={40} onClick={() => setToggleMenu(true)}/>
                  }

                  {toggleMenu && (
                      <div className='bg-gray-900  w-full  col-span-1 justify-start items-start text-center absolute top-23 right-1 z-10 mt-3 pb-3w-full border  border-gray-900 shadow-md rounded-md'>
                        <div >
                          <MenuMd currentUser={currentUser} />
                          <div className='flex justify-center items-center text-xl text-white font-semibold pt-2 pb-6'>
                            {accessToken ? 
                            <>
                            <button onClick={() => handleLogout()} className=' border-gray-600 rounded-lg hover:bg-red-400 bg-red-500 py-2 px-9 transition-colors'>Logout</button>
                            </> :
                            <>
                              <Link to="login"><li className='hover:text-blue-400 border-t border-b border-gray-600 rounded-md hover:border-blue-400 list-none py-2 px-10 transition-colors'>Login</li></Link>
                            </>
                          }
                          </div> 
                        </div>
                      </div>
                  )}
                  
                </span>
              </div>
          </div>
  )


  return (
    <div >
    <nav className=' flex w-full top-0  about-font z-20 fixed pt-4 px-3 shadow-2xl items-center justify-between bg-gray-900  text-white '>

      {/*large screen*/}
      {NavLg }

      <div className='hidden w-full lg:hidden md:block'>
        {/* medium */}
        {NavMd}
      </div>

      <div className='flex w-full md:hidden'>
        {/* small */}
        {NavSm}
      </div>
    </nav>
    <Notify />
  </div>
  )
}

export default Navbar