import { useState, useEffect } from "react";

const GenreForm = ({ onSubmit, selectedGenre }) => {
  const [formData, setFormData] = useState({
    name: "",
    description: ""
  });

  useEffect(() => {
    if (selectedGenre) {
      setFormData({
        name: selectedGenre.name,
        description: selectedGenre.description || ""
      });
    }
  }, [selectedGenre]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(formData);
    setFormData({ name: "", description: "" });
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <input
        className="form-control mb-2"
        name="name"
        placeholder="Nombre"
        value={formData.name}
        onChange={handleChange}
        required
      />

      <textarea
        className="form-control mb-2"
        name="description"
        placeholder="Descripción"
        value={formData.description}
        onChange={handleChange}
      />

      <button className="btn btn-primary">
        {selectedGenre ? "Actualizar" : "Crear"}
      </button>
    </form>
  );
};

export default GenreForm;