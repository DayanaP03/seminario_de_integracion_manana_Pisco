interface PropsTarjetaHabitacion {
  titulo: string
  descripcion?: string
  destacada?: boolean
}

export default function ProductCard_mp({
  titulo,
  descripcion = 'Sin descripción disponible',
  destacada = false,
}: PropsTarjetaHabitacion) {
  return (
    <div
      style={{
        border: destacada ? '2px solid #a71215' : '1px solid #d1d5db',
        borderRadius: '12px',
        padding: '16px',
        marginBottom: '12px',
        backgroundColor: destacada ? '#fffef2' : '#ffffff',
        fontFamily: 'sans-serif',
        maxWidth: '320px'
      }}
    >
      <h3 style={{ margin: '0 0 8px', color: '#111827' }}>{titulo}</h3>
      <p style={{ margin: 0, fontSize: '14px', color: '#6b7280' }}>{descripcion}</p>
      
      {destacada && (
        <span style={{ 
          display: 'inline-block', 
          marginTop: '12px', 
          fontSize: '11px', 
          fontWeight: 'bold', 
          color: '#813c08',
          textTransform: 'uppercase'
        }}>
          ★ Recomendada
        </span>
      )}
    </div>
  )
}