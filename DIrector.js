import { useState, useEffect } from "react";

const DirectorForm = ({ onSubmit, selectedDirector }) => {
  const [name, setName] = useState("");

  useEffect(() => {
    if (selectedDirector) setName(selectedDirector.name);
  }, [selectedDirector]);

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit({ name });
    setName("");
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <input
        className="form-control mb-2"
        placeholder="Nombre del director"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />

      <button className="btn btn-primary">
        {selectedDirector ? "Actualizar" : "Crear"}
      </button>
    </form>
  );
};

export default DirectorForm;