import React from 'react'
import Layout from '../components/Layout'
import AddPost from './posts/add-post'


import { BsTelephoneFill } from "react-icons/bs";
import { GrMail } from "react-icons/gr";
import { HiLocationMarker } from "react-icons/hi";
import {
  FaInstagram,
  FaTwitter,
  FaYoutube,
  FaPinterest,
  FaGithub,
} from "react-icons/fa";





const PostYourView = () => {
  return (
   
                                  <Layout title="Add Post">

       <div className="bg-[#1d043f] w-screen md:h-screen h-auto">
      <div className="flex justify-around items-center mx-auto md:flex-row flex-col">

    
            {/* <div className="md:w-1/2 w-full md:p-10 my-10 md:my-0  flex-col">
          <h1 className="text-4xl font-semibold text-white ">Get In Touch</h1>
          <p className="text-gray-300 font-semibold text-sm my-5">
            Fill up the form & our Team will get back to you within 12 hours.
          </p>
          <div className="flex-col my-20 gap-5 flex  ">
            <div className="flex gap-5 p-4 border border-gray-500 hover:border-blue-700 md:w-1/2 w-full rounded-lg group cursor-pointer items-center">
              <BsTelephoneFill className="text-xl text-gray-500  group-hover:text-white" />
              <p className="text-gray-500 text-base font-semibold group-hover:text-white">
                0269188349
              </p>
            </div>
            <div className="flex gap-5 p-4 border border-gray-500 hover:border-blue-700 md:w-1/2 w-full rounded-lg group cursor-pointer items-center">
              <GrMail className="text-xl text-gray-500  group-hover:text-white" />
              <p className="text-gray-500 text-base font-semibold group-hover:text-white">
                bdictionary@gmail.com
              </p>
            </div>
            <div className="flex gap-5 p-4 border border-gray-500 hover:border-blue-700 md:w-1/2 w-full rounded-lg group cursor-pointer items-center">
              <HiLocationMarker className="text-xl text-gray-500  group-hover:text-white" />
              <p className="text-gray-500 text-base font-semibold group-hover:text-white">
                UCC, Cape Coast, Ghana
              </p>
            </div>
          </div>

          <div className="flex gap-8  justify-center md:justify-start ">
            <FaInstagram className="text-2xl text-white hover:text-blue-700 cursor-pointer" />
            <FaTwitter className="text-2xl text-white hover:text-blue-700 cursor-pointer" />
            <FaYoutube className="text-2xl text-white hover:text-blue-700 cursor-pointer" />
            <FaPinterest className="text-2xl text-white hover:text-blue-700 cursor-pointer" />
            <FaGithub className="text-2xl text-white hover:text-blue-700 cursor-pointer" />
          </div>

         </div> */}

          <div className='' ><AddPost /></div>
    
      </div>
    
            

           
            </div>
         </Layout>
        
 
                             
     
      
      
  
  )
}

export default PostYourView
