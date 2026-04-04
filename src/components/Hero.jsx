import heroImage from '../assets/Hero.jpg';

function Hero() {
  return (
    <>
    {/* Hero con imagen de fondo */}
    <section style={{
      minHeight: '100vh',
      backgroundImage: `url(${heroImage})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundAttachment: 'fixed',
      position: 'relative'
    }}>
      { /* Overlay oscuro */ }
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.4)'
      }} />
      </section>

      {/* Bienvenida debajo de la imagen */}
      <section style={{
        backgroundColor: '#fff',
        padding: '60px 20px',
        textAlign: 'center'
      }}>
        <h2 style={{
          fontSize: '42px',
          marginBottom: '30px',
          color: '#1a1a1a'
        }}>
          Bienvenido a mi sitio web oficial
        </h2>
        <p style={{
          fontSize: '18px',
          lineHeight: '1.8',
          maxWidth: '800px',
          margin: '0 auto',
          color: '#555'
        }}>
          Aquí encontrarás mis últimos trabajos de tatuaje. 
          Con más de [X] años de experiencia, me especializo en Black Work, Black&Grey Realism. 
          Cada diseño es único y personalizado para contar tu historia.
        </p>
      </section>

      {/* Información de contacto */}
      <section style={{
        backgroundColor: '#f5f5f5',
        padding: '40px 20px',
        textAlign: 'center'
      }}>
        <div style={{
          maxWidth: '600px',
          margin: '0 auto'
          }}>
            <h3 style={{
              fontSize: '28px',
              marginBottom: '20px',
              color: '#1a1a1a'
            }}>
              [YIN.TTT]
            </h3>
            <p style={{
              marginBottom: '10px',
              color: '#555'
            }}>
              [DIRECCIÓN DEL ESTUDIO]
            </p>
            <p style={{
              marginBottom: '10px',
              color: '#555'
            }}>
              [PUNTA ARENAS, CHILE]
            </p>
            <p style={{
              marginBottom: '20px'
            }}>
              <a href="TELÉFONO: +569 42443344" style={{
                color: '#667eea',
                textDecoration: 'none',
                fontSize: '20px',
                fontWeight: 'bold'
              }}>
                +569 42443344
              </a>
            </p>
            <a href="mailto: [CORREO ELECTRÓNICO]" style={{
              color: '#667eea',
              textDecoration: 'none'
            }}>
              EMAIL
            </a>
          </div>

          {/* Redes sociales */}
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '20px',
            marginTop: '30px'
          }}>
            <a href="https://www.instagram.com/yin.ttt" target="_blank" rel="noopener noreferrer" style={{
              fontSize: '32px',
              color: '#333',
              transition: 'color 0.3s'
            }}>
            </a>
            </div>
        </section>
    </>
  );
}

export default Hero;