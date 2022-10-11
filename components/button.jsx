import React from 'react';

const Button = (props) => {
  return (
    <button
      className="bg-white font-semibold text-pink-700 w-40 py-2 mt-4
               hover:text-white hover:duration-1000
               outline outline-violet-600
                 hover:bg-violet-600
                 rounded-2xl hover:outline-none
                 active:bg-violet-700"
    >
      {props.children}
    </button>
  );
};

export default Button;
