const Antonym = ({ mean }) => {
  return (
    <div className="pl-10 space-x-2 flex flex-wrap">
      {mean.map(val => val.meanings.map(means => means.definitions.map(def => {
        return def.antonyms?.map(ant => (
          <span     
          className="bg-blue-500 px-7 py-0.5 tracking-wider rounded-full text-white text-sm mb-2 font-semibold cursor-pointer"
          >{ant}</span>
        ))
      })))}
    </div>
  );
}; 

export default Antonym;
