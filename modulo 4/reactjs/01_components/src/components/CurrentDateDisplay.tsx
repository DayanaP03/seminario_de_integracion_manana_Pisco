export default function CurrentDateDisplay() {
  const today = new Date()
  const formatted = today.toLocaleDateString('es-ES', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })

  return (
    <div style={{ padding: 16, border: '1px solid #e5e7eb', borderRadius: 8, textAlign: 'center' }}>
      <p style={{ margin: 0, fontSize: 16, fontWeight: 500 }}>{formatted}</p>
    </div>
  )
}
