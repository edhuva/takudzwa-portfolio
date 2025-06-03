import React, { useEffect, useState } from 'react'
import { PulseLoader } from 'react-spinners'
import { toast } from 'react-toastify';
import { sendContact } from '../../utils/Utils'
import { motion } from 'framer-motion'
import { fadeIn } from '../../utils/variants'
import GenerateBreadCumb from '../breadcumb/GenerateBreadCumb';

//input regex
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
const NAME_REGEX = /^[A-z ]{3,24}$/

const Footer = ({ onHomePage }) => {

  const [name, setName] = useState('');
  const [validName, setValidName] = useState(false)
  const [email, setEmail] = useState('');
  const [validEmail, setValidEmail] = useState(false)
  const [message, setMessage] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [error, setError] = useState('')

  useEffect(() => {
    setValidName(NAME_REGEX.test(name))
  }, [name])

  useEffect(() => {
    setValidEmail(EMAIL_REGEX.test(email))
  }, [email])

  useEffect(() => {
    if (isSuccess) {
        setName('')
        setEmail('')
        setMessage('')
        toast('✅ Successfuly Sent!', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            color: "blue"
          });
    }
    return () => toast()
  }, [isSuccess])

  useEffect(() => {
    if (error) {
        setName('')
        setEmail('')
        setMessage('')
        toast(`😟 ${error} ❗`, {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            color: "blue"
          });
    }
    return () => toast()
  }, [error])

  const created = new Date().toLocaleString('en-SA', { year: 'numeric' });

  const handleNameInput = e => setName(e.target.value)
  const handleEmailInput = e => setEmail(e.target.value)
  const handleMessageInput = e => setMessage(e.target.value)

  let contentloading;
  contentloading = isLoading && <PulseLoader color="#81AFDD" style={{margin: '0em 0em 0em 5em'}} />;

  const handleSubmitContact = async () => {
    setError(null)
    setIsLoading(true)
    setIsSuccess(false)
    try {
      await sendContact({validName, name, validEmail, email, message})
      setIsLoading(false)
      setIsSuccess(true)
    } catch (e) {
      setIsLoading(false)
      setError(e.message)
    }

}
  return (
    <section className={`${onHomePage ? 'mt-48 bottom-0' : 'min-h-screen mt-10'}   flex flex-col justify-center py-24 bg-black bg-opacity-80`} id ="contact">
      <div className='px-6 md:px-24'>
        {!onHomePage && <GenerateBreadCumb />}
      </div>

      <div className='flex justify-center'>
          <motion.div
            variants={fadeIn("left", 0.8)}
            initial="hidden"
            whileInView={"show"}
            viewport={{once: false, amount: 0.7}} 
          className={`md:mx-auto justify-center mx-auto mb-12 border-b-8 border-blue-500 rounded ${onHomePage ? 'border-t-4' : ''}`}>
            <h2 className='text-5xl mb-3 text-white font-bold'>Contact Me </h2>
          </motion.div>
        </div>

        <div className=' flex flex-col mx-auto justify-center  md:mt-1 mb-20'>

          <div className='flex flex-col md:flex-row '>
            <div className='flex justify-center text-white md:mt-20'>
              
              <div>
                <h3 className='text-2xl lg:text-4xl font-semibold tracking-wider text-center px-1 md:px-5 lg:px-10 py-2 md:py-6'>Have any questions?</h3>
                
                <h3 className='text-xl   font-semibold tracking-wider text-center px-1 md:px-5 lg:px-10 mb-4'>Look forward to hearing from you.</h3>
        
                <h3 className='text-md md:text-2xl  font-semibold tracking-wider text-center md:text-start px-1 md:px-5 lg:px-10 mb-3'><span>Email:</span> generalstiffler@gmail.com</h3>
                <h3 className='text-xl md:text-2xl  font-semibold tracking-wider text-center px-1 md:px-5 lg:px-10 '><span>Tel:</span> +27 78 978 5712</h3>

              </div>
            </div>

            <div className='flex flex-1 flex-col justify-center mt-10 md:p-3 '>
              <form className='flex max-w-sm flex-col flex-1  justify-center items-center p-3  bg-gray-800 border border-gray-700  rounded-md ' onSubmit={e => e.preventDefault()} >
                  <div className='flex justify-center mt-2 md:mt-1 mb-1'>
                    {contentloading}
                  </div>

                  <label htmlFor='name' className='rounded-md   my-5  shadow-md'>
                  <input id='name' name='name' autoComplete='off' placeholder='Name' type='text' 
                  value={name} onChange={handleNameInput} 
                  className='p-3 w-80  flex-1 text-md rounded-md text-gray-300 bg-gray-700 border border-gray-600'/>
                  </label>
                    
                  <label htmlFor='email' className=' my-5 rounded-md shadow-md' >
                    <input id='email' name='email' autoComplete='off' placeholder='Email' type='text' 
                    value={email} onChange={handleEmailInput} 
                    className='p-3 w-80   flex-1 text-md rounded-md text-gray-300 bg-gray-700 border border-gray-600'/>
                  </label>
                  <label htmlFor='message' className=' my-5 rounded-md shadow-md'>
                    <textarea id='message' name='message' autoComplete='off' placeholder='Message' type='text' 
                    value={message} onChange={handleMessageInput} 
                    className='p-3 w-80   flex-1 text-md rounded-md text-gray-300 bg-gray-700 border border-gray-600 h-32'/>
                  </label>
                  <div className='flex justify-center items-center pt-1 px-2'>
                    <div className='flex-1 '> 
                      <button className={`text-md text-white w-80 py-2 px-3 rounded-full  font-semibold ${isLoading 
            ? 'bg-blue-400 cursor-not-allowed' : 'bg-blue-500 hover:bg-blue-600'} transition-colors`} 
                      onClick={handleSubmitContact} 
                      >Send</button>
                    </div>
                  </div>
                </form>
            </div>
          </div>
        </div>

        { onHomePage ? 
          <div> 
            <footer className='flex justify-center  rounded bottom-0'>
                <div className='flex justify-center items-baseline text-sm md:text-md tracking-wider mt-24 pb-2 md:pb-2 text-white'>
                    <p>© {created} edhuva, All rights reserved.</p>
                </div>
            </footer>
          </div>
          : ''
        }
    </section>
  )
}

export default Footer
