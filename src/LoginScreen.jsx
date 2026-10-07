jsx
import './Login.css'

function LoginScreen({ onBack }) {
  return (
    <main className="login-screen">

      <header className="login-header">

        <div className="small-logo">
          ICE TATTO
        </div>

        <button
          onClick={onBack}
          style={{
            position: 'absolute',
            left: '30px',
            top: '30px',
            background: 'transparent',
            border: '1px solid #4a4a4a',
            color: '#aaa',
            padding: '10px 18px',
            borderRadius: '10px',
            cursor: 'pointer'
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

          <button className="main-option">
            <span className="option-number">01</span>

            <span className="option-text">
              CONTINUAR CON GOOGLE
            </span>

            <span className="option-arrow">
              →
            </span>
          </button>

          <button className="main-option">
            <span className="option-number">02</span>

            <span className="option-text">
              CONTINUAR CON APPLE
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

export default LoginScreen
