import { useRef, useEffect } from 'react'

export default function AutoFocusForm_mp() {
  const nombreRef = useRef<HTMLInputElement>(null)
  const emailRef = useRef<HTMLInputElement>(null)

  // Foco automático en el primer campo al cargar el componente
  useEffect(() => {
    nombreRef.current?.focus()
  }, [])

  function alPresionarTeclaNombre(e: React.KeyboardEvent<HTMLInputElement>) {
    // Al presionar Enter, salta al campo de email
    if (e.key === 'Enter') {
      e.preventDefault()
      emailRef.current?.focus()
    }
  }

  return (
    <div style={{ maxWidth: 300, fontFamily: 'sans-serif' }}>
      <h3 style={{ textAlign: 'center' }}>Registro Rápido</h3>
      <form style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
        <input
          ref={nombreRef}
          placeholder="Nombre del huésped"
          onKeyDown={alPresionarTeclaNombre}
          style={estiloInput}
        />
        <input
          ref={emailRef}
          type="email"
          placeholder="Correo electrónico"
          style={estiloInput}
        />
        <button
          type="submit"
          style={{ 
            padding: '10px', 
            background: '#2ed573', 
            color: '#fff', 
            border: 'none', 
            borderRadius: 6, 
            cursor: 'pointer',
            fontWeight: 'bold'
          }}
        >
          Confirmar Registro
        </button>
      </form>
    </div>
  )
}

const estiloInput = {
  padding: '10px 12px',
  border: '1px solid #d1d5db',
  borderRadius: 6,
  fontSize: '14px'
}