interface PriceTagProps {
  amount: number
  currency: string
  discountPercent?: number
}

export default function PriceTag({ amount, currency, discountPercent }: PriceTagProps) {
  const discounted = discountPercent ? amount * (1 - discountPercent / 100) : amount

  return (
    <div style={{ textAlign: 'center' }}>
      <div style={{ fontSize: 12, color: '#6b7280', marginBottom: 4 }}>{currency}</div>
      {discountPercent && (
        <div style={{ fontSize: 14, color: '#e00', textDecoration: 'line-through', marginBottom: 4 }}>
          ${amount.toFixed(2)}
        </div>
      )}
      <div style={{ fontSize: 24, fontWeight: 700 }}>${discounted.toFixed(2)}</div>
      {discountPercent && (
        <div style={{ fontSize: 12, color: '#22c55e', marginTop: 4 }}>-{discountPercent}%</div>
      )}
    </div>
  )
}
