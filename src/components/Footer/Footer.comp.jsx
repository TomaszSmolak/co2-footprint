import { Link } from "react-router-dom";
import "./Footer.style.css";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer mt-5 border-top">
      <div className="container py-3">
        <div className="row gy-4 align-items-start">
          {/* Brand / Claim */}
          <div className="col-12 col-md-7">
            <Link to="/" className="footer__logo text-decoration-none">
              CO₂-Footprint
            </Link>
            <p className="footer__tagline mt-2 mb-0">
              Transparenz über fiktive CO₂-Daten von Unternehmen und Ländern.
            </p>
          </div>

          {/* Navigation */}
          <nav className="col-12 col-md-5">
            <ul className="nav flex-column flex-md-row gap-2 gap-md-3 justify-content-md-end">
              <li className="nav-item">
                <Link to="/impressum" className="footer__link nav-link px-2">
                  Impressum
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/datenschutz" className="footer__link nav-link px-2">
                  Datenschutz
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>

      <div className="footer__meta py-2 border-top">
        <div className="container d-flex flex-wrap justify-content-center gap-2">
          <span>© {year} CO₂-Footprint</span>
          <span aria-hidden="true">•</span>
          <span>Studienprojekt – keine realen Daten</span>
        </div>
      </div>
    </footer>
  );
}
