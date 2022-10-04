import React, { createContext, useState } from 'react'
import Header from '../components/Header'
import ResultList from '../components/ResultList'
import ContactPage from './contact'


export const InputContext = createContext()


const SearchPage = () => {
    const [inputValue, setInputValue] = useState("")
console.log(inputValue);

    const value = {
        inputValue, setInputValue
    }
  return (
    
     < InputContext.Provider value={value} >
   <div className='mx-auto py-4'>
  
      <Header/>
     <ResultList/>
    
   </div>
   
     </InputContext.Provider>
    
  )
}

export default SearchPage
