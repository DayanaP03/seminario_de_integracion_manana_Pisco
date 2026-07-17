export default function CurrentDataDisplay_mp() {
  const hoy = new Date()
  

  const fechaFormateada = hoy.toLocaleDateString('es-ES', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })


  const fechaFinal = fechaFormateada.charAt(0).toUpperCase() + fechaFormateada.slice(1)

  return (
    <div style={{ 
      padding: '16px 24px', 
      border: '1px solid #e5e7eb', 
      borderRadius: '12px', 
      textAlign: 'center',
      backgroundColor: '#ffffff',
      fontFamily: 'sans-serif',
      boxShadow: '0 2px 8px rgba(0,0,0,0.05)'
    }}>
      <p style={{ margin: 0, fontSize: '15px', color: '#4b5563' }}>
        Fecha de gestión: <strong>{fechaFinal}</strong>
      </p>
    </div>
  )
}