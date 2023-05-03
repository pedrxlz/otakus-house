import Link from "next/link.js";

export const Header = ({}) => {
  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container-fluid">
        <Link
          className="navbar-brand fw-bolder fs-4"
          href="/"
          style={{ color: "#00a39c" }}
        >
          OtakusHouse
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link
                className="nav-link fw-semibold"
                aria-current="page"
                href="/"
              >
                Início
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link fw-semibold" href="/travels">
                Minhas reservas
              </Link>
            </li>
          </ul>
        </div>
        <div id="loginField"></div>
      </div>
    </nav>
  );
};
