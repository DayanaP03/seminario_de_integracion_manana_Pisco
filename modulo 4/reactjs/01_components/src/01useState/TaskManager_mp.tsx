import { useState } from 'react'

interface Service {
  id: number
  text: string
  added: boolean
}

export default function TaskManagermp() {
  const [services, setServices] = useState<Service[]>([])
  const [input, setInput] = useState('')


  function addService() {
    if (!input.trim()) return
    setServices((prev) => [
      ...prev,
      { id: Date.now(), text: input.trim(), added: false },
    ])
    setInput('')
  }


  function removeService(id: number) {
    setServices((prev) => prev.filter((s) => s.id !== id))
  }

  function toggleService(id: number) {
    setServices((prev) =>
      prev.map((s) =>
        s.id === id ? { ...s, added: !s.added } : s
      )
    )
  }

  return (
    <div style={{ maxWidth: 380, fontFamily: 'sans-serif' }}>
      <h3>Servicios Adicionales</h3>
      
      <div style={{ display: 'flex', gap: 8, marginBottom: 16 }}>
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && addService()}
          placeholder="Ej: Desayuno, Wi-Fi Premium..."
          style={{ flex: 1, padding: '8px 12px', borderRadius: 6, border: '1px solid #ddd' }}
        />
        <button
          onClick={addService}
          style={{ padding: '8px 16px', background: '#2ed573', color: '#fff', border: 'none', borderRadius: 6, cursor: 'pointer' }}
        >
          Añadir
        </button>
      </div>

      {services.length === 0 && (
        <p style={{ color: '#999', fontSize: 14 }}>No has añadido servicios extra.</p>
      )}

      <ul style={{ listStyle: 'none', padding: 0 }}>
        {services.map((service) => (
          <li
            key={service.id}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 10,
              padding: '10px 0',
              borderBottom: '1px solid #eee',
            }}
          >
            <input
              type="checkbox"
              checked={service.added}
              onChange={() => toggleService(service.id)}
            />
            <span
              style={{
                flex: 1,
                color: service.added ? '#0070f3' : '#333',
                fontWeight: service.added ? 'bold' : 'normal'
              }}
            >
              {service.text}
            </span>
            <button
              onClick={() => removeService(service.id)}
              style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#ff4757', fontSize: 16 }}
            >
              ✕
            </button>
          </li>
        ))}
      </ul>

      {services.length > 0 && (
        <p style={{ fontSize: 13, color: '#666', marginTop: 8 }}>
          {services.filter((s) => s.added).length} servicio(s) seleccionado(s)
        </p>
      )}
    </div>
  )
}