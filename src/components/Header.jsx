function Header() {
  return (
    <header style={{ 
      backgroundColor: '#333', 
      color: '#fff', 
      padding: '1rem', 
      position: 'sticky',
      top: 0,
      zIndex: 1000,
      boxShadow: '0 2px 10px rgba(0, 0, 0, 0.3)'
    }}>
      <nav style={{ 
        display: 'flex', 
        justifyContent: 'space-between', 
        alignItems: 'center', 
        maxWidth: '1200px',
        margin: '0 auto'
    }}>
      {/* Logo */
      }
      INK STUDIO
    

    {/* Navigation links */}
    <ul style={{
      display: 'flex',
      listStyle: 'none',
      gap: '1rem',
      margin: 0,
      padding: 0
    }}>
      <li><a href="#gallery" style={{
        color: '#fff',
        textDecoration: 'none',
        fontSize: '16px',
        transition: 'color 0.3s'
      }}>
        Galería
      </a>
      </li>
      <li><a href="#about" style={{
        color: '#fff', 
        textDecoration: 'none',
        fontSize: '16px'
      }}>
        Sobre Mí
      </a>
      </li>
      <li><a href="#contact" style={{
        color: '#fff', 
        textDecoration: 'none',
        fontSize: '16px'
      }}>
        Contacto
      </a>
    </li>
  </ul>
  </nav>
  </header>
  );
}

export default Header;