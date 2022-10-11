import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import About from '../components/about'
import ArticleItems from '../components/ArticleItems'
import Cards from '../components/cards'
import FavoriteList from '../components/favoritelist'
import Layout from '../components/Layout'
import Navbar from '../components/navbar'
import styles from '../styles/Home.module.css'
import Protected from './protected'
import SearchPage from './searchpage'
import data from '../utils/data'

export default function Home() {
  return (
    <div className=''>
      <Layout title="Home Page">
        <SearchPage />

        {/* <About /> */}
        <div>

          <div className='p-4   justify-center items-center text-center '>

            <div><h1 className='text-2xl text-purple-700 font-semibold mb-8'>Recommended Articles</h1></div>
            <div className=' grid grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-4'>
              {data.books.map((book) => (
                <ArticleItems className='bg-purple-300' book={book} key={book.slug}></ArticleItems>
              ))}
            </div>
          </div>
        </div>
      </Layout>
    </div>
  )
}
