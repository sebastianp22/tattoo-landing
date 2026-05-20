import { useEffect, useMemo, useState } from 'react';

const INITIAL_FORM = {
  name: '',
  email: '',
  phone: '',
  message: '',
};

function ContactForm() {
  const [formData, setFormData] = useState(INITIAL_FORM);
  const [errors, setErrors] = useState({});
  const [submitCount, setSubmitCount] = useState(0);
  const [blockTimer, setBlockTimer] = useState(0);
  const [successMessage, setSuccessMessage] = useState('');

  const isBlocked = useMemo(() => blockTimer > 0, [blockTimer]);

  useEffect(() => {
    if (blockTimer <= 0) {
      return;
    }

    const timer = setTimeout(() => {
      setBlockTimer((prev) => {
        if (prev <= 1) {
          setSubmitCount(0);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearTimeout(timer);
  }, [blockTimer]);

  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const validatePhone = (phone) => {
    const cleaned = phone.replace(/\s/g, '');
    const regex = /^(?:\+?56)?(?:09|9)?[2-9]\d{7}$/;
    return regex.test(cleaned);
  };

  const sanitizeInput = (input) => {
    return input
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#39;');
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'El nombre es obligatorio.';
    } else if (formData.name.trim().length < 2) {
      newErrors.name = 'El nombre debe tener al menos 2 caracteres.';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'El email es obligatorio.';
    } else if (!validateEmail(formData.email)) {
      newErrors.email = 'Ingresa un email válido.';
    }

    if (formData.phone.trim() && !validatePhone(formData.phone)) {
      newErrors.phone = 'Ingresa un teléfono chileno válido.';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'El mensaje es obligatorio.';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'El mensaje debe tener al menos 10 caracteres.';
    }

    return newErrors;
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: '',
      }));
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setSuccessMessage('');

    if (isBlocked) {
      return;
    }

    const validationErrors = validateForm();

    if (Object.keys(validationErrors).length > 0) {
      const nextCount = submitCount + 1;
      setErrors(validationErrors);
      setSubmitCount(nextCount);

      if (nextCount >= 3) {
        setBlockTimer(300);
      }

      return;
    }

    const sanitizedData = {
      name: sanitizeInput(formData.name.trim()),
      email: sanitizeInput(formData.email.trim()),
      phone: sanitizeInput(formData.phone.trim()),
      message: sanitizeInput(formData.message.trim()),
    };

    console.log('Datos enviados:', sanitizedData);

    setFormData(INITIAL_FORM);
    setErrors({});
    setSubmitCount(0);
    setSuccessMessage('Mensaje enviado con éxito! Te contactaremos pronto.');

    setTimeout(() => {
      setSuccessMessage('');
    }, 5000);
  };

  const minutes = Math.floor(blockTimer / 60);
  const seconds = blockTimer % 60;

  return (
    <section
      id="contacto"
      style={{
        backgroundColor: '#0b0b0b',
        color: '#f5f5f5',
        padding: '80px 20px',
      }}
    >
      <div
        style={{
          maxWidth: '720px',
          margin: '0 auto',
        }}
      >
        <p
          style={{
            color: '#c9a96e',
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
            fontSize: '0.85rem',
            marginBottom: '12px',
          }}
        >
          Contacto
        </p>

        <h2
          style={{
            fontSize: 'clamp(2rem, 5vw, 3rem)',
            marginBottom: '12px',
          }}
        >
          Reserva tu prÃ³xima sesiÃ³n
        </h2>

        <p
          style={{
            color: '#b0b0b0',
            marginBottom: '32px',
            lineHeight: 1.7,
          }}
        >
          ¿Tienes una idea, quieres cotizar o necesitas orientación para tu
          próximo tatuaje? Envíame un mensaje y te responderé lo antes posible.
        </p>

        {successMessage && (
          <div
            style={{
              backgroundColor: '#162216',
              color: '#b7f7c2',
              border: '1px solid #2f6b3c',
              padding: '14px 16px',
              borderRadius: '12px',
              marginBottom: '20px',
            }}
          >
            {successMessage}
          </div>
        )}

        {isBlocked && (
          <div
            style={{
              backgroundColor: '#2a1717',
              color: '#ffb3b3',
              border: '1px solid #7a2f2f',
              padding: '14px 16px',
              borderRadius: '12px',
              marginBottom: '20px',
            }}
          >
            Has alcanzado el límite de intentos. Espera {minutes}m {seconds}s
            antes de intentar nuevamente.
          </div>
        )}

        <form
          onSubmit={handleSubmit}
          style={{
            display: 'grid',
            gap: '18px',
          }}
        >
          <div>
            <label
              htmlFor="name"
              style={{ display: 'block', marginBottom: '8px', fontWeight: 600 }}
            >
              Nombre
            </label>
            <input
              id="name"
              name="name"
              type="text"
              value={formData.name}
              onChange={handleChange}
              disabled={isBlocked}
              placeholder="Tu nombre"
              style={{
                width: '100%',
                padding: '14px 16px',
                backgroundColor: '#141414',
                border: errors.name ? '1px solid #ff5c5c' : '1px solid #333',
                color: '#fff',
                borderRadius: '12px',
                outline: 'none',
              }}
            />
            {errors.name && (
              <p
                style={{
                  color: '#ff8a8a',
                  marginTop: '8px',
                  fontSize: '0.95rem',
                }}
              >
                {errors.name}
              </p>
            )}
          </div>

          <div>
            <label
              htmlFor="email"
              style={{ display: 'block', marginBottom: '8px', fontWeight: 600 }}
            >
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              disabled={isBlocked}
              placeholder="tuemail@ejemplo.com"
              style={{
                width: '100%',
                padding: '14px 16px',
                backgroundColor: '#141414',
                border: errors.email ? '1px solid #ff5c5c' : '1px solid #333',
                color: '#fff',
                borderRadius: '12px',
                outline: 'none',
              }}
            />
            {errors.email && (
              <p
                style={{
                  color: '#ff8a8a',
                  marginTop: '8px',
                  fontSize: '0.95rem',
                }}
              >
                {errors.email}
              </p>
            )}
          </div>

          <div>
            <label
              htmlFor="phone"
              style={{ display: 'block', marginBottom: '8px', fontWeight: 600 }}
            >
              Teléfono
            </label>
            <input
              id="phone"
              name="phone"
              type="tel"
              value={formData.phone}
              onChange={handleChange}
              disabled={isBlocked}
              placeholder="+56 9 1234 5678"
              style={{
                width: '100%',
                padding: '14px 16px',
                backgroundColor: '#141414',
                border: errors.phone ? '1px solid #ff5c5c' : '1px solid #333',
                color: '#fff',
                borderRadius: '12px',
                outline: 'none',
              }}
            />
            {errors.phone && (
              <p
                style={{
                  color: '#ff8a8a',
                  marginTop: '8px',
                  fontSize: '0.95rem',
                }}
              >
                {errors.phone}
              </p>
            )}
          </div>

          <div>
            <label
              htmlFor="message"
              style={{ display: 'block', marginBottom: '8px', fontWeight: 600 }}
            >
              Mensaje
            </label>
            <textarea
              id="message"
              name="message"
              rows="6"
              value={formData.message}
              onChange={handleChange}
              disabled={isBlocked}
              placeholder="Cuéntame tu idea, tamaño aproximado, zona del cuerpo o estilo que buscas."
              style={{
                width: '100%',
                padding: '14px 16px',
                backgroundColor: '#141414',
                border: errors.message ? '1px solid #ff5c5c' : '1px solid #333',
                color: '#fff',
                borderRadius: '12px',
                outline: 'none',
                resize: 'vertical',
              }}
            />
            {errors.message && (
              <p
                style={{
                  color: '#ff8a8a',
                  marginTop: '8px',
                  fontSize: '0.95rem',
                }}
              >
                {errors.message}
              </p>
            )}
          </div>

          <button
            type="submit"
            disabled={isBlocked}
            style={{
              padding: '15px 20px',
              borderRadius: '999px',
              border: '1px solid #c9a96e',
              backgroundColor: isBlocked ? '#2b2b2b' : '#c9a96e',
              color: isBlocked ? '#888' : '#111',
              fontWeight: 700,
              cursor: isBlocked ? 'not-allowed' : 'pointer',
              transition: 'all 0.2s ease',
            }}
          >
            {isBlocked ? 'Envío bloqueado' : 'Enviar mensaje'}
          </button>
        </form>
      </div>
    </section>
  );
}

export default ContactForm;
