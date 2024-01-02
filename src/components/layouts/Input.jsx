import React from 'react'

const Input = ({type}) => {
  return (
    <div>
        <label htmlFor=''>Email Address</label>
        <input type={type} className='border border-gray-500 py-3 px-10'/>
    </div>
  )
}

export default Input