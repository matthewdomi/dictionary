import React from 'react';
import { FiFilter } from 'react-icons/fi';
import { MdFavorite } from 'react-icons/md';
import Task from '../components/task';

const FavoriteList = () => {
  const FavoriteList = [
    { name: 'food', link: '/' },
    { name: 'maize', link: '/' },
    { name: 'pepper', link: '/' },
    { name: 'meal', link: '/' },
  ];
  return (
    <div className="mt-20">
      <div className="md:pl-20 pl-6  md:pr-20 pr-6 ">
        <div className=" inline-block ">
          <h3 className="font-bold flex text-2xl p-3 m-1 text-slate-700  ">
            My Favorite{' '}
            <span className="pt-1 ml-2 text-red-500">
              <MdFavorite />
            </span>
          </h3>
          <div className="flex inline-block">
            <input
              type="search"
              placeholder="search in my favorite"
              className="p-2 outline-none rounded-xl border "
            />
            <div className="ml-2 mt-2 bg-slate-100 px-5 py-1 rounded-lg  cursor-pointer">
              {' '}
              <FiFilter className="text-2xl px-0.5 rounded-xl bg-slate-100 text-blue-500" />
            </div>
          </div>
          <div className="space-x-2 mt-4  flex flex-wrap  ">
            {FavoriteList.map((Link) => (
              <span key={Link.name} className="md:ml-2  text-md md:my-0 my-2">
                <a
                  href={Link.link}
                  className="bg-blue-500 px-7 py-0.5 tracking-wider rounded-full text-white text-sm mb-2 font-semibold cursor-pointer"
                >
                  {Link.name}
                </a>
              </span>
            ))}
          </div>
          <div>
            <Task />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FavoriteList;
