import React, {useState} from "react";

function ToyForm({handleSubmit}) {
  const [formData, setFormData] = useState({
    name: '',
    image: '',
    likes: 0
  })

  function handleChange(e) {
    const prop = e.target.name

    const newData = {
      ...formData,
      [prop]: e.target.value
    }
    setFormData(newData)
  }

  return (
    <div className="container">
      <form onSubmit={(e) => {
        e.preventDefault()
        const newToy = {...formData}
        setFormData({
          name: '',
          image: '',
          likes: 0
        })
        handleSubmit(newToy)
        }} className="add-toy-form">
        <h3>Create a toy!</h3>
        <input
          type="text"
          name="name"
          placeholder="Enter a toy's name..."
          className="input-text"
          onChange={handleChange}
          value={formData.name}
        />
        <br />
        <input
          type="text"
          name="image"
          placeholder="Enter a toy's image URL..."
          className="input-text"
          onChange={handleChange}
          value={formData.image}
        />
        <br />
        <input
          type="submit"
          name="submit"
          value="Create New Toy"
          className="submit"
        />
      </form>
    </div>
  );
}

export default ToyForm;
