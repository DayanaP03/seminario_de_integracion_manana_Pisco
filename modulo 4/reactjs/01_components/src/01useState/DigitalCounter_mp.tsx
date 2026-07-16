import { useState } from 'react'

export default function DigitalCountermp({
  label = 'Habitaciones',
  initialValue = 1,
  min = 1,
  max = 5
}) {
  const [count, setCount] = useState(initialValue)

  function increment() {
    if (count < max) setCount(count + 1)
  }

  function decrement() {
    if (count > min) setCount(count - 1)
  }

  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 12, margin: '10px 0' }}>
      <span style={{ fontSize: 16, fontWeight: 500, minWidth: 100 }}>{label}</span>
      <button onClick={decrement} style={btnStyle}>−</button>
      <span style={{ fontSize: 20, fontWeight: 600, minWidth: 40, textAlign: 'center' }}>
        {count}
      </span>
      <button onClick={increment} style={btnStyle}>+</button>
    </div>
  )
}
const btnStyle = {
  width: 36,
  height: 36,
  borderRadius: 8,
  border: '1px solid #555', // Un borde más claro para que se note
  background: '#eee',       // Fondo claro
  color: '#000',            // Texto negro
  cursor: 'pointer',
  fontSize: 18,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center'
}