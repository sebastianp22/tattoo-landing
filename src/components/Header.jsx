function Header() {
  return (
    <header
      style={{
        backgroundColor: 'rgba(0, 0, 0, 0.95)',
        color: '#fff',
        padding: '15px 30px',
        position: 'sticky',
        top: 0,
        zIndex: 1000,
        boxShadow: '0 2px 10px rgba(0, 0, 0, 0.3)',
        backdropFilter: 'blur(10px)',
      }}
    >
      <nav
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          maxWidth: '1400px',
          margin: '0 auto',
        }}
      >
        {/* Logo */}
        INK STUDIO
        {/* Navigation links */}
        <ul
          style={{
            display: 'flex',
            listStyle: 'none',
            gap: '35px',
            margin: 0,
            padding: 0,
            alignItems: 'center',
          }}
        >
          <li>
            <a
              href="#gallery"
              style={{
                color: '#fff',
                textDecoration: 'none',
                fontSize: '15px',
                textTransform: 'uppercase',
                letterSpacing: '1px',
                transition: 'opacity 0.3s',
              }}
              onMouseEnter={(e) => (e.target.style.opacity = '0.7')}
              onMouseLeave={(e) => (e.target.style.opacity = '1')}
            >
              GalerÃ­a
            </a>
          </li>
          <li>
            <a
              href="#about"
              style={{
                color: '#fff',
                textDecoration: 'none',
                fontSize: '15px',
                textTransform: 'uppercase',
                letterSpacing: '1px',
              }}
              onMouseEnter={(e) => (e.target.style.opacity = '0.7')}
              onMouseLeave={(e) => (e.target.style.opacity = '1')}
            >
              Sobre MÃ­
            </a>
          </li>
          <li>
            <a
              href="#contact"
              style={{
                color: '#fff',
                textDecoration: 'none',
                fontSize: '15px',
                textTransform: 'uppercase',
                letterSpacing: '1px',
              }}
              onMouseEnter={(e) => (e.target.style.opacity = '0.7')}
              onMouseLeave={(e) => (e.target.style.opacity = '1')}
            >
              Contacto
            </a>
          </li>
          <li>
            <a
              href="https://wa.me./+569 42443344"
              target="blank"
              rel="noopener noreferrer"
              style={{
                backgroundColor: '#25D366',
                color: 'white',
                padding: '10px 20px',
                borderRadius: '25px',
                textDecoration: 'none',
                fontSize: '14px',
                fontWeight: 'bold',
                transition: 'background 0.3s',
              }}
              onMouseEnter={(e) => (e.target.style.backgroundColor = '#128C7E')}
              onMouseLeave={(e) => (e.target.style.backgroundColor = '#25D366')}
            >
              Whatsapp
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
