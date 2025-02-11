import React, { useEffect, useState } from 'react'
import { PulseLoader } from 'react-spinners'
import { toast } from 'react-toastify';
import { sendContact } from '../../utils/Utils'

//input regex
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
const NAME_REGEX = /^[A-z ]{3,24}$/

const Footer = () => {

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
    <section className='mt-48  bottom-0 bg-blue-200 flex flex-col justify-center py-24 ' id ="contact">

      <div className='   flex justify-center'>
        <div className='flex flex-col justify-center'>
          <h2 className='text-5xl mb-10 text-center  header-font' >Contact Us</h2>
          <div className='px-6'>
            <div className='w-25  h-1 bg-white mx-auto'></div>
          </div>
        </div>
        </div>

        <div className=' flex flex-col mx-auto justify-center mt-9 md:mt-1 mb-20'>

          <div className='flex flex-col md:flex-row '>
            <div className='flex justify-center   parag-color mt-20'>
              
              <div>
                <h3 className='text-2xl lg:text-4xl font-semibold tracking-wider text-center px-1 md:px-5 lg:px-10 py-2 md:py-6'>Have any questions?</h3>
                
                <h3 className='text-xl   font-semibold tracking-wider text-center px-1 md:px-5 lg:px-10 mb-4'>We look forward to hearing from you.</h3>
        
                <h3 className='text-md md:text-2xl  font-semibold tracking-wider text-center md:text-start px-1 md:px-5 lg:px-10 mb-3'><span>Email:</span> execdirector@mxinfinite.co.za</h3>
                <h3 className='text-xl md:text-2xl  font-semibold tracking-wider text-center px-1 md:px-5 lg:px-10 '><span>Tel:</span> +27 83 947 8853</h3>

              </div>
            </div>

            <div className='flex flex-1 flex-col justify-center mt-10 md:p-3'>
              
              <form className='flex max-w-md flex-col flex-1 justify-center items-center md:mx-2 lg:mx-10 pb-3 md:py-8 md:px-8  border border-edCol-900 shadow-md dark:border-gray-200 rounded-md ' onSubmit={e => e.preventDefault()} >
                <div className='flex justify-center mt-2 md:mt-1 mb-1'>
                  {contentloading}
                </div>

                <label htmlFor='name' className='rounded-md border border-gray-400  my-5  shadow-md'>
                <input id='name' name='name' autoComplete='off' placeholder='Name' type='text' 
                value={name} onChange={handleNameInput} 
                className='px-3 border-2 w-80 md:w-96 py-2 flex-1 text-xl rounded-md dark:text-gray-500'/>
                </label>
                  
                <label htmlFor='email' className=' my-5 rounded-md border border-gray-400 shadow-md' >
                  <input id='email' name='email' autoComplete='off' placeholder='Email' type='text' 
                  value={email} onChange={handleEmailInput} 
                  className='px-3 border-2 w-80 md:w-96 py-2 flex-1 text-xl rounded-md dark:text-gray-500'/>
                </label>
                <label htmlFor='message' className=' my-5 rounded-md border border-gray-400 shadow-md'>
                  <textarea id='message' name='message' autoComplete='off' placeholder='Message' type='text' 
                  value={message} onChange={handleMessageInput} 
                  className='px-3 border-2 w-80 md:w-96 py-2 flex-1 text-xl h-40 rounded-md dark:text-gray-500'/>
                </label>
                <div className='flex justify-center items-center pt-1 px-2'>
                  <div className='flex-1 '> 
                    <button className='text-xl w-80 py-2 px-3 rounded-full hover:border-blue-400 bg-black te hover:text-blue-500 text-white dark:bg-white dark:text-gray-800  dark:hover:text-blue-500 font-semibold' 
                    onClick={handleSubmitContact} 
                    >Send</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>

        <div> 
              <footer className='flex justify-center  rounded bottom-0'>
                  <div className='flex justify-center items-baseline text-sm md:text-md tracking-wider mt-24 pb-2 md:pb-2'>
                      <p>© {created} mx infinite, All rights reserved.</p>
                  </div>
              </footer>
            </div>
    </section>
  )
}

export default Footer
