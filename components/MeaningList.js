
const MeaningList = ({ mean }) => {
  return (
    <div className="pl-10 mb-5">
      {mean.map(val => val.meanings.map(means => means.definitions.map(def => (
        <div key={def.definition}>
          <ol className="list-decimal space-y-2">{def.definition}</ol>


        </div>
      ))))}
     
    </div>
  );
};

export default MeaningList;
