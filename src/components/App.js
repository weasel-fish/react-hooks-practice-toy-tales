import React, { useEffect, useState } from "react";

import Header from "./Header";
import ToyForm from "./ToyForm";
import ToyContainer from "./ToyContainer";

function App() {
  const [showForm, setShowForm] = useState(false);
  //state holding all toys, gets updated with both DELETE and POST
  const [toysList, setToysList] = useState([])

  useEffect(() => {
    fetch('http://localhost:3001/toys')
    .then(resp => resp.json())
    .then(setToysList)
  }, [])

  function handleClick() {
    setShowForm((showForm) => !showForm);
  }

  //DELETE function, update state inside .then

  //POST function, update state inside .then

  function addNewToy(newToy) {
    console.log('Object to be posted:')
    console.log(newToy)
    fetch('http://localhost:3001/toys', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newToy)
    })
    .then(resp => resp.json())
    .then((newToyObj) => {
      const newToyList = [...toysList]
      newToyList.push(newToyObj)
      setToysList(newToyList)
    })
  }

  function deleteToy(id) {
    fetch(`http://localhost:3001/toys/${id}`, {
      method: 'DELETE'
    })
    .then(resp => resp.json())
    .then(() => {
      const newToyList = toysList.filter(toy => toy.id !== id)
      setToysList(newToyList)
    })
  }

  return (
    <>
      <Header />
      {showForm ? <ToyForm handleSubmit={addNewToy} /> : null}
      <div className="buttonContainer">
        <button onClick={handleClick}>Add a Toy</button>
      </div>
      <ToyContainer toysList={toysList} deleteToy={deleteToy}/>
    </>
  );
}

export default App;
