import React from 'react'

const ErrorMsg = ({msg}) => {
  return (
    <p className='text-base text-red-600 font-medium'>{msg}</p>
  )
}

export default ErrorMsg