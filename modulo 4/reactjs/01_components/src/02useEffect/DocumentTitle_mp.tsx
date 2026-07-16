

import { useEffect } from 'react'

export default function DocumentTitlemp() {
  useEffect(() => {
    document.title = 'Reserva de Hotel'

 
    return () => {
      document.title = ' Hotel'
    }
  }, [])

  return (
    <p style={{ fontSize: 14, color: '#3309db' }}>
Hola, quiero reservar una habitación para [593-989872472]  ¿Tienen libre y qué precio tiene?    </p>
  )
}