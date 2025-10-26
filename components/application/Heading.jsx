import React from 'react'

const Heading = ({title,subTitle}) => {
  return (
    <div className='text-center'>
        <h1 className='text-3xl font-bold'>{title}</h1>
        <p>{subTitle}</p>
    </div>
  )
}

export default Heading