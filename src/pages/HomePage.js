import React from 'react'
import Hero from '../components/hero/Hero'
// import Category from '../components/service/Service'
import About from '../components/about/About'
import Service from '../components/service/Service'
import Category from '../components/category/Category'
import Footer from '../components/footer/Footer'

const HomePage = () => {
  return (
    <>  
        <Hero />
        <Service onHomePage={true} />
        {/* <Category /> */}
        <Category onHomePage={true} />
        <About onHomePage={true} />
        
        <Footer onHomePage={true} />
    </>
  )
}

export default HomePage
