import './Login.css'
import { useState } from 'react'

function AnimatedInput({
  type = 'text',
  placeholder,
  value,
  onChange
}) {
  return (
    <div
      style={{
        position: 'relative',
        width: '100%'
      }}
    >
      <input
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        style={{
          width: '100%',
          boxSizing: 'border-box',
          padding: '17px 18px',
          background: '#0b0b0b',
          border: '1px solid #3a3a3a',
          borderRadius: '10px',
          color: 'transparent',
          caretColor: '#fff',
          outline: 'none',
          fontSize: '14px',
          letterSpacing: '1px',
          position: 'relative',
          zIndex: 2
        }}
      />

      {value && (
        <div
          aria-hidden="true"
          style={{
            position: 'absolute',
            left: '18px',
            top: '50%',
            transform: 'translateY(-50%)',
            pointerEvents: 'none',
            display: 'flex',
            color: '#fff',
            fontSize: '14px',
            letterSpacing: '1px',
            whiteSpace: 'pre',
            zIndex: 3
          }}
        >
          {value.split('').map((letter, index) => (
            <span
              key={`${index}-${letter}`}
              style={{
                display: 'inline-block',
                animation: 'letterAppear .22s ease-out',
                animationFillMode: 'both'
              }}
            >
              {letter === ' ' ? '\u00A0' : letter}
            </span>
          ))}
        </div>
      )}
    </div>
  )
}

function PasswordInput({
  value,
  onChange
}) {
  const [showPassword, setShowPassword] = useState(false)

  return (
    <div
      style={{
        position: 'relative',
        width: '100%'
      }}
    >
      <input
        type={showPassword ? 'text' : 'password'}
        value={value}
        onChange={onChange}
        placeholder="CONTRASEÑA"
        style={{
          width: '100%',
          boxSizing: 'border-box',
          padding: '17px 55px 17px 18px',
          background: '#0b0b0b',
          border: '1px solid #3a3a3a',
          borderRadius: '10px',
          color: 'transparent',
          caretColor: '#fff',
          outline: 'none',
          fontSize: '14px',
          letterSpacing: '1px',
          position: 'relative',
          zIndex: 2
        }}
      />

      {value && (
        <div
          aria-hidden="true"
          style={{
            position: 'absolute',
            left: '18px',
            right: '55px',
            top: '50%',
            transform: 'translateY(-50%)',
            pointerEvents: 'none',
            display: 'flex',
            color: '#fff',
            fontSize: '14px',
            letterSpacing: '1px',
            whiteSpace: 'pre',
            zIndex: 3,
            overflow: 'hidden'
          }}
        >
          {showPassword
            ? value.split('').map((letter, index) => (
                <span
                  key={`${index}-${letter}`}
                  style={{
                    display: 'inline-block',
                    animation: 'letterAppear .22s ease-out',
                    animationFillMode: 'both'
                  }}
                >
                  {letter === ' ' ? '\u00A0' : letter}
                </span>
              ))
            : '•'.repeat(value.length)}
        </div>
      )}

      <button
        type="button"
        className="password-eye-button"
        onClick={() => setShowPassword(!showPassword)}
        aria-label={
          showPassword
            ? 'Ocultar contraseña'
            : 'Mostrar contraseña'
        }
      >
        {showPassword ? (
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.7"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M2 12s3.5-6 10-6 10 6 10 6-3.5 6-10 6S2 12 2 12Z" />
            <circle cx="12" cy="12" r="2.5" />
          </svg>
        ) : (
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.7"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M3 3l18 18" />
            <path d="M10.6 6.2A10.5 10.5 0 0 1 12 6c6.5 0 10 6 10 6a18 18 0 0 1-3.1 3.7" />
            <path d="M6.2 6.9C3.5 8.4 2 12 2 12s3.5 6 10 6c1.5 0 2.8-.3 4-.8" />
            <path d="M9.9 9.9a3 3 0 0 0 4.2 4.2" />
          </svg>
        )}
      </button>
    </div>
  )
}

function Login({ onAccess }) {
  const [screen, setScreen] = useState('main')

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')


  // =========================
  // INICIAR SESIÓN
  // =========================

  if (screen === 'login') {
    return (
      <main className="login-screen">

        <header className="login-header">

          <div className="small-logo">
            ICE TATTO
          </div>

          <button
            onClick={() => setScreen('main')}
            style={{
              background: 'none',
              border: 'none',
              color: '#aaa',
              cursor: 'pointer',
              fontSize: '14px',
              letterSpacing: '2px'
            }}
          >
            ← VOLVER
          </button>

        </header>


        <section className="login-content">

          <div className="main-logo">
            <span>ICE</span>
            <span>TATTO</span>
          </div>

          <p className="access-title">
            INICIAR SESIÓN
          </p>


          <div className="main-options">

            {/* GOOGLE */}

            <button
              className="main-option"
              onClick={onAccess}
            >

              <span className="option-number">
                01
              </span>

              <span
                className="option-text"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '14px'
                }}
              >
                CONTINUAR CON GOOGLE

                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    fill="#4285F4"
                    d="M21.35 12.27c0-.71-.06-1.39-.18-2.05H12v3.88h5.24a4.48 4.48 0 0 1-1.94 2.94v2.44h3.14c1.84-1.69 2.91-4.18 2.91-7.21Z"
                  />

                  <path
                    fill="#34A853"
                    d="M12 21.5c2.63 0 4.84-.87 6.45-2.36l-3.14-2.44c-.87.58-1.98.92-3.31.92-2.55 0-4.71-1.72-5.49-4.03H3.27v2.52A9.74 9.74 0 0 0 12 21.5Z"
                  />

                  <path
                    fill="#FBBC05"
                    d="M6.51 13.59A5.86 5.86 0 0 1 6.2 12c0-.55.11-1.08.31-1.59V7.89H3.27A9.74 9.74 0 0 0 2.25 12c0 1.57.38 3.05 1.02 4.11l3.24-2.52Z"
                  />

                  <path
                    fill="#EA4335"
                    d="M12 6.38c1.43 0 2.71.49 3.72 1.45l2.79-2.79C16.84 3.45 14.63 2.5 12 2.5a9.74 9.74 0 0 0-8.73 5.39l3.24 2.52C7.29 8.1 9.45 6.38 12 6.38Z"
                  />
                </svg>

              </span>

              <span className="option-arrow">
                →
              </span>

            </button>


            {/* APPLE */}

            <button
              className="main-option"
              onClick={onAccess}
            >

              <span className="option-number">
                02
              </span>

              <span
                className="option-text"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '14px'
                }}
              >
                CONTINUAR CON APPLE

                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.57.84 1.51-.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.96-2.54 4.08ZM12.03 7.25C11.88 5.02 13.69 3.2 15.8 3c.29 2.58-2.34 4.48-3.77 4.25Z" />
                </svg>

              </span>

              <span className="option-arrow">
                →
              </span>

            </button>

          </div>


          <p className="login-footer-text">
            ACCESO SEGURO · ICE TATTO
          </p>

        </section>

      </main>
    )
  }


  // =========================
  // REGISTRARSE
  // =========================

  if (screen === 'register') {
    return (
      <main className="login-screen">

        <header className="login-header">

          <div className="small-logo">
            ICE TATTO
          </div>

          <button
            onClick={() => setScreen('main')}
            style={{
              background: 'none',
              border: 'none',
              color: '#aaa',
              cursor: 'pointer',
              fontSize: '14px',
              letterSpacing: '2px'
            }}
          >
            ← VOLVER
          </button>

        </header>


        <section className="login-content">

          <div className="main-logo">
            <span>ICE</span>
            <span>TATTO</span>
          </div>

          <p className="access-title">
            REGISTRARSE
          </p>


          <div
            style={{
              width: '100%',
              maxWidth: '500px',
              display: 'flex',
              flexDirection: 'column',
              gap: '14px',
              marginTop: '25px'
            }}
          >

            {/* NOMBRE */}

            <AnimatedInput
              placeholder="NOMBRE"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />


            {/* CORREO */}

            <AnimatedInput
              type="email"
              placeholder="CORREO ELECTRÓNICO"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />


            {/* CONTRASEÑA */}

            <PasswordInput
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />


            {/* CREAR CUENTA */}

            <button
              className="main-option"
              style={{
                marginTop: '8px'
              }}
              onClick={onAccess}
            >

              <span className="option-number">
                01
              </span>

              <span className="option-text">
                CREAR CUENTA
              </span>

              <span className="option-arrow">
                →
              </span>

            </button>


            {/* GOOGLE */}

            <button className="main-option">

              <span className="option-number">
                02
              </span>

              <span
                className="option-text"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '14px'
                }}
              >
                REGISTRARSE CON GOOGLE

                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    fill="#4285F4"
                    d="M21.35 12.27c0-.71-.06-1.39-.18-2.05H12v3.88h5.24a4.48 4.48 0 0 1-1.94 2.94v2.44h3.14c1.84-1.69 2.91-4.18 2.91-7.21Z"
                  />

                  <path
                    fill="#34A853"
                    d="M12 21.5c2.63 0 4.84-.87 6.45-2.36l-3.14-2.44c-.87.58-1.98.92-3.31.92-2.55 0-4.71-1.72-5.49-4.03H3.27v2.52A9.74 9.74 0 0 0 12 21.5Z"
                  />

                  <path
                    fill="#FBBC05"
                    d="M6.51 13.59A5.86 5.86 0 0 1 6.2 12c0-.55.11-1.08.31-1.59V7.89H3.27A9.74 9.74 0 0 0 2.25 12c0 1.57.38 3.05 1.02 4.11l3.24-2.52Z"
                  />

                  <path
                    fill="#EA4335"
                    d="M12 6.38c1.43 0 2.71.49 3.72 1.45l2.79-2.79C16.84 3.45 14.63 2.5 12 2.5a9.74 9.74 0 0 0-8.73 5.39l3.24 2.52C7.29 8.1 9.45 6.38 12 6.38Z"
                  />
                </svg>

              </span>

              <span className="option-arrow">
                →
              </span>

            </button>


            {/* APPLE */}

            <button className="main-option">

              <span className="option-number">
                03
              </span>

              <span
                className="option-text"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '14px'
                }}
              >
                REGISTRARSE CON APPLE

                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.57.84 1.51-.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.96-2.54 4.08ZM12.03 7.25C11.88 5.02 13.69 3.2 15.8 3c.29 2.58-2.34 4.48-3.77 4.25Z" />
                </svg>

              </span>

              <span className="option-arrow">
                →
              </span>

            </button>

          </div>


          <p className="login-footer-text">
            CREA TU CUENTA · ICE TATTO
          </p>

        </section>

      </main>
    )
  }


  // =========================
  // PRINCIPAL
  // =========================

  return (
    <main className="login-screen">

      <header className="login-header">

        <div className="small-logo">
          ICE TATTO
        </div>

        <div className="social-links">

          {/* INSTAGRAM */}

          <a
            href="https://www.instagram.com/tatto.ice91/"
            target="_blank"
            rel="noreferrer"
            aria-label="Instagram"
          >
            <svg
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <rect
                x="3"
                y="3"
                width="18"
                height="18"
                rx="5"
              />

              <circle
                cx="12"
                cy="12"
                r="4"
              />

              <circle
                className="instagram-dot"
                cx="17.5"
                cy="6.5"
                r="1"
              />
            </svg>
          </a>


          {/* WHATSAPP */}

          <a
            href="#"
            className="whatsapp-link"
            aria-label="WhatsApp"
          >
            <svg
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path d="M20.5 3.5A11.8 11.8 0 0 0 12.1 0C5.6 0 .3 5.3.3 11.8c0 2.1.6 4.1 1.6 5.9L.2 24l6.5-1.7c1.7.9 3.5 1.3 5.4 1.3h.1c6.5 0 11.8-5.3 11.8-11.8 0-3.2-1.3-6.1-3.5-8.3ZM12.1 21.5c-1.7 0-3.4-.5-4.8-1.3l-.3-.2-3.9 1 1-3.8-.2-.3c-1-1.5-1.5-3.2-1.5-5C2.4 6.6 6.7 2.3 12.1 2.3c2.6 0 5 1 6.8 2.8a9.5 9.5 0 0 1 2.8 6.8c0 5.3-4.3 9.6-9.6 9.6Zm5.3-7.2c-.3-.2-1.8-.9-2.1-1-.3-.1-.5-.2-.7.2-.2.3-.8 1-.9 1.2-.2.2-.3.2-.6.1-.3-.2-1.2-.4-2.3-1.4-.9-.8-1.4-1.7-1.6-2-.2-.3 0-.5.1-.7.1-.1.3-.3.4-.5.1-.2.2-.3.3-.5.1-.2 0-.4 0-.5-.1-.1-.7-1.7-1-2.3-.3-.6-.5-.5-.7-.5h-.6c-.2 0-.5.1-.8.4-.3.3-1 1-1 2.5s1 2.9 1.1 3.1c.1.2 2 3.1 4.8 4.3.7.3 1.2.5 1.7.6.7.2 1.3.2 1.8.1.5-.1 1.8-.7 2-1.3.2-.6.2-1.2.1-1.3-.1-.1-.3-.2-.6-.4Z" />
            </svg>
          </a>

        </div>

      </header>


      <section className="login-content">

        <div className="main-logo">
          <span>ICE</span>
          <span>TATTO</span>
        </div>

        <p className="access-title">
          ACCESO
        </p>


        <div className="main-options">

          {/* INICIAR SESIÓN */}

          <button
            className="main-option"
            onClick={() => setScreen('login')}
          >

            <span className="option-number">
              01
            </span>

            <span className="option-text">
              INICIAR SESIÓN
            </span>

            <span className="option-arrow">
              →
            </span>

          </button>


          {/* REGISTRARSE */}

          <button
            className="main-option"
            onClick={() => setScreen('register')}
          >

            <span className="option-number">
              02
            </span>

            <span className="option-text">
              REGISTRARSE
            </span>

            <span className="option-arrow">
              →
            </span>

          </button>


          {/* INVITADO */}

          <button
            className="main-option"
            onClick={onAccess}
          >

            <span className="option-number">
              03
            </span>

            <span className="option-text">
              CONTINUAR COMO INVITADO
            </span>

            <span className="option-arrow">
              →
            </span>

          </button>

        </div>


        <p className="login-footer-text">
          ACCESO SEGURO · ICE TATTO
        </p>

      </section>

    </main>
  )
}

export default Login