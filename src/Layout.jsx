import Title from "./components/Header/Title.comp.jsx";
import Navbar from "./components/Header/Navbar.comp.jsx";
import Footer from "./components/Footer/Footer.comp.jsx";
import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <div className="d-flex flex-column min-vh-100">
      {/* Kopfbereich */}
      <Title />
      <Navbar />

      {/* Hauptbereich (füllt den verbleibenden Platz) */}
      <main className="container-fluid px-0 flex-grow-1">
        <Outlet />
      </main>

      {/* Footer immer am Seitenende (nicht fixiert) */}
      <Footer />
    </div>
  );
}
