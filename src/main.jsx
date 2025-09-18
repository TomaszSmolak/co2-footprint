/**
 * App-Bootstrap
 * - Bindet globale Styles & Vendor-CSS.
 * - Mountet die App in #root mit React StrictMode und React Router.
 */

import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import './styles/variables.css';        // Theme-Variablen (Farben etc.)
import './index.css';                   // globale Basis-Styles/Reset
import App from './App.jsx';

// Vendor-CSS & -JS (Bootstrap, Icons, Flaggen)
// Hinweis: Falls du eigene globale Styles bewusst *über* Bootstrap legen willst,
// importiere Bootstrap-CSS vor deinen globalen CSS-Dateien.
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'flag-icons/css/flag-icons.min.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* Router für Client-Side-Routing */}
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
);

/*
  Notiz:
  - StrictMode löst in DEV bestimmte Effekte doppelt aus (z. B. useEffect-Mount),
    um Nebenwirkungen aufzudecken. Im Build ist das Verhalten „normal“.
*/
