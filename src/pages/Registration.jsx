import React, { useState } from 'react'
import Flex from '../components/layouts/Flex'
import Img from '../components/layouts/Img'
import registration from '../assets/registration.png'
import Input  from '../components/layouts/Input'
import { Link } from 'react-router-dom'
import ErrorMsg from '../components/layouts/ErrorMsg'

const Registration = () => {
  const [email,setEmail] = useState("");
  const [name,setName] = useState("");
  const [password,setPassword] = useState("");
  const [emailErr,setEmailErr] = useState("");
  const [nameErr,setNameErr] = useState("");
  const [passwordErr,setPasswordErr] = useState("");
  const handleEmail = (e)=>{
    setEmail(e.target.value);
    setEmailErr('');
  }
  const handleName = (e) =>{
    setName(e.target.value);
    setNameErr('');
  }
  const handlePassword = (e) =>{
    setPassword(e.target.value);
    setPasswordErr('');
  }
  const handleSubmit = (e) =>{
    if(email===""){
      setEmailErr("Email is required")
    }else if(!email.match(/^[\w.-]+@([\w-]+\.)+[\w-]{2,4}$/)){
      setEmailErr("Enter valid email address");
    }else if(name===""){
      setNameErr("Name is required");
    }else if(password===""){
      setPasswordErr('Password is required');
    }else{
      console.log(email,name,password);
    }
  }
  return (
        <Flex className='w-screen h-screen'>
            <Flex className='w-[60%] flex-col justify-center items-center'>
                <h1 className='text-[#11175D] font-nunito text-4xl font-bold'>Get started with easily register</h1>
                <p className='font-nunito text-xl font-normal text-[#808080]'>Free register and you can enjoy it</p>
                <Input type='text' name='email' value={email} onChange={handleEmail} label='Email Address'/>
                <ErrorMsg msg={emailErr}/>
                <Input name='name' value={name} onChange={handleName} type='text' label='Full name'/>
                <ErrorMsg msg={nameErr}/>
                <Input name='password' value={password} onChange={handlePassword} type='password' label='Password'/>
                <ErrorMsg msg={passwordErr}/>
                <button onClick={handleSubmit} className='py-5 w-[368px] mt-12 text-white bg-[#5F35F5] rounded-[86px]'>Sign up</button>
                <p className=' mt-9 font-nunito text-[#03014C] text-[13px] font-normal'>Already  have an account ? <span className='text-[#EA6C00] cursor-pointer'><Link to="/">Log in</Link></span></p>
            </Flex>
            <Img src={registration} className='w-[40%]' imgClassName='w-full h-full'/>
        </Flex>
  )
}

export default Registration