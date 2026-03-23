import { useState, useEffect } from "react";

const ProducerForm = ({ onSubmit, selectedProducer }) => {
  const [formData, setFormData] = useState({
    name: "",
    slogan: "",
    description: ""
  });

  useEffect(() => {
    if (selectedProducer) {
      setFormData(selectedProducer);
    }
  }, [selectedProducer]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(formData);
    setFormData({ name: "", slogan: "", description: "" });
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

      <input
        className="form-control mb-2"
        name="slogan"
        placeholder="Slogan"
        value={formData.slogan}
        onChange={handleChange}
      />

      <textarea
        className="form-control mb-2"
        name="description"
        placeholder="Descripción"
        value={formData.description}
        onChange={handleChange}
      />

      <button className="btn btn-primary">
        {selectedProducer ? "Actualizar" : "Crear"}
      </button>
    </form>
  );
};

export default ProducerForm;