import React from 'react'
import Flex from '../components/layouts/Flex'
import Img from '../components/layouts/Img'
import login from '../assets/login.png'
import google from '../assets/google.png'
import Input from '../components/layouts/Input'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <Flex className='w-screen h-screen'>
        <Flex className='flex-col w-[60%] justify-center items-center'>
            <h1 className='text-[#03014C] font-nunito text-4xl font-bold'>Login to your account!</h1>
            <Flex className='mt-8 gap-2 border-2 py-5 px-7 rounded-lg'>
                <Img src={google}/>
                <p className='text-[#03014C] text-sm font-semibold'>Login with Google</p>
            </Flex>
                <Input type='text' label='Email Address'/>
                <Input type='password' label='Password'/>
                <button className='py-5 w-[368px] mt-12 text-white bg-[#5F35F5] rounded-lg'>Login to Continue</button>
                <p className=' mt-9 font-nunito text-[#03014C] text-[13px] font-normal'>Don’t have an account ? <span className='text-[#EA6C00] cursor-pointer'><Link to="/registration">Sign up</Link></span></p>
        </Flex>
        <Img src={login} className='w-[40%]' imgClassName='w-full h-full'/>
    </Flex>
  )
}

export default Login