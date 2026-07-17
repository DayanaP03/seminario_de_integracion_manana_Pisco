interface FruitList_mp {
  nombre: string
  icono: string
  precio: number 
}

interface PropsListaAmenidades {
  frutas: FruitList_mp[]
  titulo?: string
}


export default function ListaDeAmenidades({ frutas, titulo = 'Frutas' }: PropsListaAmenidades) {
  if (frutas.length === 0) {
    return <p style={{ color: '#999', textAlign: 'center' }}>No hay frutas disponibles.</p>
  }

  return (
    <div style={{ maxWidth: 350, fontFamily: 'sans-serif' }}>
      <h3 style={{ marginBottom: 12, color: '#333' }}>{titulo}</h3>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {frutas.map((item) => (
          <li
            key={item.nombre}
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              padding: '10px 0',
              borderBottom: '1px solid #eee',
            }}
          >
            <span style={{ fontSize: '15px' }}>{item.icono} {item.nombre}</span>
            <span style={{ color: '#666', fontSize: '13px', fontWeight: 'bold' }}>
              ${item.precio.toFixed(2)}
            </span>
          </li>
        ))}
      </ul>
    </div>
  )
}