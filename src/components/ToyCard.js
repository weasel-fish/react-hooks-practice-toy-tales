import React, {useState} from "react";

function ToyCard({toy, deleteToy}) {
  //hold state of whole object
  const [currentToy, setToy] = useState(toy)
  
  const {name, image, likes, id} = currentToy
  //like function, PATCH's and then updates state with returned toy object

  function handleLike(id) {
    const updatedLikes = {
      likes: currentToy.likes +1
    }

    fetch(`http://localhost:3001/toys/${id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(updatedLikes)
    })
    .then(resp => resp.json())
    .then(toyObj => setToy(toyObj))
  }

  return (
    <div className="card">
      <h2>{name}</h2>
      <img
        src={image}
        alt={name}
        className="toy-avatar"
      />
      <p>{likes} Likes </p>
      <button onClick={() => handleLike(id)} className="like-btn">Like {"<3"}</button>
      <button onClick={() => deleteToy(id)} className="del-btn">Donate to GoodWill</button>
    </div>
  );
}

export default ToyCard;
