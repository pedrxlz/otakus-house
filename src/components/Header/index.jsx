import { useMediaQuery } from "../../hooks/useMediaQuery.jsx";

import Link from "next/link.js";

export const Header = () => {
  const isMobile = useMediaQuery("(max-width: 992px)");

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
            {isMobile && (
              <li className="nav-item">
                <Link className="nav-link fw-semibold" href="/login">
                  Login
                </Link>
              </li>
            )}
          </ul>
        </div>
        {!isMobile && (
          <Link href="/login" className="nav-link fw-semibold">
            Login
          </Link>
        )}
      </div>
    </nav>
  );
};
