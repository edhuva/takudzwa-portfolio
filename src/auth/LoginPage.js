import React, { useState, useContext } from 'react'
import { AuthContext } from '../context/AuthContext';
import { useNavigate, useLocation } from 'react-router-dom';
import { motion } from "framer-motion";
import { fadeIn } from "../utils/variants";
import useAxios from '../hooks/useAxios'
import GenerateBreadCumb from '../components/breadcumb/GenerateBreadCumb';

const LoginPage = ({ onHomePage }) => {

  const { login } = useContext(AuthContext)
  const navigate = useNavigate()
  const axiosInstance = useAxios(navigate)
  const location = useLocation()

  const wasKickedOut = location.state?.wasKickedOut;

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [isError, setIsError] = useState(null)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsLoading(true)
    setIsError(null)

    try {
      //Authenticate user
      const response = await axiosInstance.post('/auth/login', { email, password })

      if (response?.data?.accessToken) {  
        login(response.data) //Store the token in AuthContext
        navigate('/dashboard') //navigate to the home page
      }
    } catch (err) {
      if (err?.response?.data?.message) {
        setIsError(err.response.data.message)
      } else {
        setIsError('Error Login')
      }
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <section className={`flex flex-col min-h-screen justify-center px-auto md:px-24 pb-24 md:pt-24 pt-12 mt-4 md:mt-16 bg-black bg-opacity-80 `} id="about" >
      <div className='px-6 md:px-0'>
        {!onHomePage && <GenerateBreadCumb />}
      </div>

      <motion.div
        variants={fadeIn("left", 0.8) }
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.7 }}
        className={`md:mx-auto justify-center mx-auto mb-12 border-b-8 border-blue-500 rounded block ${onHomePage ? 'border-t-4' : ''}`}
      >
        <h2 className='text-5xl mb-3 text-white font-bold'>Login</h2>
      </motion.div>

      <div className='container  mx-auto p-6 max-w-md'>
        {wasKickedOut && (
          <p className="text-yellow-400 text-center mb-4">
            Your session expired. Please log in again.
          </p>
        )}
        {isLoading && <p className='text-blue-500 text-center mb-4'>Logging in...</p>}
        {isError && <p className='text-red-500 text-center mb-4'>{isError}</p>}
        <form 
        onSubmit={handleSubmit} className="bg-gray-800 p-6 border border-gray-700 rounded-lg">
          <div className='mb-4'>
            <label htmlFor='email' className='block text-gray-300 font-semibold mb-2'>
              Email
            </label>
            <input id='email' type='email' placeholder='Enter your email' 
            value={email} onChange={(e) => setEmail(e.target.value)} 
            required className='w-full text-gray-300 bg-gray-700 p-3 border border-gray-600 rounded-lg focus:ring focus:ring-blue-300'/>
          </div>
          
          <div className='mb-6'>
            <label htmlFor='password' className='block text-gray-300 font-semibold mb-2'>Password</label>
            <input id='password' type='password' placeholder='Enter your password' 
            value={password} onChange={(e) => setPassword( e.target.value)} 
            required className='w-full text-gray-300 bg-gray-700 p-3 border border-gray-600 rounded-lg focus:ring focus:ring-blue-300'/>
          </div>
          
          <button type='submit' disabled={isLoading} className={`w-full py-3 text-white font-semibold rounded-lg ${isLoading 
            ? 'bg-blue-400 cursor-not-allowed' : 'bg-blue-500 hover:bg-blue-600'} transition-colors`}>
              {isLoading ? "Logging in..." : "Login"}
          </button>
        </form>
      </div>
    </section>
  )
}

export default LoginPage