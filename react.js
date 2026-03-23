import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <Link className="navbar-brand" to="/">
          Movie Admin
        </Link>

        <div className="navbar-nav">
          <Link className="nav-link" to="/genres">Géneros</Link>
          <Link className="nav-link" to="/directors">Directores</Link>
          <Link className="nav-link" to="/producers">Productoras</Link>
          <Link className="nav-link" to="/types">Tipos</Link>
          <Link className="nav-link" to="/media">Media</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;