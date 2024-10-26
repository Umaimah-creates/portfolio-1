import React from 'react'

const Skills = () => {
  return (
    <div id='skills' className='cotaniner pt-32'>
        <div className='grid md:grid-cols-2 gap-20 items-center'>
            <div data-aos="zoom-in-up">
                <h2 className='text-4xl md:text-5xl text-cyan-600 pl-32' >Skills I have</h2>
                <p className='text-gray-300 pt-2 pl-32'>I have a solid foundation in web development,specializing in HTML,CSS and Typescript. My 
                    experience ectends to using frameworks like React and Next.JS to create dynamic and user-friendly applications.I'm also 
                    profficient with Tailwind CSS for great styling and amazing design.With dedicated learning, I keep myself updated about the latest technologies to improve my skillset and contributing my best to the industry.
                </p>
            </div>
            <div>
                <div className='grid grid-cols-2 text-cyan-300 text-3xl sm:text-4xl'>
                    <div className='space-y-2'>
                        <h2 data-aos="zoom-in-up">Typescript</h2>
                        <h2 data-aos="zoom-in-up">Next.JS</h2>
                        <h2 data-aos="zoom-in-up">React.JS</h2>
                    </div>
                    <div className='space-y-2'>
                        <h1 data-aos="zoom-in-up">Tailwind CSS</h1>
                        <h1 data-aos="zoom-in-up">HTML</h1>
                        <h1 data-aos="zoom-in-up">CSS</h1>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Skills