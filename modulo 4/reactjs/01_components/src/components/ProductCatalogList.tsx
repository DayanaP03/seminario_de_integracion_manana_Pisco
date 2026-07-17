interface Product {
  id: number
  name: string
  price: number
  outOfStock?: boolean
}

interface ProductCatalogListProps {
  products: Product[]
  title: string
}

export default function ProductCatalogList({ products, title }: ProductCatalogListProps) {
  return (
    <div style={{ maxWidth: 400 }}>
      <h3 style={{ margin: '0 0 16px', fontSize: 18, fontWeight: 700 }}>{title}</h3>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
        {products.map((product) => (
          <div
            key={product.id}
            style={{
              border: '1px solid #e5e7eb',
              borderRadius: 8,
              padding: 12,
              opacity: product.outOfStock ? 0.6 : 1,
              backgroundColor: product.outOfStock ? '#f9fafb' : 'white',
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start' }}>
              <div>
                <p style={{ margin: '0 0 4px', fontWeight: 600, fontSize: 14 }}>{product.name}</p>
                <p style={{ margin: 0, fontSize: 13, color: '#6b7280' }}>${product.price.toFixed(2)}</p>
              </div>
              {product.outOfStock && (
                <span style={{ fontSize: 12, color: '#e00', fontWeight: 600 }}>Agotado</span>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
