import { useEffect, useState } from "react";

function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [submitCount, setSubmitCount] = useState(0);
  const [isBlocked, setIsBlocked] = useState(false);
  const [blockTimer, setBlockTimer] = useState(0);
  const [successMessage, setSuccessMessage] = useState("");

  useEffect(() => {
    if (submitCount >= 3) {
      setIsBlocked(true);
      setBlockTimer(300);
    }
  }, [submitCount]);

  useEffect(() => {
    if (isBlocked && blockTimer > 0) {
      const timer = setTimeout(() => {
        setBlockTimer((prev) => prev - 1);
      }, 1000);

      return () => clearTimeout(timer);
    }

    if (isBlocked && blockTimer === 0) {
      setIsBlocked(false);
      setSubmitCount(0);
    }
  }, [isBlocked, blockTimer]);

  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const validatePhone = (phone) => {
    const cleanedPhone = phone.replace(/\s/g, "");
    const regex = /^(?:\+?56)?(?:0?9)?[9876543]\d{7}$/;
    return regex.test(cleanedPhone);
  };

  const sanitizeInput = (input) => {
    return input
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#x27;")
      .replace(/\//g, "&#x2F;");
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "El nombre es obligatorio.";
    } else if (formData.name.trim().length < 2) {
      newErrors.name = "El nombre debe tener al menos 2 caracteres.";
    }

    if (!formData.email.trim()) {
      newErrors.email = "El email es obligatorio.";
    } else if (!validateEmail(formData.email)) {
      newErrors.email = "Ingresa un correo válido.";
    }

    if (formData.phone.trim() && !validatePhone(formData.phone)) {
      newErrors.phone = "Ingresa un número chileno válido.";
    }

    if (!formData.message.trim()) {
      newErrors.message = "El mensaje es obligatorio.";
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "El mensaje debe tener al menos 10 caracteres.";
    }

    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSuccessMessage("");

    if (isBlocked) {
      return;
    }

    const validationErrors = validateForm();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setSubmitCount((prev) => prev + 1);
      return;
    }

    const sanitizedData = {
      name: sanitizeInput(formData.name.trim()),
      email: sanitizeInput(formData.email.trim()),
      phone: sanitizeInput(formData.phone.trim()),
      message: sanitizeInput(formData.message.trim()),
    };

    console.log("Datos enviados:", sanitizedData);

    setSuccessMessage("Mensaje enviado con éxito. Te contactaré pronto.");
    setFormData({
      name: "",
      email: "",
      phone: "",
      message: "",
    });
    setErrors({});

    setTimeout(() => {
      setSuccessMessage("");
    }, 5000);
  };

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}m ${remainingSeconds}s`;
  };

  const sectionStyle = {
    backgroundColor: "#0a0a0a",
    color: "#f5f5f5",
    padding: "100px 20px",
  };

  const containerStyle = {
    maxWidth: "1200px",
    margin: "0 auto",
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
    gap: "40px",
    alignItems: "start",
  };

  const infoStyle = {
    display: "flex",
    flexDirection: "column",
    gap: "20px",
  };

  const formWrapperStyle = {
    backgroundColor: "#111111",
    border: "1px solid #222",
    borderRadius: "14px",
    padding: "50px",
    boxShadow: "0 20px 50px rgba(0, 0, 0, 0.35)",
    justifySelf: "center",
  };

  const labelStyle = {
    display: "block",
    marginBottom: "8px",
    fontSize: "0.85rem",
    letterSpacing: "2px",
    textTransform: "uppercase",
    color: "#bdbdbd",
    justifySelf: "center",
  };

  const getInputStyle = (fieldName) => ({
    width: "100%",
    padding: "16px 18px",
    backgroundColor: "#181818",
    color: "#ffffff",
    border: errors[fieldName] ? "1px solid #dc2626" : "1px solid #2f2f2f",
    borderRadius: "14px",
    outline: "none",
    fontSize: "1rem",
    transition: "all 0.2s ease",
    marginBottom: "8px",
  });

  const errorStyle = {
    color: "#f87171",
    fontSize: "0.9rem",
    marginBottom: "18px",
  };

  const statusBoxStyle = {
    marginBottom: "20px",
    padding: "14px 16px",
    borderRadius: "14px",
    fontSize: "0.95rem",
    lineHeight: "1.5",
  };

  const buttonStyle = {
    width: "100%",
    padding: "16px 20px",
    marginTop: "10px",
    border: "none",
    borderRadius: "14px",
    backgroundColor: isBlocked ? "#2a2a2a" : "#f5f5f5",
    color: isBlocked ? "#888" : "#0a0a0a",
    fontWeight: "700",
    fontSize: "1rem",
    cursor: isBlocked ? "not-allowed" : "pointer",
    transition: "all 0.2s ease",
    letterSpacing: "0.5px",
  };

  const securityNoteStyle = {
    marginTop: "18px",
    fontSize: "0.9rem",
    color: "#9ca3af",
    textAlign: "center",
  };

  return (
    <section id="contact" style={sectionStyle}>
      <div style={containerStyle}>
        <div style={infoStyle}>
          <p
            style={{
              color: "#9ca3af",
              textTransform: "uppercase",
              letterSpacing: "3px",
              fontSize: "0.8rem",
              margin: 0,
            }}
          >
            Contacto
          </p>

          <h2
            style={{
              fontSize: "clamp(2rem, 4vw, 3.5rem)",
              lineHeight: "1.1",
              margin: 0,
            }}
          >
            Conversemos sobre tu próxima idea
          </h2>

          <p
            style={{
              color: "#cfcfcf",
              fontSize: "1.05rem",
              lineHeight: "1.8",
              margin: 0,
              maxWidth: "520px",
            }}
          >
            Si tienes una idea para tu próximo tatuaje, quieres cotizar una
            sesión o resolver dudas sobre estilos y disponibilidad, envíame un
            mensaje.
          </p>

          <div
            style={{
              display: "grid",
              gap: "14px",
              marginTop: "10px",
              color: "#d4d4d4",
            }}
          >
            <span>📍 Punta Arenas, Chile</span>
            <span>📞 +56 9 4244 3344</span>
            <span>📸 Instagram: @yin.ttt</span>
          </div>
        </div>

        <div style={formWrapperStyle}>
          {successMessage && (
            <div
              style={{
                ...statusBoxStyle,
                backgroundColor: "rgba(34, 197, 94, 0.12)",
                border: "1px solid rgba(34, 197, 94, 0.35)",
                color: "#86efac",
              }}
            >
              {successMessage}
            </div>
          )}

          {isBlocked && (
            <div
              style={{
                ...statusBoxStyle,
                backgroundColor: "rgba(239, 68, 68, 0.10)",
                border: "1px solid rgba(239, 68, 68, 0.30)",
                color: "#fca5a5",
              }}
            >
              Has alcanzado el límite de intentos. Espera{" "}
              {formatTime(blockTimer)} antes de intentar nuevamente.
            </div>
          )}

          <form onSubmit={handleSubmit}>
            <div style={{ marginBottom: "8px" }}>
              <label htmlFor="name" style={labelStyle}>
                Nombre
              </label>
              <input
                id="name"
                type="text"
                name="name"
                placeholder="Tu nombre"
                value={formData.name}
                onChange={handleChange}
                style={getInputStyle("name")}
              />
              {errors.name && <p style={errorStyle}>{errors.name}</p>}
            </div>

            <div style={{ marginBottom: "18px" }}>
              <label htmlFor="email" style={labelStyle}>
                Email
              </label>
              <input
                id="email"
                type="email"
                name="email"
                placeholder="tuemail@ejemplo.com"
                value={formData.email}
                onChange={handleChange}
                style={getInputStyle("email")}
              />
              {errors.email && <p style={errorStyle}>{errors.email}</p>}
            </div>

            <div style={{ marginBottom: "18px" }}>
              <label htmlFor="phone" style={labelStyle}>
                Teléfono
              </label>
              <input
                id="phone"
                type="tel"
                name="phone"
                placeholder="+56 9 1234 5678"
                value={formData.phone}
                onChange={handleChange}
                style={getInputStyle("phone")}
              />
              {errors.phone && <p style={errorStyle}>{errors.phone}</p>}
            </div>

            <div style={{ marginBottom: "18px" }}>
              <label htmlFor="message" style={labelStyle}>
                Mensaje
              </label>
              <textarea
                id="message"
                name="message"
                placeholder="Cuéntame tu idea, estilo, tamaño aproximado y zona del cuerpo."
                value={formData.message}
                onChange={handleChange}
                rows="6"
                style={{
                  ...getInputStyle("message"),
                  resize: "vertical",
                  minHeight: "140px",
                }}
              />
              {errors.message && <p style={errorStyle}>{errors.message}</p>}
            </div>

            <button
              type="submit"
              disabled={isBlocked}
              style={buttonStyle}
              onMouseEnter={(e) => {
                if (!isBlocked) {
                  e.target.style.transform = "translateY(-2px)";
                  e.target.style.backgroundColor = "#ffffff";
                }
              }}
              onMouseLeave={(e) => {
                if (!isBlocked) {
                  e.target.style.transform = "translateY(0)";
                  e.target.style.backgroundColor = "#f5f5f5";
                }
              }}
            >
              {isBlocked ? "Envío bloqueado" : "Enviar mensaje"}
            </button>

            <p style={securityNoteStyle}>
              🔒 Formulario con validación, sanitización básica y limitación de
              intentos.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}

export default ContactForm;
