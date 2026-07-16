interface TableRow {
  label: string
  value: string
  highlight?: boolean
}

interface SimpleInfoTableProps {
  title: string
  rows: TableRow[]
}

export default function SimpleInfoTable({ title, rows }: SimpleInfoTableProps) {
  return (
    <div style={{ border: '1px solid #e5e7eb', borderRadius: 8, padding: 16, maxWidth: 360 }}>
      <h3 style={{ margin: '0 0 16px', fontSize: 16, fontWeight: 700 }}>{title}</h3>
      <div>
        {rows.map((row, idx) => (
          <div
            key={idx}
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              padding: '8px 0',
              borderBottom: idx < rows.length - 1 ? '1px solid #f3f4f6' : 'none',
              fontWeight: row.highlight ? 700 : 400,
              fontSize: row.highlight ? 15 : 14,
              color: row.highlight ? '#000' : '#6b7280',
            }}
          >
            <span>{row.label}</span>
            <span>{row.value}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
