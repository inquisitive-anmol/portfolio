import React from 'react'
import Skills from '../Skills'
import Contact from '../Contact'
import FeaturedProjects from './FeaturedProjects'
import Hero from '../Hero/Hero'
import About from './About'

const Home = () => {
  return (
    <div className='w-full'>
      <Hero />
      {/* <Skills /> */}
      <About />
      <FeaturedProjects />
      <Contact />
    </div>
  )
}

export default Home
