import React from 'react'
import Flex from '../components/layouts/Flex'
import Img from '../components/layouts/Img'
import registration from '../assets/registration.png'
import Input  from '../components/layouts/Input'

const Registration = () => {
  return (
        <Flex className='w-screen h-screen'>
            <Flex className='w-[60%] flex-col justify-center items-center'>
                <h1 className='text-[#11175D] font-nunito text-4xl font-bold'>Get started with easily register</h1>
                <p className='font-nunito text-xl font-normal text-[#808080]'>Free register and you can enjoy it</p>
                <Input type='text'/>
            </Flex>
            <Img src={registration} className='w-[40%]' imgClassName='w-full h-full'/>
        </Flex>
  )
}

export default Registration