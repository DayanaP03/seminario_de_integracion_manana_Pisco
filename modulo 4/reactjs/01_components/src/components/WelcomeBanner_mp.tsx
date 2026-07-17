// src/components/WelcomeBanner.tsx

export default function WelcomeBanner_mp() {
  return (
    <div style={{ 
      background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)', 
      color: '#ffffff', 
      padding: '40px', 
      borderRadius: '24px',
      textAlign: 'center',
      boxShadow: '0 10px 20px rgba(0,0,0,0.15)'
    }}>
      <h1 style={{ margin: '0 0 10px', fontSize: '28px', fontWeight: 'bold', letterSpacing: '-0.5px' }}>
        Su estancia soñada comienza aquí
      </h1>
      <p style={{ margin: 0, fontSize: '16px', opacity: 0.85, fontWeight: '300' }}>
        Disfrute de la máxima comodidad y un servicio excepcional. Estamos aquí para asistirle en todo momento.
      </p>
      <button style={{
        marginTop: '24px',
        padding: '10px 24px',
        backgroundColor: '#fbbf24',
        border: 'none',
        borderRadius: '8px',
        color: '#0f172a',
        fontWeight: 'bold',
        cursor: 'pointer'
      }}>
        Ver Habitaciones
      </button>
    </div>
  )
}