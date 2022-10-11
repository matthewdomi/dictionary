import React, { FormEvent, useState } from "react";

const Search = () => {
  const [searchWord, setSearchWord] = useState("");
  const [word, setWord] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(searchWord);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="max-w-sm mx-auto border mt-10 border-blue-400 px-2 py-1 rounded-full flex">
        <input
          className="w-full outline-none px-2 text-gray-700 text-xl"
          type="search"
          name="search"
          onChange={(e) => setSearchWord(e.target.value)}
        />
        <button
          className="bg-blueGreen text-offWhite font-bold py-1 px-4 rounded-full"
          type="submit"
        >
          Search
        </button>
      </div>
    </form>
  );
};

export default Search;
