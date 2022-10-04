const Example = ({ mean }) => {
  return (
    <div className="pl-10 mb-5">
      {mean.map(val => val.meanings.map(means => means.definitions.map(def => (
        <div key={def.example}>
          {def.example ? <li className="text-base  text-gray-800 italic" >{def.example}</li> : ''}
        </div>
      ))))}
    </div>
  );
};

export default Example;
