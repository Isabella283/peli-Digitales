import { useEffect, useState } from "react";
import genreService from "../../api/genre-service";
import GenreForm from "./genre-form";
import GenreList from "./genre-list";

const GenrePage = () => {
  const [genres, setGenres] = useState([]);
  const [selectedGenre, setSelectedGenre] = useState(null);

  const fetchGenres = async () => {
    const response = await genreService.getGenres();
    setGenres(response.data);
  };

  useEffect(() => {
    fetchGenres();
  }, []);

  const handleCreateOrUpdate = async (data) => {
    if (selectedGenre) {
      await genreService.updateGenre(selectedGenre._id, data);
      setSelectedGenre(null);
    } else {
      await genreService.createGenre(data);
    }

    fetchGenres();
  };

  const handleEdit = (genre) => {
    setSelectedGenre(genre);
  };

  const handleToggle = async (id) => {
    await genreService.toggleGenreStatus(id);
    fetchGenres();
  };

  return (
    <div className="container mt-4">
      <h2>Gestión de Géneros</h2>

      <GenreForm
        onSubmit={handleCreateOrUpdate}
        selectedGenre={selectedGenre}
      />

      <GenreList
        genres={genres}
        onEdit={handleEdit}
        onToggle={handleToggle}
      />
    </div>
  );
};

export default GenrePage;