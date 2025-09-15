import "./AboutUs.style.css";
import HeroLogo from "../../assets/logos/umcatla-logo2.png";

export default function AboutUs() {
  return (
    <section className="aboutus-section container-fluid min-vh-100 p-0" aria-labelledby="aboutus-title">
      <div className="row g-0 min-vh-100">
        {/* Diagonales Panel mit Logo (links) */}
        <div className="col-12 col-lg-5 aboutus-hero d-flex align-items-center">
          <img
            src={HeroLogo}
            alt="UmCATLa CO₂-Logo"
            className="img-fluid aboutus-logo"
            loading="eager"
            decoding="async"
            fetchpriority="high"
            draggable="false"
          />
        </div>

        {/* Content rechts: Hinweisbox + Glas-Card */}
        <div className="col-12 col-lg-7 d-flex align-items-center aboutus-content">
          {/* WICHTIG: Spalten-Layout, damit Hinweis über der Glas-Box steht */}
          <div className="w-100 d-flex flex-column align-items-center gap-3">
            {/* Hinweisbox mit Bootstrap Icon */}
            <div className="aboutus-notice" role="note" aria-live="polite">
              <i className="bi bi-exclamation-triangle-fill aboutus-notice-icon" aria-hidden="true"></i>
              <div className="aboutus-notice-text">
                <strong>Hinweis:</strong> Diese Non-Profit-Organisation ist <em>fiktiv</em> und
                dient ausschließlich dem Zweck einer Aufgabe im Rahmen einer Fallstudie an der IU.
              </div>
            </div>

            {/* Glas-Textbox */}
            <article className="aboutus-glass p-3 p-md-4 p-lg-4">
              <h1 id="aboutus-title" className="h2 fw-semibold mb-2">
                UmCATLa – CO₂ transparent machen. Lösungen für morgen ermöglichen.
              </h1>

              <p className="lead mb-2">
                UmCATLa ist eine gemeinnützige Organisation. Unsere Vision ist es,
                die Welt nachhaltig zu verbessern. Unsere Mission: den CO₂-Ausstoß
                für alle verständlich und vergleichbar zu machen – als Fundament
                für wirksame Klimaschutzlösungen.
              </p>

              <p className="mb-2">
                Wir schaffen ein offenes Fundament aus Daten, Methoden und Werkzeugen, damit
                Unternehmen, Kommunen und Bürgerinnen und Bürger ihren Fußabdruck erkennen,
                Fortschritte messen und bessere Entscheidungen treffen können. Transparenz ist
                der erste Schritt zur wirksamen Reduktion.
              </p>

              <p className="mb-0">
                Als <em>Non-Profit</em> arbeiten wir kollaborativ mit Wissenschaft,
                Zivilgesellschaft und Wirtschaft. Unser Fokus liegt auf Qualität,
                Nachvollziehbarkeit und Zugänglichkeit – damit Klimaschutz vom Buzzword
                zur Praxis wird.
              </p>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}
