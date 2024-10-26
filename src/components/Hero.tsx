import React from 'react'
import Navbar from "@/components/Navbar"

const Hero = () => {
  return (
    <div id='hero' className='min-h-screen bg-no-repeat bg-[url(/picture.jpg)]  bg-cover'
    style={{backgroundSize:'40%', backgroundPosition:'left 100px top 250px'}}
    >
        <Navbar/>
        <div className='container grid lg:grid-cols-2 h-[calc(100vh-60px)]'>
            <div className='hidden lg:block'></div>
            <div className='text-[80px] sm:text[100px] font-bold leading-tight flex justify-center items-center'>
                <div className='text-cyan-400'>
                    <p data-aos="zoom-in-up">Hi!</p>
                    <p data-aos="zoom-in-up">I'm</p>
                    <p data-aos="zoom-in-up">Umaimah</p>
                </div>
            </div>
        </div>
      
    </div>
  )
}

export default Hero
