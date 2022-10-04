import Head from 'next/head'
import Image from 'next/image'
import {SiConstruct3} from 'react-icons/si'


const About = () => (
  <div className="px-8 mt-10 ">
    <div className="mx-auto lg:w-3/5 lg:flex lg:flex-row lg:h-auto">
     <Image className="rounded-tr-md rounded-tl-md h-48 w-full lg:h-auto lg:w-2/5 lg:rounded-bl-md lg:rounded-tr-none  hover:bg-slate-100 hover:rounded-2xl hover:p-9 hover:duration-700 hover:" src="/images/100.jpg" height={400} width={600} alt="nklefwj" />
     <div className="bg-white p-8 rounded-bl-md rounded-br-md lg:rounded-bl-none lg:rounded-tr-md">
        <h1 className="text-gray-700 text-2xl font-bold ">About <span className='duration-700 cursor-pointer '>Open Dictionary</span> </h1>
        <h2 className="text-gray-700 font-semibold ">Shift overall look and fell by adding these wonderful touches to furniture in your home</h2>
        <p className="text-sm text-gray-600 mt-4 bg-slate-100 rounded-xl p-3">Ever been in a room and felt like something was missing? Perhaps it felt slightly bare and uninviting. I've got some simple tips to help you make any room feel complete.</p>
        <div className="flex items-center mt-8 ">
          <div className="flex items-center ">
          <span className='text-xl text-indigo-600 mr-1 mb-1 pt-2'>
      
      <SiConstruct3 name='logo'  className='text-9xl'/>
      </span>          
        <div className="ml-4">
              <p className="text-gray-800 text-sm font-semibold">Open Dictionary</p>
              <p className="text-gray-600 text-sm">Words are powerful</p>
            </div>
          </div>
          <div className="w-8 h-8 ml-auto bg-gray-200 rounded-full flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="15" height="13"><path fill="#6E8098" d="M15 6.495L8.766.014V3.88H7.441C3.33 3.88 0 7.039 0 10.936v2.049l.589-.612C2.59 10.294 5.422 9.11 8.39 9.11h.375v3.867L15 6.495z" /></svg>
          </div>
        </div>
      </div>
    </div>
  </div>
)

export default About;