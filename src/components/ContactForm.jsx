import { useEffect, useState } from 'react';

function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [submitCount, setSubmitCount] = useState(0);
  const [isBlocked, setIsBlocked] = useState(false);
  const [blockTimer, setBlockTimer] = useState(0);
  const [successMessage, setSuccessMessage] = useState('');

  // Rate limiting: bloquear después de 3 intentos
  useEffect(() => {
    if (submitCount >= 3) {
      setIsBlocked(true);
      setBlockTimer(300); // Bloquear por 5 minutos (300 segundos)
    }
  }, [submitCount]);

  // Contador de bloqueos
  useEffect(() => {
    if (isBlocked && blockTimer > 0) {
      const timer = setTimeout(() => {
        setBlockTimer(blockTimer - 1);
      }, 1000);
      return () => clearTimeout(timer);
    } else if (blockTimer === 0 && isBlocked) {
      setIsBlocked(false);
      setSubmitCount(0);
    }
  }, [blockTimer, isBlocked]);

  // Validación del Email
  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  // Validación del Teléfono Chileno
  const validatePhone = (phone) => {
    const regex = /^(?:\+?56)?(?:\s?0?9\s?)?[9876543]\d{7}$/;
    return regex.test(phone.replace(/\s/g, ''));
  };

  // Sanitización de entrada para prevenir XSS
  const sanitizeInput = (input) => {
    return input
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#x27;')
    .replace(/\//g, '&#x2F;');
  };

  // Validación del formulario
  const validateForm = () => {
    const newErrors = {};

    // Validación del Nombre
    if (!formData.name.trim()) {
      newErrors.name = 'El nombre es obligatorio';
    } else if (formData.name.trim().length < 2) {
      newErrors.name = 'El nombre debe tener al menos 2 caracteres';
    }

    // Validación del Email
    if (!formData.email.trim()) {
      newErrors.email = 'El email es obligatorio';
    } else if (!validateEmail(formData.email)) {
      newErrors.email = 'El email no es válido';
    }

    // Validación del Teléfono
    if (formData.phone.trim() && !validatePhone(formData.phone)) {
      newErrors.phone = 'El teléfono no es válido. Debe ser un número chileno formato +56 9 XXXX XXXX';
    }

    // Validación del Mensaje
    if (!formData.message.trim()) {
      newErrors.message = 'El mensaje es obligatorio';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'El mensaje debe tener al menos 10 caracteres';
    }

  return newErrors;
  };

  // Manejar cambios en inputs
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  
    // Limpiar el error del campo cuando el usuario escribe
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: ''
      });
    }
  };

  // Manejar envío del formulario
  const handleSubmit = (e) => {
    e.preventDefault();
    setSuccessMessage('');

    // Verificar si el formulario está bloqueado
    if (isBlocked) {
      const minutes = Math.floor(blockTimer / 60);
      const seconds = blockTimer % 60;
      alert (`Has alcanzado el límite de intentos. Por favor, espera ${minutes}m ${seconds}s minutos antes de intentar nuevamente.`);
      return;
    }

    // Validar el formulario
    const validationErrors = validateForm();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setSubmitCount(submitCount + 1);
      return;
    }

    // Sanitizar los datos antes de enviarlos
    const sanitizedData = {
      name: sanitizeInput(formData.name.trim()),
      email: sanitizeInput(formData.email.trim()),
      phone: sanitizeInput(formData.phone.trim()),
      message: sanitizeInput(formData.message.trim())
    };

    // Aquí iría la lógica para envío real API, email service, etc.)
    console.log('Datos enviados:', sanitizedData);

    // Simular éxito
    setSuccessMessage('¡Mensaje enviado con éxito! Te contactaremos pronto.');
    setFormData({
      name: '',
      email: '',
      phone: '',
      message: ''});
    setErrors({});

    // Resetear despues de un envío exitoso
    setTimeout(() => {
      setSuccessMessage('');
    }, 5000);
  };

  return (
    <section id ="contact" style={{ 
      padding: '2rem', 
      backgroundColor: '#f9f9f9', 
      minHeight: '100vh',
      }}>
        <div style={{ 
          maxWidth: '700px', 
          margin: '0 auto' 
          }}>
            <h2 style={{
              textAlign: 'center',
              fontSize: '48px',
              marginBottom: '15px',
              color: 'white',
              fontWeight: 'bold',
              letterSpacing: '2px',
              textTransform: 'uppercase',
            }}>
              Contacto
            </h2>

            <p style={{
              textAlign: 'center',
              fontSize: '18px',
              marginBottom: '50px',
              color: '#999',
            }}>
              ¿Tienes alguna pregunta o quieres trabajar juntos? ¡Envíame un mensaje!
            </p>

            {/* Formulario de contacto */}
            <form onSubmit={handleSubmit} style={{
              backgroundColor: '1a1a1a',
              padding: '40px',
              borderRadius: '10px',
              border: '1px solid #333',
            }}>

              {/* Mensaje de éxito */}
              {successMessage && (
                <div style={{
                  backgroundColor: '#10b981',
                  padding: '15px',
                  borderRadius: '8px',
                  color: 'white',
                  marginBottom: '25px',
                  textAlign: 'center',
                  fontWeight: 'bold',
                }}>
                  {successMessage}
                </div>
              )}

              {/* Advertencia de rate limiting */}
              {isBlocked && (
                <div style={{
                  backgroundColor: '#ef4444',
                  color: 'white',
                  padding: '15px',
                  borderRadius: '8px',
                  marginBottom: '25px',
                  textAlign: 'center'
                }}>
                  Has alcanzado el límite de intentos. Por favor, espera 
                  {Math.floor(blockTimer / 60)}m {blockTimer % 60}s antes de intentar nuevamente.
                </div>
              )}
              
              {/* Nombre */}
              <div style={{ marginBottom: '25px' }}>
                <label style={{ 
                  display: 'block', 
                  color: 'white',
                  marginBottom: '8px', 
                  fontSize: '14px',
                  fontWeight: 'bold', 
                  letterSpacing: '0.5px',
                  }}>
                    Nombre *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    style={{
                      width: '100%',
                      padding: '15px',
                      fontSize: '16px',
                      borderRadius: '6px',
                      border: errors.name ? '2px solid #ef4444' : '1px solid #333',
                      backgroundColor: '#0a0a0a',
                      color: 'white',
                      outline: 'none',
                      transition: 'border 0.3s',
                    }}
                    onFocus={(e) => e.target.style.border = '1px solid #667eea'}
                    onBlur={(e) => e.target.style.border = errors.name ? '2px solid #ef4444' : '1px solid #333'}
                  />
                  {errors.name && (<p style={{ 
                    color: '#ef4444', 
                    marginTop: '5px', 
                    fontSize: '14px' 
                    }}>{errors.name}</p>)}
                    </div>

                    {/* Email */}
                    <div style={{ marginBottom: '25px' }}>
                      <label style={{ 
                        display: 'block', 
                        color: 'white',
                        marginBottom: '8px', 
                        fontSize: '14px',
                        fontWeight: 'bold', 
                        letterSpacing: '0.5px',
                        }}>
                          EMAIL *
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          style={{
                            width: '100%',
                            padding: '15px',
                            fontSize: '16px',
                            borderRadius: '6px',
                            border: errors.email ? '2px solid #ef4444' : '1px solid #333',
                            backgroundColor: '#0a0a0a',
                            color: 'white',
                            outline: 'none'
                          }}
                          onFocus={(e) => e.target.style.border = '1px solid #667eea'}
                          onBlur={(e) => e.target.style.border = errors.email ? '2px solid #ef4444' : '1px solid #333'}
                        />
                        {errors.email && (<p style={{ 
                          color: '#ef4444', 
                          marginTop: '5px', 
                          fontSize: '14px' 
                          }}>{errors.email}</p>)}
                    </div>

                    {/* Teléfono */}
                    <div style={{ marginBottom: '25px' }}>
                      <label style={{
                        display: 'block', 
                        color: 'white',
                        marginBottom: '8px', 
                        fontSize: '14px',
                        fontWeight: 'bold', 
                        letterSpacing: '0.5px',
                        }}>
                          Teléfono *
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          style={{
                            width: '100%',
                            padding: '15px',
                            fontSize: '16px',
                            borderRadius: '6px',
                            border: errors.phone ? '2px solid #ef4444' : '1px solid #333',
                            backgroundColor: '#0a0a0a',
                            color: 'white',
                            outline: 'none'
                          }}
                          onFocus={(e) => e.target.style.border = '1px solid #667eea'}
                          onBlur={(e) => e.target.style.border = errors.phone ? '2px solid #ef4444' : '1px solid #333'}
                        />
                        {errors.phone && (<p style={{ 
                          color: '#ef4444', 
                          marginTop: '5px', 
                          fontSize: '14px' 
                          }}>{errors.phone}</p>)}
                    </div>

                    {/* Mensaje */}
                    <div style={{ marginBottom: '25px' }}>
                      <label style={{
                        display: 'block', 
                        color: 'white',
                        marginBottom: '8px', 
                        fontSize: '14px',
                        fontWeight: 'bold', 
                        letterSpacing: '0.5px',
                        }}>
                          MENSAJE *
                        </label>
                        <textarea
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          style={{
                            width: '100%',
                            padding: '15px',
                            fontSize: '16px',
                            borderRadius: '6px',
                            border: errors.message ? '2px solid #ef4444' : '1px solid #333',
                            backgroundColor: '#0a0a0a',
                            color: 'white',
                            outline: 'none',
                            resize: 'vertical'
                          }}
                          onFocus={(e) => e.target.style.border = '1px solid #667eea'}
                          onBlur={(e) => e.target.style.border = errors.message ? '2px solid #ef4444' : '1px solid #333'}
                        />
                        {errors.message && (<p style={{ 
                          color: '#ef4444', 
                          marginTop: '5px', 
                          fontSize: '14px' 
                          }}>{errors.message}</p>)}
                    </div>

                    {/* Botón de envío */}
                    <button type="submit" style={{
                      width: '100%',
                      padding: '18px',
                      fontSize: '16px',
                      borderRadius: '8px',
                      border: 'none',
                      letterSpacing: '1px',
                      backgroundColor: isBlocked ? '#666' : 'white',
                      textTransform: 'uppercase',
                      color: isBlocked ? '#999' : '#0a0a0a',
                      cursor: isBlocked ? 'not-allowed' : 'pointer',
                      transition: 'all 0.3s'
                    }} 
                    onMouseEnter={(e) => {
                      if (!isBlocked) {
                        e.target.style.backgroundColor = '#e0e0e0';
                      }
                    }}
                    onMouseLeave={(e) => {
                      if (!isBlocked) {
                        e.target.style.backgroundColor = 'white';
                      }
                    }}
                    >
                      {isBlocked ? 'Envío bloqueado' : 'Enviar Mensaje'}
                    </button>

                    {/* Información de seguridad */}
                    <p style={{
                      textAlign: 'center',
                      fontSize: '13px',
                      color: '#666',
                      marginTop: '20px',
                      lineHeight: '1.6'
                    }}>
                      🔒 Formulario protegido con validación anti-XSS y rate limiting
                    </p>
            </form>
        </div>
    </section>
  );
}

export default ContactForm;



