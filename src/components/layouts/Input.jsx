import React from 'react'

const Input = ({label,type,name,value,onChange}) => {
  return (
    <div className='mt-[53px] relative font-nunito'>
        <label htmlFor='' className='absolute top-[-11px] left-11 bg-white px-2 text-[#11175D] text-[14px] font-semibold'>{label}</label>
        <input type={type} name={name} value={value} onChange={onChange} className='border-2 border-[#11175D] rounded-[8px] py-[26px] px-[53px] w-[368px]'/>
    </div>
  )
}

export default Input