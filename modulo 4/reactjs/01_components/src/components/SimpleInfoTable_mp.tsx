interface FilaTabla {
  etiqueta: string
  valor: string
  resaltar?: boolean
}

interface PropsTablaInfo {
  titulo: string
  filas: FilaTabla[]
}

export default function SimpleInfoTable({ titulo, filas }: PropsTablaInfo) {
  return (
    <div style={{ 
      border: '1px solid #e5e7eb', 
      borderRadius: 12, 
      padding: 16, 
      maxWidth: 360,
      backgroundColor: '#ffffff',
      fontFamily: 'sans-serif' 
    }}>
      <h3 style={{ margin: '0 0 16px', fontSize: 16, fontWeight: 'bold' }}>{titulo}</h3>
      <div>
        {filas.map((fila, idx) => (
          <div
            key={idx}
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              padding: '10px 0',
              borderBottom: idx < filas.length - 1 ? '1px solid #f3f4f6' : 'none',
              fontWeight: fila.resaltar ? 'bold' : 'normal',
              fontSize: fila.resaltar ? '15px' : '14px',
              color: fila.resaltar ? '#111827' : '#6b7280',
            }}
          >
            <span>{fila.etiqueta}</span>
            <span>{fila.valor}</span>
          </div>
        ))}
      </div>
    </div>
  )
}