const MediaList = ({ media, onEdit, onDelete }) => {
  return (
    <table className="table">
      <thead>
        <tr>
          <th>Título</th>
          <th>Género</th>
          <th>Director</th>
          <th>Acciones</th>
        </tr>
      </thead>

      <tbody>
        {media.map(item => (
          <tr key={item._id}>
            <td>{item.title}</td>
            <td>{item.genreId?.name}</td>
            <td>{item.directorId?.name}</td>
            <td>
              <button className="btn btn-warning btn-sm me-2" onClick={() => onEdit(item)}>Editar</button>
              <button className="btn btn-danger btn-sm" onClick={() => onDelete(item._id)}>Eliminar</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default MediaList;