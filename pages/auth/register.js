import React, { useState } from 'react'
import axios from 'axios'
import { useRouter } from 'next/router'

import { FcGoogle } from 'react-icons/fc'
import { AiFillFacebook } from 'react-icons/ai'

import loginImg from '../../public/images/12.jpg'
import Image from 'next/image'
import Button from '../../components/button'
import Link from 'next/link'

export default function SignUp() {
    const [data, setData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: "",
    })

    const [error, setError] = useState("")

    const router = useRouter();

    const handleChange = (e) => {
        setData({
            ...data,
            [e.target.name]: e.target.value,
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        const { confirmPassword, email, firstName, lastName, password } = data;

        if (
            firstName === "" &&
            lastName === "" &&
            email === "" &&
            password === "" &&
            confirmPassword === ""

        ) {
            setError("Please provide all the information")
            return;
        }

        if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
            setError("Please enter a valid email address")
            return;
        }

        if (password !== confirmPassword) {
            setError("Password do not match")
            return;
        }


        try {
            await axios.post(`${process.env.NEXT_PUBLIC_BASE_URL}/api/auth/register`, data)
            router.push("/login")

        } catch (error) {
            setError(error.message)

        }

    }


    return (
        <div className="min-h-screen flex bg-white/5 justify-center items-center  ">


            <div className="md:w-1/3 bg-white  p-4 rounded-lg shadow-2xl  outline outline-violet-200 shadow-violet-400 ">



                <h1 className="text-violet-600 text-3xl  items-center justify-center flex  font-bold mb-4">
                    Sign Up</h1>
                {error && <p className='text-red-500'>{error}</p>}
                <form
                    onSubmit={handleSubmit}
                    className='max-w-[400px]  w-full mx-auto bg-white p-6 rounded-3xl  '>
                    <div className='flex justify-center mt-4'>
                        <p className='border cursor-pointer shadow-lg hover:shadow-xl px-6 py-2 relative flex items-center'><AiFillFacebook className='mr-2' /> Facebook</p>
                        <p className='border cursor-pointer shadow-lg hover:shadow-xl px-6 py-2 relative flex items-center'><FcGoogle className='mr-2' /> Google</p>
                    </div>
                    <div className='flex flex-col mb-4 mt-9'>
                        {/* <label>Username</label> */}
                        <input
                            className="text-gray-600 rounded-lg px-2 py-1 outline-none bg-slate-200"
                            type="text"
                            placeholder='first name'
                            id='firstName'
                            name="firstName"
                            value={data.firstName}
                            onChange={handleChange}
                        />
                    </div>

                    <div className='flex flex-col mb-4 mt-5'>
                        {/* <label>Username</label> */}
                        <input
                            className="text-gray-600 rounded-lg px-2 py-1 outline-none bg-slate-200"
                            type="text"
                            placeholder='last name'
                            id='lastName'
                            name='lastName'
                            value={data.lastName}
                            onChange={handleChange}
                        />
                    </div>

                    <div className='flex flex-col mb-4 mt-5'>
                        {/* <label>Username</label> */}
                        <input
                            className="text-gray-600 rounded-lg px-2 py-1 outline-none bg-slate-200"
                            type="text"
                            placeholder='example@gmail.com'
                            id='email'
                            name='email'
                            value={data.email}
                            onChange={handleChange}
                        />
                    </div>

                    <div className='flex flex-col mb-4 mt-5 '>
                        {/* <label>Password</label> */}
                        <input
                            className="text-gray-600 rounded-lg px-2 py-1 outline-none bg-slate-200"
                            type="password"
                            placeholder='password'
                            id='password'
                            name='password'
                            value={data.password}
                            onChange={handleChange}
                        />
                    </div>

                    <div className='flex flex-col mb-4 mt-5 '>
                        {/* <label>Password</label> */}
                        <input
                            className="text-gray-600 rounded-lg px-2 py-1 outline-none bg-slate-200"
                            type="password"
                            placeholder='repeat password'
                            id='confirmPassword'
                            name='confirmPassword'
                            value={data.confirmPassword}
                            onChange={handleChange}
                        />
                    </div>

                    <div className='items-center justify-center flex'>
                        <Button
                            type='submit'
                        >Sign Up</Button>
                    </div>

                    <p className='text-center mt-6 text-purple-600'>I am a member <button className='hover:animate-pulse underline  hover:underline-indigo-600 hover:underline'
                        href='/pages/signup.js'
                    ><Link href="/auth/login">
                            Sign In
                        </Link>

                    </button></p>
                </form>


            </div>
        </div>
    )
}