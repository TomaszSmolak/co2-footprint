import React, { useMemo } from "react";
import data from "../../assets/data/data.json";
import "./Country.style.css";

export default function CountryList() {
  const countries = data?.countries ?? [];

  // alphabetisch sortieren
  const sorted = useMemo(
    () => [...countries].sort((a, b) => a.name.localeCompare(b.name, "de")),
    [countries]
  );

  return (
    <div className="container-fluid py-4">
      {/* Hinweis/Warnbox */}
      <div className="alert alert-warning shadow-sm mb-4" role="alert">
        <strong>Hinweis:</strong> Diese Seite ist Teil eines Hochschulprojekts.  
        Die dargestellten Länder wurden <u>zufällig ausgewählt</u> und dienen nur Demonstrationszwecken.
      </div>

      {/* Glasbox über volle Breite */}
      <div className="glassbox p-3 p-md-4">
        <h2 className="mb-4">Ländertabelle</h2>

        {/* 3-Spalten Layout mit Bootstrap */}
        <div className="row g-3">
          {sorted.map((c) => (
            <div key={c.countryId} className="col-12 col-md-6 col-lg-4">
              <div className="d-flex align-items-center p-2 border rounded bg-light bg-opacity-10">
                <span
                  className={`fi fi-${c.iso} me-2`}
                  title={c.name}
                  style={{ fontSize: "1.5rem" }}
                />
                <span className="fw-medium">{c.name}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
