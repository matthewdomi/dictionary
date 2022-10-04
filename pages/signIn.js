import React from 'react'
import {FcGoogle} from 'react-icons/fc'
import {AiFillFacebook} from 'react-icons/ai'

import loginImg from '../public/images/12.jpg'
import Image from 'next/image'

export default function SignIn() {
  return (
    <div className='relative w-full h-screen  bg-zinc-900/90'>
        <div className='absolute w-full h-full object-cover mix-blend-overlay' width={700} height={500} src={loginImg} alt="/"></div>
    

     <div className='flex justify-center items-center rounded-2xl h-full'>
        <form className='max-w-[400px]  w-full mx-auto bg-white p-6 rounded-3xl h-5/6 '>
            <h2 className='text-4xl text-indigo-600 font-bold text-center'>Sign In</h2>
            <div className='flex justify-center mt-4'>
                <p className='border cursor-pointer shadow-lg hover:shadow-xl px-6 py-2 relative flex items-center'><AiFillFacebook className='mr-2' /> Facebook</p>
                <p className='border cursor-pointer shadow-lg hover:shadow-xl px-6 py-2 relative flex items-center'><FcGoogle className='mr-2' /> Google</p>
            </div>
            <div className='flex flex-col mb-4 mt-9'>
                {/* <label>Username</label> */}
                <input className='border relative outline-indigo-500  rounded-2xl bg-gray-100 p-2' type="text" placeholder='Username'/>
            </div>
            <div className='flex flex-col mb-4 mt-7 '>
                {/* <label>Password</label> */}
                <input className='border outline-indigo-500 rounded-2xl relative bg-gray-100 p-2' type="password" placeholder='Password'/>
            </div>
            <button className=' w-40 py-2 mt-4 hover:bg-indigo-600 hover:text-white rounded-2xl relative outline outline-indigo-600 hover:outline-none hover:duration-700  font-semibold text-indigo-500'>Sign In</button>
            <p className='flex items-center mt-6'><input className='mr-2' type="checkbox"  />Remember Me</p>
            <p className='text-center mt-6'>Not a member? <button className='animate-pulse hover:underline-indigo-600 hover:underline' 
            href='/pages/signup.js'
            >Sign up now</button></p>
        </form>
    </div>
    </div>
  )
}