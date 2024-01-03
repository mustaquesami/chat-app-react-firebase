import React from 'react'
import Flex from '../components/layouts/Flex'
import Img from '../components/layouts/Img'
import registration from '../assets/registration.png'
import Input  from '../components/layouts/Input'
import { Link } from 'react-router-dom'

const Registration = () => {
  return (
        <Flex className='w-screen h-screen'>
            <Flex className='w-[60%] flex-col justify-center items-center'>
                <h1 className='text-[#11175D] font-nunito text-4xl font-bold'>Get started with easily register</h1>
                <p className='font-nunito text-xl font-normal text-[#808080]'>Free register and you can enjoy it</p>
                <Input type='text' label='Email Address'/>
                <Input type='text' label='Full name'/>
                <Input type='password' label='Password'/>
                <button className='py-5 w-[368px] mt-12 text-white bg-[#5F35F5] rounded-[86px]'>Sign up</button>
                <p className=' mt-9 font-nunito text-[#03014C] text-[13px] font-normal'>Already  have an account ? <span className='text-[#EA6C00] cursor-pointer'><Link to="/">Log in</Link></span></p>
            </Flex>
            <Img src={registration} className='w-[40%]' imgClassName='w-full h-full'/>
        </Flex>
  )
}

export default Registration