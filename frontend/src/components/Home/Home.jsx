import React from 'react'
import Skills from '../Skills'
import Contact from '../Contact'
import FeaturedProjects from './FeaturedProjects'
import Hero from '../Hero/Hero'

const Home = () => {
  return (
    <div className='w-full'>
        <Hero />
        <Skills />
        <FeaturedProjects />
        <Contact />
    </div>
  )
}

export default Home
