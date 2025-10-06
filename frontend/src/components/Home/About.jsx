import React from 'react'
import Section from '../common/Section'

const About = () => {
    return (
        <Section
            id='about'
            title='About me'
            // subtitle='Short intro about me!'
            className=''
        >

            <div className='bg-amber-500 w-full flex items-start justify-between space-x-20 p-4'>
                <div className="left w-[25%] rounded-2xl">
                    <img className='overflow-hidden object-cover object-center w-full rounded-2xl' src="https://res.cloudinary.com/dqhhryg7n/image/upload/v1744824614/WhatsApp_Image_2025-04-16_at_22.54.16_138d98f9_ckobsw.jpg"
                        alt="face" />
                </div>
                <div className="right w-[75%] bg-teal-800 flex flex-col justify-between items-start h-full space-y-10">
                    <div className='font-normal text-xl leading-10'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita veniam similique sit inventore dicta? Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum qui pariatur culpa delectus </div>
                    <div>cards.</div>
                    <div>tools i use!</div>
                </div>
            </div>
        </Section>
    )
}

export default About

const Card = () => {
    return (
        <div className=''>
<div className="">
    
</div>
<h2></h2>
<div className=""></div>
        </div>
    )
}