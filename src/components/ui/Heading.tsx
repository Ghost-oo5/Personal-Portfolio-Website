import { Props } from '@/Types/types'
import React from 'react'

const Heading = ({children}:Props) => {
  return (
    <div className='text-3xl font-bold'>
    {children}
    </div>
  )
}

export default Heading