import React, { useState } from 'react'
import {RiMenu3Line, RiCloseLine} from 'react-icons/ri';
import Notify from '../notify/Notify'

// Menu
const Menu = () => (
  <ul className='flex justify-between items-center text-xl font-semibold gap-10 pt-2 '>
      <a href="#home"><li className='hover:text-blue-400 '>Home</li></a>
      <a href="#about"><li className='hover:text-blue-400 '>About</li></a>
      <a href="#service"><li className='hover:text-blue-400 '>Service</li></a>
      <a href="#contact"><li className='hover:text-blue-400 '>Contact</li></a>
  </ul>
)

// Menu
const MenuSm = () => (
  <ul className='flex-1 justify-between list-none items-center text-white dark:text-blue-400 pt-2 pb-6 px-2'>
      <a href="#home"><li className='border-t border-b border-gray-600 rounded-md hover:border-blue-400  px-1 py-3 my-3.5' >Home</li></a>
      <a href="#about"><li className='border-t border-b border-gray-600 rounded-md hover:border-blue-400 px-1 py-3 my-3.5'>About</li></a>
      <a href="#service"><li className='border-t border-b border-gray-600 rounded-md hover:border-blue-400 px-1 pt-3 py-3 mt-3.5 mb-1'>Service</li></a>
      <a href="#contact"><li className='border-t border-b border-gray-600 rounded-md hover:border-blue-400 px-1 pt-3 py-3 mt-3.5 mb-1'>Contact</li></a>
  </ul>
)

// Menu
const MenuMd = () => (
  <ul className='flex-1  justify-between list-none items-center text-white dark:text-blue-400 pt-2 pb-6 px-2'>
      <a href="#home"><li className='border-t border-b border-gray-600 rounded-md hover:border-blue-400 px-1 py-5 my-5' >Home</li></a>
      <a href="#about"><li className='border-t border-b border-gray-600 rounded-md hover:border-blue-400 px-1 py-5 my-5'>About</li></a>
      <a href="#dervice"><li className='border-t border-b border-gray-600 rounded-md hover:border-blue-400 px-1 py-5 my-5'>Service</li></a>
      <a href="#contact"><li className='border-t border-b border-gray-600 rounded-md hover:border-blue-400 px-1 py-5 my-5'>Contact</li></a>

  </ul>
)

// bg-blue-50 
const Navbar = () => {

  const [toggleMenu, setToggleMenu] = useState(false);

  const NavLg = (
    <>
      <div className=' hidden lg:flex w-full justify-between items-center px-5 py-3 font-family '>
          <a  href='#header'>
            <h2 className='text-3xl text-gray-700  font-bold'>MX Infinite</h2>
        </a>
        <div className='flex'>
          <Menu />
        </div>
      </div>
    </>
  )

  const NavSm = (
    <div className='flex w-full justify-between font-family  px-1 '>
            <a href='#header'>
              <div className='flex justify-between w-30 h-12 '>
                  <h2 className='text-3xl text-gray-700 font-bold '>MX Infinite</h2>
                </div>
            </a>
              
              <div className='flex items-center gap-3 justify-between'>
                <span className=' text-blue-600  rounded-full pr-2'> 
                  {toggleMenu
                    ? <RiCloseLine className='inline-block border   border-blue-600 rounded-full p-2' size={40} onClick={() => setToggleMenu(false)} /> 
                    : <RiMenu3Line className='inline-block border   border-blue-600 rounded-full p-2' size={40} onClick={() => setToggleMenu(true)}/>
                  }

                  {toggleMenu && (
                      <div className='w-full  min-h-screen col-span-1 bg-gray-900  justify-start items-start text-center absolute top-23 right-1 z-10 mt-3 pb-3  border  border-gray-900 shadow-md rounded-md'>
                        <div className=''>
                          <MenuSm />
                        </div>
                      </div>
                  )}
                  
                </span>
              </div>
          </div>
  )

  const NavMd = (
    <div className='flex w-full justify-between px-5 py-3 font-family '>
              <a href='/'>
                <h2 className=' text-3xl text-gray-700 font-bold'>MX Infinite</h2>
              </a>
        
              <div className='flex items-center gap-3  justify-between'>
              <span className=' text-blue-600  rounded-full pr-1'> 
                  {toggleMenu
                    ? <RiCloseLine className='inline-block border   border-blue-600 rounded-full p-2' size={40} onClick={() => setToggleMenu(false)} /> 
                    : <RiMenu3Line className='inline-block border   border-blue-600 rounded-full p-2' size={40} onClick={() => setToggleMenu(true)}/>
                  }

                  {toggleMenu && (
                      <div className='bg-gray-900  w-full min-h-screen col-span-1 justify-start items-start text-center absolute top-23 right-1 z-10 mt-3 pb-3w-full border  border-gray-900 shadow-md rounded-md'>
                        <div >
                          <MenuMd />
                        </div>
                      </div>
                  )}
                  
                </span>
              </div>
          </div>
  )


  return (
    <div >
    <nav className=' flex w-full top-0 bg-blue-300 z-20 fixed pt-4 px-3 shadow-2xl items-center justify-between dark:bg-edCol-900  dark:text:white'>

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