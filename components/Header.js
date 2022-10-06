import { useContext, useState } from "react";
import { InputContext } from "../pages/searchpage";

const Header = () => {
  const [value, setValue] = useState("");
  const { inputValue, setInputValue } = useContext(InputContext);

  const handleInputChange = e => setValue(e.target.value);

  const handleSubmit = () => {
    setInputValue(value);
    setValue("");
  }

  const handleInputKeyDown = (e) => {
    if (e.key === 'Enter') {
      setInputValue(value);
      setValue("")
    }
  }

  return (
    <div className="bg-white ">
      <div className=" mx-auto py-4">

        <div className="flex items-center justify-center mt-5">

          <div className="max-w-sm mx-auto border mt-10 border-blue-400 px-2 py-1 rounded-full flex">
            <input
              className="w-full outline-none px-2 text-gray-700 text-xl"
              type="search"
              name="search"
              onChange={handleInputChange}
              onKeyDown={handleInputKeyDown}
              value={value}
            />
            <button
              className="bg-blueGreen text-offWhite font-bold py-1 px-4 rounded-full"
              type="submit"
              onClick={handleSubmit}

            >
              Search
            </button>
          </div>

        </div>

        {inputValue && (
          <h3 className="text-gray-500 text-2xl capitalize text-center mt-4"> <span className="text-red-500 font-bold">{inputValue}</span></h3>
        )}
      </div>
    </div>
  );
};

export default Header;
