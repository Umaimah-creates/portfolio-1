import React from 'react'
import Heading from '@/components/Heading'
import Card from '@/components/Card'

const data=[
    {
        id:0,
        title:'Calculator',
        desc:'A simple calculator made with HTML CSS to strengthen the foundation',
        img:'/calculator.PNG',
        tags:['HTML','CSS','Typescript']
    },
    {
        id:1,
        title:'Countdown Timer',
        desc:'A countdown timer,created using Next.JS and Tailwind CSS',
        img:'/timer.PNG',
        tags:['Next.JS','Tailwind',]

    },
    {
        id:2,
        title:'Photography Web',
        desc: 'A website created using a figma template',
        img:'/figma.PNG',
        tags:['Next.JS','Tailwind']
    },
    {
        id:3,
        title:'Web Template',
        desc: 'A website template created with HTML and CSS',
        img:'/template.PNG',
        tags:['HTML','CSS']

    }

]

const Projects = () => {
  return (
    <div id='projects' className='container pt-32 '>
        <Heading title='My Projects'/>
        <div className='grid gap-10 xl:gap-0 xl:gap-y-10 md:grid-cols-2 lg:grid-cols-3 place-items-center'>
            {data.map((el)=>(<Card 
            key={el.id}
            title={el.title}
            desc={el.desc}
            img={el.img}
            tags={el.tags}
            
            />))}

        </div>
      
    </div>
  )
}

export default Projects
