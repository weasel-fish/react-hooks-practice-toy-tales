import React from "react";
import ToyCard from "./ToyCard";

function ToyContainer({toysList, deleteToy}) {
  return (
    <div id="toy-collection">
      {toysList.map(toy => <ToyCard key={toy.id} toy={toy} deleteToy={deleteToy}/>)}
    </div>
  );
}

export default ToyContainer;
