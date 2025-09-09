import "./Hero.style.css";
import HeroLogo from "../../assets/logos/umcatla-logo2.png";
export default function Hero() {
  return (
    <>
      <section
        id="home"
        className="hero-section d-flex flex-column align-items-center justify-content-center text-center"
      >
        <img src={HeroLogo} alt="UmCATla Hero" className="hero-logo mb-4" />
        <h1 className="fw-bold">UmCATla</h1>
        <p className="lead">Der Weg zur Klimaneutralität</p>
      </section>
    </>
  );
}
