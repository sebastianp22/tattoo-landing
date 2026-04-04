import Header from './components/Header';
import Hero from './components/Hero';
import ContactForm from './components/ContactForm';


function App() {
  return (
    <div style={{ 
      margin: 0,
      padding: 0, 
      fontFamily: 'Arial, Helvetica, sans-serif', 
      backgroundColor: '#0a0a0a'
      }}>

        <Header />
        <Hero />

        <section id="gallery" 
        style={{ 
          minHeight: '400PX',
          padding: '60px 20px', 
          backgroundColor: '#f5F5F5' 
          }}>
          <h2 style={{ textAlign: 'center' }}>Galería de Tatuajes (proximamente)</h2>
        </section>

        <section id="about"
        style={{
          minHeight: '400px',
          padding: '60px 20px',
          backgroundColor: '#ffffff'
        }}>
          <h2 style={{ textAlign: 'center' }}>Sobre Mí (proximamente)</h2>
        </section>
        
        <section id="contact">
        <ContactForm />
        </section>
        </div>
  );
};

export default App;