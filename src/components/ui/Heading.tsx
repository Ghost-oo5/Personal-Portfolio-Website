import React, { ReactNode } from 'react'

interface Props{
    children: ReactNode
}

const Heading = ({children}:Props) => {
  return (
    <div className='text-3xl font-bold'>
    {children}
    </div>
  )
}

export default Heading