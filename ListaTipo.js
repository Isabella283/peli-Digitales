const TypeList = ({ types, onEdit }) => {
  return (
    <table className="table">
      <thead>
        <tr>
          <th>Nombre</th>
          <th>Acciones</th>
        </tr>
      </thead>

      <tbody>
        {types.map((type) => (
          <tr key={type._id}>
            <td>{type.name}</td>
            <td>
              <button
                className="btn btn-warning btn-sm"
                onClick={() => onEdit(type)}
              >
                Editar
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TypeList;