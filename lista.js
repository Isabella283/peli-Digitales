const GenreList = ({ genres, onEdit, onToggle }) => {
  return (
    <table className="table">
      <thead>
        <tr>
          <th>Nombre</th>
          <th>Estado</th>
          <th>Acciones</th>
        </tr>
      </thead>

      <tbody>
        {genres.map((genre) => (
          <tr key={genre._id}>
            <td>{genre.name}</td>
            <td>
              {genre.isActive ? (
                <span className="badge bg-success">Activo</span>
              ) : (
                <span className="badge bg-danger">Inactivo</span>
              )}
            </td>
            <td>
              <button
                className="btn btn-warning btn-sm me-2"
                onClick={() => onEdit(genre)}
              >
                Editar
              </button>

              <button
                className="btn btn-secondary btn-sm"
                onClick={() => onToggle(genre._id)}
              >
                Cambiar Estado
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default GenreList;