import { Routes, Route } from "react-router-dom";
import "./App.css";
import Layout from "./Layout.jsx";
import Hero from "./components/Content/Hero.comp.jsx";
import Table from "./components/Content/Table.comp.jsx";
import Company from "./components/Content/Company.comp.jsx";
import Country from "./components/Content/Country.comp.jsx";
import AboutUs from "./components/Content/AboutUs.comp.jsx";

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        {/* Startseite */}
        <Route path="/" element={<Hero />} />

        {/* Weitere Seiten */}
        <Route path="/data" element={<Table />} />
        <Route path="/companies" element={<Company />} />
        <Route path="/countries" element={<Country />} />
        <Route path="/about" element={<AboutUs />} />

        {/* Optional: Fallback auf Startseite */}
        {/* <Route path="*" element={<Hero />} /> */}
      </Route>
    </Routes>
  );
}
