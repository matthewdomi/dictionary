import { useRouter } from 'next/router';
import { useSession, signOut } from 'next-auth/react';
import React, { useEffect, useMemo, useState } from 'react';

import { useTheme } from 'next-themes';
import Link from 'next/link';

import { SiConstruct3, SiCrehana } from 'react-icons/si';
import { GiHamburgerMenu } from 'react-icons/gi';
// import {IonClose , IonMenu} from '@ionic/react'
import { AiOutlineClose } from 'react-icons/ai';
import { BsFillJournalBookmarkFill, BsPersonCircle } from 'react-icons/bs';
import {
  MdPersonOff,
  MdFavorite,
  MdQuiz,
  MdPostAdd,
  MdHelp,
  MdContacts,
} from 'react-icons/md';
import { FaRegistered, FaHome } from 'react-icons/fa';
import { FcAbout } from 'react-icons/fc';
import { FaJoint } from 'react-icons/fa';
import { RiLogoutCircleFill } from 'react-icons/ri';
import { BiSun, BiMoon } from 'react-icons/bi';

import Button from './button';
import { VscChromeClose, VscThreeBars } from 'react-icons/vsc';
import { TbLogout } from 'react-icons/tb';

const Navbar = () => {
  const { systemTheme, theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const renderThemeChanger = () => {
    if (!mounted) return null;

    const currentTheme = theme === 'system' ? systemTheme : theme;

    if (currentTheme === 'dark') {
      return (
        <BiSun
          className="w-7 h-7 "
          role="button"
          onClick={() => setTheme('light')}
        />
      );
    } else {
      return (
        <BiMoon
          classNames="w-7 h-7"
          role="button"
          onClick={() => setTheme('dark')}
        />
      );
    }
  };

  const Links = [
    { name: 'HOME', link: '/', icons: { SiConstruct3 } },
    { name: 'FAVORITE', link: '/favorite', icons: { SiConstruct3 } },
    { name: 'POST', link: '/post', icons: { SiConstruct3 } },
    { name: 'HELP', link: '/help', icons: { SiConstruct3 } },
    { name: 'CONTACT US', link: '/contact', icons: { SiConstruct3 } },
    { name: 'ABOUT', link: '/post', icons: { SiConstruct3 } },
  ];

  const WithoutLoginLink = [
    { name: 'HOME', link: '/', icons: { SiConstruct3 } },
    { name: 'HELP', link: '/help', icons: { SiConstruct3 } },
    { name: 'CONTACT US', link: '/contact', icons: { SiConstruct3 } },
    { name: 'ABOUT', link: '/post', icons: { SiConstruct3 } },
  ];

  const [open, setOpen] = useState(false);
  const { status } = useSession();
  const router = useRouter();

  const [sidebarOpen, setSidebarOpen] = useState(false);

  const activeMenu = useMemo(
    () => Links.find((menu) => menu.link === router.pathname),
    [router.pathname]
  );

  useEffect(() => {
    if (status !== 'authenticated') {
      router.push('/');
    }
  }, [status]);

  return (
    <nav className="shadow-md w-screen  fixed top-0 left-0 dark:bg-gray-700">
      <div className="md:flex items-center md:mx-40 justify-between bg-white py-1 px-20 mr-4">
        <div className="flex space-x-4">
          {/* SideBar */}

          {/* Logo and Company Name */}
          <div className="font-bold text-xl cursor-pointer flex items-center font-[Poppins] text-pink-700">
            <span className="md:text-4xl text-3xl text-purple-700 mr-1 mb-1 pt-2">
              <SiConstruct3 name="logo" href="/" />
            </span>
            Brainy Dictionary
          </div>
        </div>

        {status === 'authenticated' ? (
          <div>
            <div className="bg-white">
              <div
                className={`fixed h-screen  top-0 left-0 shadow-lg py-5 ${
                  sidebarOpen ? 'w-40' : 'w-16'
                } duration-300`}
              >
                <div
                  className="absolute -right-3 bg-white text-xl  p-1 cursor-pointer hover:scale-110"
                  onClick={() => setSidebarOpen(!sidebarOpen)}
                >
                  {sidebarOpen ? (
                    <VscChromeClose className=" pb-1 text-3xl text-purple-300 hover:bg-slate-100 hover:rounded-2xl hover:p-1 hover:duration-700 hover:text-pink-700" />
                  ) : (
                    <VscThreeBars className=" -mt-2   text-3xl text-purple-700 hover:bg-slate-100 hover:rounded-2xl hover:p-1 hover:duration-700 hover:text-pink-700" />
                  )}
                </div>
                <div className="flex flex-col items-start pl-5 justify-between h-full bg-white">
                  <div className="flex items-center bg- w-full space-x-2 cursor-pointer hover:text-[#EACE6A] hover:scale-110 duration-200">
                    {/* <span className="text-3xl">
            <BsFillJournalBookmarkFill />
          </span> */}
                    {/* {sidebarOpen && <span className="text-violet-500">Brainy Dictionary</span>} */}
                  </div>
                  <div className="space-y-5">
                    <Link
                      href={`/`}
                      className="flex items-center  space-x-2 cursor-pointer hover:text-pink-500 hover:scale-150 duration-200"
                    >
                      <button className="text-xl text-purple-700 flex hover:text-pink-500">
                        <FaHome className="hover:scale-150 duration-500" />
                        {sidebarOpen && (
                          <span className="text-purple-700 text-base font-semibold hover:text-pink-500 ml-2 -mt-1">
                            HOME
                          </span>
                        )}
                      </button>
                    </Link>

                    <Link
                      href={`/favorite`}
                      className="flex items-center  space-x-2 cursor-pointer hover:text-pink-500 hover:scale-150 duration-200"
                    >
                      <button className="text-xl text-purple-700 flex hover:text-pink-500">
                        <MdFavorite className="hover:scale-150 duration-500" />
                        {sidebarOpen && (
                          <span className="text-purple-700 text-base font-semibold hover:text-pink-500 ml-2 -mt-1">
                            FAVORITE
                          </span>
                        )}
                      </button>
                    </Link>

                    <Link
                      href={`/quiz`}
                      className="flex items-center  space-x-2 cursor-pointer hover:text-pink-500 hover:scale-150 duration-200"
                    >
                      <button className="text-xl text-purple-700 flex hover:text-pink-500">
                        <MdQuiz className="hover:scale-150 duration-500" />
                        {sidebarOpen && (
                          <span className="text-purple-700 text-base font-semibold hover:text-pink-500 ml-2 -mt-1">
                            QUIZ
                          </span>
                        )}
                      </button>
                    </Link>

                    <Link
                      href={`/book`}
                      className="flex items-center  space-x-2 cursor-pointer hover:text-pink-500 hover:scale-150 duration-200"
                    >
                      <button className="text-xl text-purple-700 flex hover:text-pink-500">
                        <MdHelp className="hover:scale-150 duration-500" />
                        {sidebarOpen && (
                          <span className="text-purple-700 text-base font-semibold hover:text-pink-500 ml-2 -mt-1">
                            ARTICLES
                          </span>
                        )}
                      </button>
                    </Link>

                    <Link
                      href={`/posts/add-post`}
                      className="flex items-center  space-x-2 cursor-pointer hover:text-pink-500 hover:scale-150 duration-200"
                    >
                      <button className="text-xl text-purple-700 flex hover:text-pink-500">
                        <MdPostAdd className="hover:scale-150 duration-500" />
                        {sidebarOpen && (
                          <span className="text-purple-700 text-base font-semibold hover:text-pink-500 ml-2 -mt-1">
                            POST
                          </span>
                        )}
                      </button>
                    </Link>

                    <Link
                      href={`/about`}
                      className="flex items-center  space-x-2 cursor-pointer hover:text-pink-500 hover:scale-150 duration-200"
                    >
                      <button className="text-xl text-purple-700 flex hover:text-pink-500">
                        <SiCrehana className="text-purple-700 hover:scale-150 duration-500" />
                        {sidebarOpen && (
                          <span className="text-purple-700 text-base font-semibold hover:text-pink-500 ml-2 -mt-1">
                            ABOUT
                          </span>
                        )}
                      </button>
                    </Link>

                    <Link
                      href={`/`}
                      className="flex items-center  space-x-2 cursor-pointer hover:text-pink-500 hover:scale-150 duration-200"
                    >
                      <button className="text-xl text-purple-700 flex hover:text-pink-500">
                        <MdContacts className="hover:scale-150 duration-500" />
                        {sidebarOpen && (
                          <span className="text-purple-700 text-base font-semibold hover:text-pink-500 ml-2 -mt-1">
                            CONTACT{' '}
                          </span>
                        )}
                      </button>
                    </Link>

                    <Link
                      href={`/faq`}
                      className="flex items-center  space-x-2 cursor-pointer hover:text-pink-500 hover:scale-150 duration-200"
                    >
                      <button className="text-xl text-purple-700 flex hover:text-pink-500">
                        <FaJoint className="hover:scale-150 duration-500" />
                        {sidebarOpen && (
                          <span className="text-purple-700 text-base font-semibold hover:text-pink-500 ml-2 -mt-1">
                            FAQ
                          </span>
                        )}
                      </button>
                    </Link>
                  </div>
                  {/* <Button>Get Started</Button> */}
                  <div className="flex items-center space-x-2 cursor-pointer  ">
                    <span className="text-3xl">
                      <RiLogoutCircleFill className="text-purple-600 hover:scale-150 duration-500 hover:text-pink-600" />
                    </span>
                    {sidebarOpen && (
                      <span className="text-pink-600">Logout</span>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div></div>
        )}

        {/* Left Nav */}
        {status === 'authenticated' ? (
          <div>
            <ul
              className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto
              md:pl-0 pl-9 transition-all duration-700 ease-in ${
                open ? 'top-20 opacity-100' : 'top-[-490px]'
              } md:opacity-100 `}
            >
              <div className="md:ml-1 -mt-3 -mr-4  md:p-1">
                <Button>Get Started</Button>
              </div>

              <div div className="md:ml-8 text-md md:my-0 my-7  ">
                {status === 'authenticated' ? (
                  <button onClick={() => signOut({ callbackUrl: '/' })}>
                    <BsPersonCircle className="text-3xl text-purple-700 hover:bg-slate-100  hover:rounded-3xl hover:p-1 hover:duration-700 hover:text-pink-700 border   rounded-full" />
                  </button>
                ) : (
                  <div className="">
                    <Link href={`/auth/login`}>
                      <button>
                        <MdPersonOff className="text-2xl  text-purple-700 hover:bg-slate-100  hover:rounded-3xl hover:p-1 hover:duration-700 hover:text-pink-700" />
                      </button>
                    </Link>
                    <Link href={`/auth/register`}>
                      <button>
                        <FaRegistered className="text-2xl ml-4  text-purple-700 hover:bg-slate-100  hover:rounded-3xl hover:p-1 hover:duration-700 hover:text-pink-700" />
                      </button>
                    </Link>
                  </div>
                )}
              </div>
            </ul>
          </div>
        ) : (
          <div>
            <ul
              className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto
         md:pl-0 pl-9 transition-all duration-700 ease-in ${
           open ? 'top-20 opacity-100' : 'top-[-490px]'
         } md:opacity-100 `}
            >
              {WithoutLoginLink.map((Link) => (
                <li
                  key={Link.name}
                  className="md:ml-8 text-sm font-medium md:my-0 my-7 "
                >
                  <a
                    href={Link.link}
                    className="text-purple-900 hover:text-pink-500 decoration-sky-900 hover:underline hover:underline-purple-600 hover:duration-500 hover:"
                  >
                    {Link.name}
                  </a>
                </li>
              ))}

              <div className="md:ml-1 -mt-3 -mr-4  md:p-1">
                <Button>Get Started</Button>
              </div>

              <div div className="md:ml-8 text-md md:my-0 my-7  ">
                {status === 'authenticated' ? (
                  <button onClick={() => signOut({ callbackUrl: '/' })}>
                    <BsPersonCircle className="text-3xl text-purple-700 hover:bg-slate-100  hover:rounded-3xl hover:p-1 hover:duration-700 hover:text-pink-700 border   rounded-full" />
                  </button>
                ) : (
                  <div className="flex">
                    <Link href={`/auth/login`}>
                      <button>
                        <MdPersonOff className="text-2xl  text-purple-700 hover:bg-slate-100  hover:rounded-3xl hover:p-1 hover:duration-700 hover:text-pink-700" />
                      </button>
                    </Link>
                    <Link href={`/auth/register`}>
                      <button>
                        <FaRegistered className="text-2xl ml-4  text-purple-700 hover:bg-slate-100  hover:rounded-3xl hover:p-1 hover:duration-700 hover:text-pink-700" />
                      </button>
                    </Link>
                    <div className="ml-4 text-2xl ml-4  text-purple-700 hover:bg-slate-100  hover:rounded-3xl hover:p-1 hover:duration-700 hover:text-pink-700">
                      {renderThemeChanger()}
                    </div>
                  </div>
                )}
              </div>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
