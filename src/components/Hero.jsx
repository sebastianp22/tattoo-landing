function Hero() {
  return (
    <section
      id="inicio"
      style={{
        minHeight: '100vh',
        // FONDO QUITADO: ahora usa el de .app-shell
        color: '#f5f5f5',
        display: 'flex',
        alignItems: 'center',
        padding: '100px 20px 80px',
      }}
    >
      <div
        style={{
          maxWidth: '1200px',
          width: '100%',
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '48px',
          alignItems: 'center',
        }}
      >
        <div>
          <p
            style={{
              color: '#c9a96e',
              textTransform: 'uppercase',
              letterSpacing: '0.14em',
              fontSize: '0.82rem',
              marginBottom: '18px',
            }}
          >
            Estudio de tatuajes en Punta Arenas
          </p>

          <h1
            style={{
              fontSize: 'clamp(2.8rem, 8vw, 5.8rem)',
              lineHeight: 1,
              marginBottom: '20px',
              letterSpacing: '-0.04em',
              maxWidth: '8ch',
            }}
          >
            Tatuajes con carácter, detalle y visión artística.
          </h1>

          <p
            style={{
              fontSize: '1.05rem',
              lineHeight: 1.8,
              color: '#b5b5b5',
              maxWidth: '580px',
              marginBottom: '28px',
            }}
          >
            Creo piezas personalizadas con una estética oscura, limpia y
            atemporal. Trabajo principalmente Blackwork y Black & Grey, con un
            enfoque cuidadoso en composición, lectura visual y significado.
          </p>

          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '12px',
              marginBottom: '32px',
            }}
          >
            {['Blackwork', 'Black & Grey', 'Diseño personalizado'].map(
              (item) => (
                <span
                  key={item}
                  style={{
                    border: '1px solid #2f2f2f',
                    backgroundColor: '#141414',
                    color: '#d7d7d7',
                    padding: '10px 16px',
                    borderRadius: '999px',
                    fontSize: '0.92rem',
                  }}
                >
                  {item}
                </span>
              )
            )}
          </div>

          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '14px',
              marginBottom: '34px',
            }}
          >
            <a
              href="#contacto"
              style={{
                backgroundColor: '#c9a96e',
                color: '#111',
                padding: '14px 24px',
                borderRadius: '999px',
                textDecoration: 'none',
                fontWeight: 700,
                border: '1px solid #c9a96e',
              }}
            >
              Reservar cita
            </a>

            <a
              href="#trabajos"
              style={{
                backgroundColor: 'transparent',
                color: '#f5f5f5',
                padding: '14px 24px',
                borderRadius: '999px',
                textDecoration: 'none',
                fontWeight: 600,
                border: '1px solid #3a3a3a',
              }}
            >
              Ver trabajos
            </a>
          </div>

          <div
            style={{
              display: 'grid',
              gap: '10px',
              color: '#9d9d9d',
              fontSize: '0.95rem',
            }}
          >
            <p style={{ margin: 0 }}>
              <span style={{ color: '#f0f0f0', fontWeight: 600 }}>
                Ubicación:
              </span>{' '}
              Punta Arenas, Chile
            </p>
            <p style={{ margin: 0 }}>
              <span style={{ color: '#f0f0f0', fontWeight: 600 }}>
                Atención:
              </span>{' '}
              Sesiones personalizadas con evaluación previa
            </p>
          </div>
        </div>

        <div>
          <div
            style={{
              minHeight: '620px',
              borderRadius: '28px',
              background:
                'linear-gradient(180deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.02) 100%)',
              border: '1px solid rgba(255,255,255,0.08)',
              overflow: 'hidden',
              position: 'relative',
              boxShadow: '0 30px 60px rgba(0, 0, 0, 0.35)',
            }}
          >
            <img
              src="/yin1.jpg"
              alt="Artista tatuando una pieza en estudio"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                filter: 'grayscale(100%) contrast(105%) brightness(0.72)',
              }}
            />

            <div
              style={{
                position: 'absolute',
                inset: 0,
                background:
                  'linear-gradient(180deg, rgba(0,0,0,0.12) 0%, rgba(0,0,0,0.55) 100%)',
              }}
            />

            <div
              style={{
                position: 'absolute',
                left: '50%',
                transform: 'translateX(-50%)',
                bottom: '24px',
                width: 'calc(100% - 48px)',
                background: 'rgba(10, 10, 10, 0.75)',
                backdropFilter: 'blur(8px)',
                border: '1px solid rgba(255,255,255,0.08)',
                borderRadius: '20px',
                padding: '18px 20px',
              }}
            >
              <p
                style={{
                  margin: '0 0 6px',
                  color: '#c9a96e',
                  textTransform: 'uppercase',
                  letterSpacing: '0.12em',
                  fontSize: '0.75rem',
                }}
              >
                Sesiones por agenda
              </p>
              <p
                style={{
                  margin: 0,
                  color: '#ececec',
                  lineHeight: 1.6,
                  fontSize: '0.95rem',
                }}
              >
                Diseños pensados para durar, adaptados a tu idea, anatomía y
                estilo personal.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
