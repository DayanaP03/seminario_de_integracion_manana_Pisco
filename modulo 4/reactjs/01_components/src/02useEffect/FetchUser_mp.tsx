import { useState, useEffect } from 'react'

interface Reseña {
  id: number
  nombre: string
  email: string
  comentario: string
}

export default function FechUsermp() {
  const [reseñas, setReseñas] = useState<Reseña[]>([])
  const [cargando, setCargando] = useState(false)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    let cancelado = false

    async function obtenerReseñas() {
      setCargando(true)
      setError(null)

      try {
        const respuesta = await fetch('https://jsonplaceholder.typicode.com/comments?_limit=4')
        if (!respuesta.ok) throw new Error(`Error HTTP ${respuesta.status}`)

        const datos = await respuesta.json()
        
        // Mapeamos los datos de la API a nuestras propiedades en español
        const datosFormateados: Reseña[] = datos.map((item: any) => ({
          id: item.id,
          nombre: item.name,
          email: item.email,
          comentario: item.body
        }))

        if (!cancelado) setReseñas(datosFormateados)
      } catch (err) {
        if (!cancelado) {
          setError(err instanceof Error ? err.message : 'Error desconocido al cargar reseñas')
        }
      } finally {
        if (!cancelado) setCargando(false)
      }
    }

    obtenerReseñas()
    return () => { cancelado = true }
  }, [])

  return (
    <div style={{ maxWidth: 400, fontFamily: 'sans-serif' }}>
      <h3 style={{ textAlign: 'center' }}>Reseñas de Nuestros Huéspedes</h3>

      {cargando && <p style={{ color: '#6b7280', textAlign: 'center' }}>Cargando opiniones...</p>}
      
      {error && <p style={{ color: '#ff4757', textAlign: 'center' }}>Error: {error}</p>}

      {!cargando && !error && reseñas.map((reseña) => (
        <div
          key={reseña.id}
          style={{ 
            padding: '16px', 
            border: '1px solid #e0e0e0', 
            borderRadius: '12px', 
            marginBottom: '12px',
            backgroundColor: '#fafafa'
          }}
        >
          <p style={{ margin: '0 0 8px', fontWeight: 'bold', color: '#333' }}>{reseña.nombre}</p>
          <p style={{ margin: '0 0 8px', fontSize: '13px', fontStyle: 'italic', color: '#666' }}>
            "{reseña.comentario}"
          </p>
          <p style={{ margin: 0, fontSize: '12px', color: '#0070f3' }}>{reseña.email}</p>
        </div>
      ))}
    </div>
  )
}