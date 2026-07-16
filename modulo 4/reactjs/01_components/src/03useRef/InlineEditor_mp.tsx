import { useRef, useState } from 'react'

export default function InlineEditor_mp() {
  const notaRef = useRef<HTMLInputElement>(null)
  const [notaGuardada, setNotaGuardada] = useState('Sin notas especiales')

  function manejarGuardar() {
  
    const valor = notaRef.current?.value ?? ''
    setNotaGuardada(valor.trim() === '' ? '(vacío)' : valor)
  }

  function manejarLimpiar() {
    if (notaRef.current) {
      notaRef.current.value = ''  
      notaRef.current.focus()    
    }
  }

  return (
    <div style={{ maxWidth: 340, display: 'flex', flexDirection: 'column', gap: 10, fontFamily: 'sans-serif' }}>
      <p style={{ margin: 0, color: '#6b7280', fontSize: 13 }}>
        Nota actual: <strong style={{ color: '#111827' }}>{notaGuardada}</strong>
      </p>

      <input
        ref={notaRef}
        defaultValue=""
        placeholder="Escribe una observación aquí..."
        style={{ padding: '8px 12px', border: '1px solid #d1d5db', borderRadius: 6 }}
      />

      <div style={{ display: 'flex', gap: 8 }}>
        <button
          onClick={manejarGuardar}
          style={{ flex: 1, padding: '8px', background: '#0070f3', color: '#fff', border: 'none', borderRadius: 6, cursor: 'pointer' }}
        >
          Guardar Nota
        </button>
        <button
          onClick={manejarLimpiar}
          style={{ padding: '8px 16px', background: '#f3f4f6', color: '#6b7280', border: 'none', borderRadius: 6, cursor: 'pointer' }}
        >
          Limpiar
        </button>
      </div>
    </div>
  )
}