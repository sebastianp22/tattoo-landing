import Header from './components/Header';
import Hero from './components/Hero';
import ContactForm from './components/ContactForm';

function App() {
  return (
    <div className="app-shell">
      <Header />

      <main>
        <Hero />

        <section className="section-dark" id="trabajos">
          <div className="section-container">
            <p className="section-label">Galería</p>
            <h2 className="section-title">Trabajos recientes</h2>
            <p className="section-description">
              Una selección de piezas que reflejan mi estilo, precisión y
              atención al detalle. Black y Black & Grey con composición limpia y
              significado.
            </p>

            <div className="gallery-category">
              <h3 className="gallery-category-title">Realismo</h3>
              <div className="gallery-grid">
                <div className="gallery-card">
                  <img src="/Realismo/realismo1.JPG" alt="Realismo" />
                </div>
                <div className="gallery-card">
                  <img src="/Realismo/realismo2.JPG" alt="Realismo" />
                </div>
                <div className="gallery-card">
                  <img src="/Realismo/realismo3.jpg" alt="Realismo" />
                </div>
              </div>
            </div>

            <div className="gallery-category">
              <h3 className="gallery-category-title">Anime</h3>
              <div className="gallery-grid">
                <div className="gallery-card">
                  <img src="/Anime/anime1.jpg" alt="Anime" />
                </div>
                <div className="gallery-card">
                  <img src="/Anime/anime2.jpg" alt="Anime" />
                </div>
                <div className="gallery-card">
                  <img src="/Anime/anime3.jpg" alt="Anime" />
                </div>
              </div>
            </div>

            <div className="gallery-category">
              <h3 className="gallery-category-title">Realismo Abstracto</h3>
              <div className="gallery-grid">
                <div className="gallery-card">
                  <img
                    src="/Realismo Abstracto/realismo-abstracto1.jpg"
                    alt="Realismo Abstracto"
                  />
                </div>
                <div className="gallery-card">
                  <img
                    src="/Realismo Abstracto/realismo-abstracto2.jpg"
                    alt="Realismo Abstracto"
                  />
                </div>
                <div className="gallery-card">
                  <img
                    src="/Realismo Abstracto/realismo-abstracto3.jpg"
                    alt="Realismo Abstracto"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section-light" id="about">
          <div className="section-container section-narrow">
            <p className="section-label section-label-light">Sobre mí</p>
            <h2 className="section-title section-title-light">
              Diseño tatuajes con intención y carácter
            </h2>
            <p className="section-description section-description-light">
              Me enfoco en Blackwork y Black & Grey, creando composiciones que
              se adaptan a cada persona. Mi objetivo es que cada pieza tenga una
              presencia fuerte, buena lectura visual y una ejecución limpia.
            </p>
          </div>
        </section>

        <section id="contacto">
          <ContactForm />
        </section>
      </main>
    </div>
  );
}

export default App;
