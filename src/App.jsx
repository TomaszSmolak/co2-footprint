import "./App.css";
import Title from "./components/Header/Title.comp.jsx";
import Navbar from "./components/Header/Navbar.comp.jsx";
import Hero from "./components/Content/Hero.comp.jsx";

export default function App() {
  return (
    <>
      <Title />
      <Navbar />
      <Hero />
    </>
  );
}
