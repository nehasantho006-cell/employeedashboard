import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar navbar-dark bg-dark px-4">
      <Link className="navbar-brand" to="/">
        Employee Dashboard
      </Link>

      <div>
        <Link className="btn btn-outline-light me-2" to="/">
          Home
        </Link>

        <Link className="btn btn-outline-light" to="/employee">
          Employee Form
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;