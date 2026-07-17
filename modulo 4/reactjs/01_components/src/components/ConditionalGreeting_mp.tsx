interface PropsSaludo {
  estaConectado: boolean
  nombreUsuario: string
  momentoDelDia: 'mañana' | 'tarde' | 'noche'
}

export default function ConditionalGreenting_mp({
  estaConectado,
  nombreUsuario,
  momentoDelDia,
}: PropsSaludo) {
  
  const saludos: Record<string, string> = {
    mañana: '¡Buenos días',
    tarde: '¡Buenas tardes',
    noche: '¡Buenas noches',
  }

  if (!estaConectado) {
    return (
      <div style={{ padding: 16, textAlign: 'center', color: '#6b7280', fontFamily: 'sans-serif' }}>
        <p>Por favor, inicie sesión en el sistema para comenzar a gestionar las reservas.</p>
      </div>
    )
  }

  return (
    <div style={{ 
      padding: 20, 
      border: '1px solid #e5e7eb', 
      borderRadius: 12, 
      textAlign: 'center',
      backgroundColor: '#f8fafc',
      fontFamily: 'sans-serif'
    }}>
      <p style={{ margin: 0, fontSize: 18, fontWeight: 'bold', color: '#1e293b' }}>
        {saludos[momentoDelDia]}, {nombreUsuario}! 🏨
      </p>
      <p style={{ margin: '8px 0 0', fontSize: 14, color: '#64748b' }}>
        Bienvenido al panel de administración de su hotel.
      </p>
    </div>
  )
}