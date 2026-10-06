import './App.css'

function App() {
  return (
    <main className="site">
      <nav className="navbar">
        <div className="brand">ICE TATTO</div>

        <div className="nav-links">
          <a href="#inicio">Inicio</a>
          <a href="#estilos">Estilos</a>
          <a href="#galeria">Galería</a>
          <a href="#nosotros">Nosotros</a>
          <a href="#contacto">Contacto</a>
        </div>

        <a className="nav-button" href="#reserva">
          RESERVAR
        </a>
      </nav>

      <section className="hero" id="inicio">
        <div className="hero-content">
          <p className="eyebrow">TATTOO STUDIO</p>

          <h1>
            ICE
            <span>TATTO</span>
          </h1>

          <p className="hero-description">
            Arte permanente. Identidad propia.
            <br />
            Diseños creados para llevar tu estilo en la piel.
          </p>

          <div className="hero-buttons">
            <a href="#reserva" className="primary-button">
              RESERVAR HORA
            </a>

            <a href="#galeria" className="secondary-button">
              VER TRABAJOS
            </a>
          </div>
        </div>

        <div className="hero-mark">
          <span>ICE</span>
          <span>TATTO</span>
        </div>

        <div className="scroll">
          <span></span>
          SCROLL
        </div>
      </section>

      <section className="intro" id="estilos">
        <p className="section-label">01 — ESTILOS</p>

        <h2>
          TU PIEL.
          <br />
          <span>TU HISTORIA.</span>
        </h2>

        <p>
          Una sección preparada para mostrar los estilos de tatuaje
          disponibles en ICE TATTO.
        </p>

        <div className="style-grid">
          <div className="style-card">
            <span>01</span>
            <h3>BLACKWORK</h3>
          </div>

          <div className="style-card">
            <span>02</span>
            <h3>REALISMO</h3>
          </div>

          <div className="style-card">
            <span>03</span>
            <h3>FINE LINE</h3>
          </div>

          <div className="style-card">
            <span>04</span>
            <h3>TRADICIONAL</h3>
          </div>
        </div>
      </section>

      <section className="gallery" id="galeria">
        <p className="section-label">02 — GALERÍA</p>

        <h2>
          PRÓXIMAMENTE
          <br />
          <span>NUESTROS TRABAJOS</span>
        </h2>

        <div className="empty-gallery">
          <div className="chrome-symbol">✦</div>
          <p>
            Aquí aparecerán los trabajos de
            <strong> ICE TATTO</strong>.
          </p>
        </div>
      </section>

      <section className="about" id="nosotros">
        <div>
          <p className="section-label">03 — NOSOTROS</p>

          <h2>
            MÁS QUE UN
            <br />
            <span>TATUAJE.</span>
          </h2>
        </div>

        <p className="about-text">
          Este espacio estará destinado a contar la historia de ICE TATTO,
          presentar al equipo y mostrar la filosofía detrás de cada trabajo.
        </p>
      </section>

      <section className="booking" id="reserva">
        <p className="section-label">04 — RESERVAS</p>

        <h2>
          COMIENZA
          <br />
          <span>TU HISTORIA.</span>
        </h2>

        <p>
          Próximamente podrás solicitar tu hora directamente desde aquí.
        </p>

        <button className="primary-button">RESERVAR HORA</button>
      </section>

      <footer id="contacto">
        <div className="footer-brand">ICE TATTO</div>

        <div className="footer-info">
          <span>INSTAGRAM</span>
          <span>WHATSAPP</span>
          <span>UBICACIÓN</span>
        </div>

        <p>© 2026 ICE TATTO — TATTOO STUDIO</p>
      </footer>
    </main>
  )
}

export default App