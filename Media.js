import { useState, useEffect } from "react";

const MediaForm = ({
  onSubmit,
  selectedMedia,
  genres,
  directors,
  producers,
  types
}) => {
  const [formData, setFormData] = useState({
    serial: "",
    title: "",
    synopsis: "",
    url: "",
    image: "",
    releaseYear: "",
    genreId: "",
    directorId: "",
    producerId: "",
    typeId: ""
  });

  useEffect(() => {
    if (selectedMedia) {
      setFormData(selectedMedia);
    }
  }, [selectedMedia]);

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
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4">

      <input className="form-control mb-2" name="serial" placeholder="Serial" onChange={handleChange} value={formData.serial} required />
      <input className="form-control mb-2" name="title" placeholder="Título" onChange={handleChange} value={formData.title} required />

      <textarea className="form-control mb-2" name="synopsis" placeholder="Sinopsis" onChange={handleChange} value={formData.synopsis} />

      <input className="form-control mb-2" name="url" placeholder="URL" onChange={handleChange} value={formData.url} required />
      <input className="form-control mb-2" name="image" placeholder="Imagen URL" onChange={handleChange} value={formData.image} />

      <input className="form-control mb-2" name="releaseYear" placeholder="Año" onChange={handleChange} value={formData.releaseYear} />

      {/* SELECTS DINÁMICOS */}

      <select className="form-control mb-2" name="genreId" onChange={handleChange} value={formData.genreId} required>
        <option value="">Seleccione género</option>
        {genres.map(g => (
          <option key={g._id} value={g._id}>{g.name}</option>
        ))}
      </select>

      <select className="form-control mb-2" name="directorId" onChange={handleChange} value={formData.directorId} required>
        <option value="">Seleccione director</option>
        {directors.map(d => (
          <option key={d._id} value={d._id}>{d.name}</option>
        ))}
      </select>

      <select className="form-control mb-2" name="producerId" onChange={handleChange} value={formData.producerId} required>
        <option value="">Seleccione productora</option>
        {producers.map(p => (
          <option key={p._id} value={p._id}>{p.name}</option>
        ))}
      </select>

      <select className="form-control mb-2" name="typeId" onChange={handleChange} value={formData.typeId} required>
        <option value="">Seleccione tipo</option>
        {types.map(t => (
          <option key={t._id} value={t._id}>{t.name}</option>
        ))}
      </select>

      <button className="btn btn-primary">
        {selectedMedia ? "Actualizar" : "Crear"}
      </button>
    </form>
  );
};

export default MediaForm;