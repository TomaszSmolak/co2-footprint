import React, { useMemo } from "react";
import data from "../../assets/data/data.json";
import "./Company.style.css";

export default function Company() {
  const companies = data?.companies ?? [];
  const countries = data?.countries ?? [];

  // Hilfsfunktion: Land zum Unternehmen finden
  const getCountry = (countryId) =>
    countries.find((c) => c.countryId === countryId);

  // Sortiere nach Firmenname
  const sorted = useMemo(
    () => [...companies].sort((a, b) => a.name.localeCompare(b.name, "de")),
    [companies]
  );

  return (
    <div className="container-fluid py-4">
      {/* Hinweis/Warnbox */}
      <div className="alert alert-warning shadow-sm mb-4" role="alert">
        <strong>Hinweis:</strong> Diese Seite ist Teil eines Hochschulprojekts.  
        Die dargestellten Unternehmen wurden <u>zufällig generiert</u> und dienen nur Demonstrationszwecken.
      </div>

      {/* Glasbox über volle Breite */}
      <div className="glassbox p-3 p-md-4">
        <h2 className="mb-4">Unternehmensübersicht</h2>

        {/* 3-Spalten Layout */}
        <div className="row g-3">
          {sorted.map((comp) => {
            const country = getCountry(comp.countryId);
            return (
              <div key={comp.companyId} className="col-12 col-md-6 col-lg-4">
                <div className="d-flex flex-column p-3 border rounded bg-light bg-opacity-10 h-100">
                  <span className="fw-bold mb-2">{comp.name}</span>
                  {country ? (
                    <div className="d-flex align-items-center">
                      <span
                        className={`fi fi-${country.iso} me-2`}
                        style={{ fontSize: "1.3rem" }}
                      />
                      <span>{country.name}</span>
                    </div>
                  ) : (
                    <span className="text-body-secondary">Land unbekannt</span>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
