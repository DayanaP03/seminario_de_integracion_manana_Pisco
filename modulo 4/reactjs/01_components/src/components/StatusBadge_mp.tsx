// src/components/StatusBadge.tsx

interface PropsInsigniaEstado {
  estado: 'active' | 'pending' | 'error' | 'inactive'
}

const estilosEstado: Record<string, { bg: string; text: string; label: string }> = {
  active: { bg: '#dcfce7', text: '#15803d', label: 'Confirmado' },
  pending: { bg: '#fef3c7', text: '#92400e', label: 'Pendiente' },
  error: { bg: '#fee2e2', text: '#991b1b', label: 'Cancelado' },
  inactive: { bg: '#f3f4f6', text: '#6b7280', label: 'Archivado' },
}

export default function StatusBadge({ estado }: PropsInsigniaEstado) {
  const estilo = estilosEstado[estado]

  return (
    <span
      style={{
        backgroundColor: estilo.bg,
        color: estilo.text,
        padding: '4px 12px',
        borderRadius: '16px',
        fontSize: '11px',
        fontWeight: 'bold',
        textTransform: 'uppercase',
        display: 'inline-block',
        fontFamily: 'sans-serif',
      }}
    >
      {estilo.label}
    </span>
  )
}