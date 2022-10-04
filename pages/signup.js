import React from 'react'
import {FcGoogle} from 'react-icons/fc'
import {AiFillFacebook} from 'react-icons/ai'

import loginImg from '../public/images/12.jpg'
import Image from 'next/image'

export default function SignUp() {
  return (
    <div className='relative w-full h-screen  bg-zinc-900/90'>
        <div className='absolute w-full h-full object-cover mix-blend-overlay' width={700} height={500} src={loginImg} alt="/"></div>
    

     <div className='flex justify-center items-center rounded-2xl h-full'>
        <form className='max-w-[400px]  w-full mx-auto bg-white p-6 rounded-3xl h-5/6 '>
            <h2 className='text-4xl text-indigo-600 font-bold text-center'>Sign Up</h2>
            <div className='flex flex-col mb-4 mt-5'>
                {/* <label>Username</label> */}
                <input className='border relative outline-indigo-500  rounded-2xl bg-gray-100 p-2' type="text" placeholder='first name'/>
            </div>

            <div className='flex flex-col mb-4 mt-5'>
                {/* <label>Username</label> */}
                <input className='border relative outline-indigo-500  rounded-2xl bg-gray-100 p-2' type="text" placeholder='last name'/>
            </div>
            <div className='flex flex-col mb-4 mt-5'>
                {/* <label>Username</label> */}
                <input className='border relative outline-indigo-500  rounded-2xl bg-gray-100 p-2' type="text" placeholder='email'/>
            </div>
            <div className='flex flex-col mb-4 mt-5 '>
                {/* <label>Password</label> */}
                <input className='border outline-indigo-500 rounded-2xl relative bg-gray-100 p-2' type="password" placeholder='password'/>
            </div>
            <div className='flex flex-col mb-4 mt-5 '>
                {/* <label>Password</label> */}
                <input className='border outline-indigo-500 rounded-2xl relative bg-gray-100 p-2' type="password" placeholder='repeat password'/>
            </div>
            <button className=' w-40 py-1 mt-2 hover:bg-indigo-600 hover:text-white rounded-2xl relative outline outline-indigo-600 hover:outline-none hover:duration-700  font-semibold text-indigo-500'>Sign Up</button>
            <p className='text-center mt-2'>I have an account. <button className='animate-pulse hover:underline-indigo-600 hover:underline' href='/pages/signIn.js'>Sign In now</button></p>

        </form>
    </div>
    </div>
  )
}