function Hero() {
  return (
    <section style={{
      minHeight: '600px',
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: '#fff',
      textAlign: 'center',
      padding: '40px 20px',
    }}>
      <div style={{
        maxWidth: '800px' 
        }}>
        <h1 style={{
          fontSize: '56px',
          marginBottom: '20px',
          fontWeight: 'bold',
          textShadow: '2px 2px 4px rgba(0, 0, 0, 0.3)'
        }}>
          Arte en tu piel
        </h1>

        <p style={{
          fontSize: '20px',
          marginBottom: '40px',
          lineHeight: '1.6',
          opacity: 0.95
        }}>
          Descubre el poder de la tinta con nuestros diseños personalizados.
        </p>

        <div style={{
          display: 'flex',
          gap: '20px',
          justifyContent: 'center',
          flexWrap: 'wrap'
        }}>
          <a href="#gallery" 
          style={{
            justifyContent: 'center',
            backgroundColor: '#fff',
            color: '#764ba2',
            padding: '12px 30px',
            borderRadius: '30px',
            textDecoration: 'none',
            fontSize: '18px',
            fontWeight: 'bold',
            boxShadow: '0 4px 15px rgba(0, 0, 0, 0.2)',
            transition: 'transform 0.3s',
          }}>
            Ver Galería
          </a>
          <a href="#contact"
          style={{
            backgroundColor: 'transparent',
            color: '#fff',
            justifyContent: 'center',
            padding: '15px 40px',
            borderRadius: '30px',
            textDecoration: 'none',
            fontSize: '18px',
            fontWeight: 'bold',
            border: '2px solid #fff',
            transition: 'all 0.3s',
            
          }}
          >
            Contáctame
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;