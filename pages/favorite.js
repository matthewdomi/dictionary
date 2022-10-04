import React from 'react'
import FavoriteList from '../components/favoritelist'
import Navbar from '../components/navbar'
import ResultList from '../components/ResultList'
import Cards from '../components/cards'

const Favorite = () => {
  return (
    <div className=''>
      <Navbar/>
      <div className='bg-white/75 w-full h-screen mt-16 '>
<div className=''>
  <FavoriteList/>
 <div className='bg-slate-100 rounded-2xl  mx-8'>
  <div className='mt-10 flex flex-col p-3 items-center justify-center'>
    <div>
          <h2 className='text-2xl font-semibold'>Recommeded Books & Articles</h2>
    </div>
    <Cards/>
  </div>
 </div>
  
 
</div>

      </div>
    </div>
  )
}

export default Favorite
