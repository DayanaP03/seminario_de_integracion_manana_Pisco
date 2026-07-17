interface Servicio {
  id: number
  nombre: string
  precio: number
  sinCupo?: boolean
}

interface PropsCatalogoServicios {
  servicios: Servicio[]
  titulo: string
}

export default function ProductoCatalogList_mp({ servicios, titulo }: PropsCatalogoServicios) {
  return (
    <div style={{ maxWidth: 400, fontFamily: 'sans-serif' }}>
      <h3 style={{ margin: '0 0 16px', fontSize: 18, fontWeight: 'bold' }}>{titulo}</h3>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
        {servicios.map((servicio) => (
          <div
            key={servicio.id}
            style={{
              border: '1px solid #e5e7eb',
              borderRadius: 12,
              padding: 14,
              opacity: servicio.sinCupo ? 0.6 : 1,
              backgroundColor: servicio.sinCupo ? '#f9fafb' : '#ffffff',
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div>
                <p style={{ margin: '0 0 4px', fontWeight: 'bold', fontSize: 14 }}>{servicio.nombre}</p>
                <p style={{ margin: 0, fontSize: 13, color: '#6b7280' }}>${servicio.precio.toFixed(2)}</p>
              </div>
              {servicio.sinCupo && (
                <span style={{ 
                  fontSize: 11, 
                  color: '#ef4444', 
                  fontWeight: 'bold',
                  textTransform: 'uppercase',
                  padding: '4px 8px',
                  backgroundColor: '#fee2e2',
                  borderRadius: '6px'
                }}>
                  Sin cupo
                </span>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}