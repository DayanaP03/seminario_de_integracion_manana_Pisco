interface PropsEtiquetaPrecio {
  monto: number
  moneda: string
  descuentoPorcentaje?: number
}

export default function PriceTag_mp({ monto, moneda, descuentoPorcentaje }: PropsEtiquetaPrecio) {
  const precioFinal = descuentoPorcentaje ? monto * (1 - descuentoPorcentaje / 100) : monto

  return (
    <div style={{ 
      textAlign: 'center', 
      fontFamily: 'sans-serif',
      padding: '16px',
      border: '1px solid #f3f4f6',
      borderRadius: '12px',
      backgroundColor: '#ffffff'
    }}>
      <div style={{ fontSize: '12px', color: '#6b7280', marginBottom: '4px', textTransform: 'uppercase' }}>
        {moneda}
      </div>
      
      {descuentoPorcentaje && (
        <div style={{ fontSize: '14px', color: '#ef4444', textDecoration: 'line-through', marginBottom: '4px' }}>
          {monto.toFixed(2)}
        </div>
      )}
      
      <div style={{ fontSize: '24px', fontWeight: 'bold', color: '#111827' }}>
        {precioFinal.toFixed(2)}
      </div>
      
      {descuentoPorcentaje && (
        <div style={{ fontSize: '12px', color: '#22c55e', marginTop: '4px', fontWeight: 'bold' }}>
          -{descuentoPorcentaje}% descuento
        </div>
      )}
    </div>
  )
}