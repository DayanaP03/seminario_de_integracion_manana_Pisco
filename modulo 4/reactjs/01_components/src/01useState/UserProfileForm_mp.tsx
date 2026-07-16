import { useState } from 'react'


interface UserProfilemp {
  fullName: string
  email: string
  nights: number
}

export default function GuestRegistration() {
  const [reservation, setReservation] = useState<UserProfilemp>({
    fullName: '',
    email: '',
    nights: 1,
  })

  function handleChange(field: keyof UserProfilemp, value: string | number) {
    setReservation((prev) => ({
      ...prev,
      [field]: value,
    }))
  }

  return (
    <div style={{ maxWidth: 350, fontFamily: 'sans-serif' }}>
      <h3 style={{ marginBottom: 15 }}>Registro de Reserva</h3>
      
      <form style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
        <input
          placeholder="Nombre completo"
          value={reservation.fullName}
          onChange={(e) => handleChange('fullName', e.target.value)}
          style={inputStyle}
        />
        <input
          placeholder="Correo electrónico"
          type="email"
          value={reservation.email}
          onChange={(e) => handleChange('email', e.target.value)}
          style={inputStyle}
        />
        <input
          placeholder="Número de noches"
          type="number"
          min="1"
          value={reservation.nights}
          onChange={(e) => handleChange('nights', Number(e.target.value))}
          style={inputStyle}
        />

        <div style={{ marginTop: 10, padding: 15, background: '#e1f5fe', borderRadius: 8 }}>
          <p style={{ margin: 0, fontSize: 14, color: '#0277bd' }}>
            <strong>Reserva a nombre de:</strong> {reservation.fullName || '—'}<br />
            <strong>Contacto:</strong> {reservation.email || '—'}<br />
            <strong>Estancia:</strong> {reservation.nights} noche(s)
          </p>
        </div>
      </form>
    </div>
  )
}

const inputStyle = {
  padding: '10px',
  border: '1px solid #ccc',
  borderRadius: 6,
  fontSize: 14,
}