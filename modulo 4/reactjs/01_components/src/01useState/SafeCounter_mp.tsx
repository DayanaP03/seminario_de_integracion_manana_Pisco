import { useState } from 'react'

export default function SafeHotelCountermp() {
  const [rooms, setRooms] = useState(1)

 
  function addRoom() {
    setRooms((prev) => prev + 1)
  }

  function removeRoom() {
    setRooms((prev) => (prev > 1 ? prev - 1 : 1))
  }


  return (
    <div style={{ padding: '20px', border: '1px solid #ccc', borderRadius: '10px' }}>
      <h3>Gestión de Reservas</h3>
      <p>Habitaciones seleccionadas: <strong>{rooms}</strong></p>
      <div style={{ display: 'flex', gap: '10px' }}>
        <button onClick={removeRoom}>Quitar Habitación</button>
        <button onClick={addRoom}>Agregar Habitación</button>
      </div>
    </div>
  )
}