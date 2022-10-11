import Link from 'next/link';
import { useRouter } from 'next/router'
import React from 'react'
import Layout from '../../components/Layout'
import data from '../../utils/data'
import { IoMdArrowRoundBack, IoCopyOutline } from 'react-icons/io';
import { MdContentCopy } from 'react-icons/md'
import { AiTwotoneEdit } from 'react-icons/ai'
import { MdFavorite } from 'react-icons/md';
import Image from 'next/image';
import Button from '../../components/button';


export default function BookScreen() {
    const { query } = useRouter();
    const { slug } = query;
    const book = data.books.find((book) => book.slug === slug)
    if (!book) {
        return (
            <div>Article Not Found</div>
        )
    }
    return (
        <Layout title={book.name}>
            <div className='mt-20 md:mx-40'>



                <div className=' justify-center flex md:gap-3 '>
                    <div className='md:col-span-2 flex p-2 gap-3 md:gap-5'>
                        <Image
                            src={book.image}
                            alt={book.name}
                            width={400}
                            height={400}
                            className='rounded-xl md:text-center md:justify-center md:items-center'
                        // layout='responsive'
                        />
                        <Image
                            src={book.image2}
                            alt={book.name}
                            width={400}
                            height={400}
                            className='rounded-xl md:text-center md:justify-center md:items-center'
                        // layout='responsive'
                        />

                    </div>

                </div>

                <div className='mt-6'>
                    <h1 className='m-3 text-center font-bold text-2xl text-purple-800'>
                        {book.name}
                    </h1>

                </div>

                <div className='flex space-x-3  rounded-full  shadow mb-1 justify-end'>

                    <button className='bg-slate-200 p-1 rounded-full'>
                        <MdFavorite className='text-xl bg-slate-200 rounded-xl text-red-700 text-center justify-center items-center' />
                    </button>

                    <button className='bg-slate-200 p-1 rounded-full'>

                        <AiTwotoneEdit className='text-xl bg-slate-200 text-indigo-700 text-center justify-center items-center' />
                    </button>
                    <button className='bg-slate-200 p-1 rounded-full'>

                        <MdContentCopy className='text-xl bg-slate-200 text-slate-800 text-center justify-center items-center' />
                    </button>
                </div>

                <div>
                    <p className='md:text-lg text-slate-800 p-2 bg-slate-300 rounded-xl '>
                        {book.descriptionlong}
                    </p>
                </div>




                <Link href='/'>
                    <a className='justify-center flex mt-5'>
                        <button className="">

                            <IoMdArrowRoundBack className='text-3xl text-slate-700' />
                        </button>

                    </a>
                </Link>




            </div>
        </Layout>
    )
}


