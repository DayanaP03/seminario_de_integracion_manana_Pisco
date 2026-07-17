interface StatusBadgeProps {
  status: 'active' | 'pending' | 'error' | 'inactive'
}

const statusStyles: Record<string, { bg: string; text: string; label: string }> = {
  active: { bg: '#dcfce7', text: '#15803d', label: 'Activo' },
  pending: { bg: '#fef3c7', text: '#92400e', label: 'Pendiente' },
  error: { bg: '#fee2e2', text: '#991b1b', label: 'Error' },
  inactive: { bg: '#f3f4f6', text: '#6b7280', label: 'Inactivo' },
}

export default function StatusBadge({ status }: StatusBadgeProps) {
  const style = statusStyles[status]

  return (
    <span
      style={{
        backgroundColor: style.bg,
        color: style.text,
        padding: '4px 12px',
        borderRadius: 12,
        fontSize: 12,
        fontWeight: 600,
        display: 'inline-block',
      }}
    >
      {style.label}
    </span>
  )
}
