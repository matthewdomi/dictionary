import React from 'react'
import { useState } from 'react'
import { signIn } from 'next-auth/react'
import { useRouter } from 'next/router'

const Login = () => {
    const [data, setData] = useState({
        email: '',
        password: '',
    })
    const [error, setError] = useState('')
    const router = useRouter();


    const handleChange = e => {
        setData({ ...data, [e.target.name]: e.target.value })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        const result = await signIn("credentials", {
            // ...data,
            email: data.email,
            password: data.password,
            redirect: false
        })
        if (result.error) {
            setError(result.error)
        } else {
            router.push(router.query.redirect || "/")

        }

    };

    return (
        <div className='min-h-screen flex justify-center items-center'>
            <div className='md:w-1/3 bg-zinc-900/100 p-4 rounded-lg ' >
                <h1 className='items-center justify-center flex text-lg font-semibold mb-4'>Open Dictionary</h1>
                {error && <p className='text-red-500 ' >{error}</p>}
                <form onSubmit={handleSubmit} className='flex flex-col space-y-4'>
                    <div className='flex flex-col space-y-1'>
                        <label htmlFor="email" className="email" >Email</label>
                        <input
                            type='email'
                            name='email'
                            id='email'
                            className='rounded-lg px-2 py-1'
                            placeholder='email@gmail.com'
                            value={data.email}
                            onChange={handleChange}
                        />
                    </div>
                    <div className='flex flex-col space-y-1'>
                        <label htmlFor="password" className="email" >Password</label>
                        <input
                            type='password'
                            name='password'
                            id='password'
                            placeholder='*******'
                            className='rounded-lg px-2 py-1'
                            value={data.password}
                            onChange={handleChange}
                        />
                    </div>
                    <div className='items-center justify-center flex'>
                        <button type='' className='bg-indigo-600  hover:text-blue-500 hover:oultine-blue-500 hover:bg-white rounded-lg px-3 py-1'>Login</button>
                    </div>

                </form>

            </div>
        </div>

    )
}

export default Login
