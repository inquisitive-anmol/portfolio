import React from 'react'

const Heading = ({ text, className }) => {
    return (

        <h2 className={`text-3xl lg:text-6xl font-semibold ${className}`}>{text}</h2>

    )
}

export default Heading
