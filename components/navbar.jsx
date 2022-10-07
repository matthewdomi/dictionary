import { useRouter } from 'next/router';
import { useSession, signOut } from 'next-auth/react';
import React, { useEffect, useState } from 'react';

import Link from 'next/link';

import { SiConstruct3 } from 'react-icons/si';
import { GiHamburgerMenu } from 'react-icons/gi';
// import {IonClose , IonMenu} from '@ionic/react'
import { AiOutlineClose } from 'react-icons/ai';
import { BsPersonCircle } from 'react-icons/bs';
import { MdPersonOff } from 'react-icons/md';

import Button from './button';

const Navbar = () => {
  const Links = [
    { name: 'HOME', link: '/', icons: { SiConstruct3 } },
    { name: 'FAVORITE', link: '/favorite', icons: { SiConstruct3 } },
    { name: 'CONTACT US', link: '/contact', icons: { SiConstruct3 } },
    { name: 'HELP', link: '/', icons: { SiConstruct3 } },
  ];

  const [open, setOpen] = useState(false);
  const { status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status !== 'authenticated') {
      router.push('/');
    }
  }, [status]);

  return (
    <div className="shadow-md w-screen fixed top-0 left-0 ">
      <div className="md:flex items-center justify-between bg-white py-2 px-7 mr-4">
        <div className="font-bold text-xl cursor-pointer flex items-center font-[Poppins] text-slate-700">
          <span className="text-3xl text-indigo-600 mr-1 mb-1 pt-2">
            <SiConstruct3 name="logo" href={Links.link} />
          </span>
          Brainy Dictionary
        </div>
        <div className="text-3xl absolute right-8 top-6 cursor-pointer md:hidden">
          <GiHamburgerMenu
            onClick={() => setOpen(!open)}
            className=" pb-1 hover:bg-slate-100 hover:rounded-2xl hover:p-1 hover:duration-700 hover:text-blue-500"
          />
          {/* <AiOutlineClose onClick={open ? "": ""}/> */}
          {/* <ion-icons name={open ? 'close':'menu'}></ion-icons> */}
        </div>
        <ul
          className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto
         md:pl-0 pl-9 transition-all duration-700 ease-in ${
           open ? 'top-20 opacity-100' : 'top-[-490px]'
         } md:opacity-100 `}
        >
          {Links.map((Link) => (
            <li key={Link.name} className="md:ml-8 text-md md:my-0 my-7 ">
              <a
                href={Link.link}
                className="text-gray-800 hover:text-blue-500 decoration-sky-900"
              >
                {Link.name}
              </a>
            </li>
          ))}

          <div className="ml-3 -mt-3 p-2">
            <Button>Get Started</Button>
          </div>

          <div div className="md:ml-8 text-md md:my-0 my-7  ">
            {status === 'authenticated' ? (
              <button onClick={() => signOut({ callbackUrl: '/' })}>
                <BsPersonCircle className="text-2xl text-blue-500 hover:bg-slate-100  hover:rounded-3xl hover:p-1 hover:duration-700 hover:text-blue-700" />
              </button>
            ) : (
              <button>
                <MdPersonOff className="text-3xl  text-purple-700 hover:bg-slate-100  hover:rounded-3xl hover:p-1 hover:duration-700 hover:text-blue-700" />
              </button>
            )}
          </div>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
