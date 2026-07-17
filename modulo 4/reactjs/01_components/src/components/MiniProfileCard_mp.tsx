import StatusBadge from './StatusBadge'

interface MiniProfileCard_mp {
  nombreCompleto: string
  puesto: string
  departamento: string
  estado: 'active' | 'pending' | 'error' | 'inactive'
  añoDeIngreso: number
}

export default function MiniProfileCard_mp({
  nombreCompleto,
  puesto,
  departamento,
  estado,
  añoDeIngreso,
}: MiniProfileCard_mp) {
  const añosEnHotel = new Date().getFullYear() - añoDeIngreso

  return (
    <div style={{ 
      border: '1px solid #e5e7eb', 
      borderRadius: 12, 
      padding: 16, 
      maxWidth: 320,
      backgroundColor: '#ffffff',
      fontFamily: 'sans-serif'
    }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start', marginBottom: 12 }}>
        <div>
          <h3 style={{ margin: '0 0 4px', fontSize: 16, fontWeight: 'bold' }}>{nombreCompleto}</h3>
          <p style={{ margin: '0 0 4px', fontSize: 14, color: '#4b5563' }}>{puesto}</p>
          <p style={{ margin: 0, fontSize: 13, color: '#9ca3af' }}>{departamento}</p>
        </div>
        <StatusBadge status={estado} />
      </div>
      <p style={{ margin: 0, fontSize: 13, color: '#6b7280' }}>
        Antigüedad: {añosEnHotel} año{añosEnHotel !== 1 ? 's' : ''} en el hotel
      </p>
    </div>
  )
}