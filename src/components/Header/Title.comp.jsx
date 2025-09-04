import "./Title.style.css";
import umcatlaLogo from "../../assets/logos/umcatla-logo.jpg";
import iuLogo from "../../assets/logos/iu-logo.svg";

export default function Title() {
  return (
    <header className="container-fluid titlebar">
      <div className="row align-items-center">
       
        <div className="col-3 d-flex">
          <a
            href="https://www.iu.de/"
            target="_blank"
            rel="noopener noreferrer"
            className="d-inline-block"
          >
            <img src={iuLogo} alt="IU Logo" className="logo d-block iu-logo" />
          </a>
        </div>

       
        <div className="col-6 text-center">
          <h1 className="h4 mb-0 title">CO₂-Footprint</h1>
        </div>

        
        <div className="col-3 d-flex justify-content-end">
          <a
            href="https://github.com/TomaszSmolak/co2-footprint"
            target="_blank"
            rel="noopener noreferrer"
            className="d-inline-block"
          >
            <img
              src={umcatlaLogo}
              alt="UmCATla Logo"
              className="logo d-block umcatla-logo"
            />
          </a>
        </div>
      </div>
    </header>
  );
}
