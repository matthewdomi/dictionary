import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { InputContext } from "../pages/searchpage";
import Antonym from "./Antonym";
import Example from "./Example";
import MeaningList from "./MeaningList";
import Synonym from "./Synonym";
import { HiSpeakerphone } from 'react-icons/hi'
import FavoriteList from "./favoritelist";
import { AiFillAudio } from 'react-icons/ai'
import { MdFavorite } from 'react-icons/md'

axios.defaults.baseURL = 'https://api.dictionaryapi.dev/api/v2/entries/en';

const ResultList = () => {
  const { inputValue } = useContext(InputContext);
  const [response, setResponse] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const fetchData = async (param) => {
    try {
      setLoading(true);
      const res = await axios(`/${param}`);
      setResponse(res.data);
      setError(null);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    if (inputValue.length) {
      fetchData(inputValue)
    }
  }, [inputValue]);

  if (loading) {
    return (
      <div className="flex flex-col space-y-3 animate-pulse p-4 container mx-auto max-w-2xl">
        <div className="h-6 bg-gray-300 mt-5 rounded-md"></div>
        <div className="h-40 bg-gray-300 mt-5 rounded-md"></div>
        <div className="h-8 bg-gray-300 mt-5 rounded-md"></div>
        <div className="h-40 bg-gray-300 mt-5 rounded-md"></div>
      </div>
    )
  }

  if (error) {
    return <h3 className="text-center mt-10 font-semibold text-gray-500">No Definitions Found 😥</h3>
  }

  return (
    <div className="container scrollbar-hide mx-auto p-4 max-w-2xl">

      {response && (

        <div className="">
          <div className="space-x-3  -mt-3">
           <button className="bg-slate-200 rounded-full p-2 shadow" > 
            <AiFillAudio className="  text-xl text-slate-800 text-center justify-center items-center" />
            </button> 
            <button className="bg-slate-200 rounded-full p-2 shadow" >
              <MdFavorite className="  text-xl text-red-500 text-center justify-center items-center" />
            </button>
          </div>
          <div className="">
            <h3 className="text-2xl font-semibold mt-4 ">Definition </h3>
            <div className="bg-slate-100 p-2 rounded-lg">
              <MeaningList mean={response} />

            </div>

          </div>

          <h3 className="text-xl  mt-4">Example</h3>
          <Example mean={response} />

          <div className="bg-slate-100 p-2 rounded-lg">
            <h3 className=" my-1 italic text-xl mt-4">Synonym</h3>
            <Synonym mean={response} />


            <h3 className=" my-1 italic text-xl mt-4">Antonym</h3>
            <Antonym mean={response} />
          </div>

        </div>
      )}
    </div>
  );
};

export default ResultList;
