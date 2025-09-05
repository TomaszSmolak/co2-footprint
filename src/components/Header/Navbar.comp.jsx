import { useMemo } from "react";
import "./Navbar.style.css";
import co2Logo from "../../assets/logos/co2.png";

export default function Navbar() {
  const alignClass = useMemo(() => {
    const dir = document?.dir || document?.documentElement?.dir || "ltr";
    return dir === "rtl" ? "me-auto" : "ms-auto";
  }, []);

  return (
    <>
      <nav className="navbar navbar-expand-md navbar-light border-bottom sticky-top">
        <div className="container-fluid">
          <a
            className="navbar-brand d-flex align-items-center"
            href="#top"
            aria-label="Zur Startseite"
          >
            <img src={co2Logo} alt="Brand Icon" className="brand-icon me-2" />
            <span className="fw-bold fs-4">CO₂-Footprint</span>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#mainNav"
            aria-controls="mainNav"
            aria-expanded="false"
            aria-label="Navigation umschalten"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="mainNav">
            <ul className={`navbar-nav ${alignClass} mb-2 mb-md-0`}>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#home">
                  Start
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#data">
                  Daten
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#companies">
                  Unternehmen
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#countries">
                  Länder
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#about">
                  About us
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://github.com/TomaszSmolak/co2-footprint"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
