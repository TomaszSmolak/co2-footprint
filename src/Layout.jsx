import Title from "./components/Header/Title.comp.jsx";
import Navbar from "./components/Header/Navbar.comp.jsx";
import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <>
      {/* Kopfbereich */}
      <Title />
      <Navbar />

      {/* Hauptbereich (je nach Route wechselt hier der Inhalt) */}
      <main className="container-fluid px-0">
        <Outlet />
      </main>
    </>
  );
}
