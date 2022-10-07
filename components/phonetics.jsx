const Phonetics = ({ mean }) => {
  return (
    <div className="pl-10 mb-5">
      {mean.map((val) =>
        val.meanings.map((means) =>
          means.definitions.map((def) => (
            <div key={def.definition}>
              <p className="list-decimal space-y-2">{def.definition}</p>
            </div>
          ))
        )
      )}

      {mean.map((val) =>
      val.partOfSpeech.map((parts) =>(
        parts.definitions.map((def) =>(
        <div key={def.partOfSpeech}>
            <p>{def.partOfSpeech}</p>
            <div/>))))
      
      
      }
    </div>
  );
};

export default Phonetics;
