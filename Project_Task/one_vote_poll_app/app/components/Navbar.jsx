import "bootstrap/dist/css/bootstrap-grid.min.css";
import Link from "next/link";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-body-white">
      <div className="container-fluid">
        <Link className="navbar-brand" href="#">
          Vote Poll App
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link
                className="nav-link active"
                aria-current="page"
                href="/createpoll"
              >
                Create new Poll
              </Link>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/addpoll">
                Add Poll
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/login">
                Login
              </a>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                States
              </a>
              <ul className="dropdown-menu">
                <li>
                  <a className="dropdown-item" href="#">
                    Gujurat
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Maharastra
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Bihar
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
export default Navbar;
