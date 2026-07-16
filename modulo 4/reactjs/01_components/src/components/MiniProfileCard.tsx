import StatusBadge from './StatusBadge'

interface MiniProfileCardProps {
  fullName: string
  role: string
  department: string
  status: 'active' | 'pending' | 'error' | 'inactive'
  joinedYear: number
}

export default function MiniProfileCard({
  fullName,
  role,
  department,
  status,
  joinedYear,
}: MiniProfileCardProps) {
  const yearsActive = new Date().getFullYear() - joinedYear

  return (
    <div style={{ border: '1px solid #e5e7eb', borderRadius: 8, padding: 16, maxWidth: 320 }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start', marginBottom: 12 }}>
        <div>
          <h3 style={{ margin: '0 0 4px', fontSize: 16, fontWeight: 700 }}>{fullName}</h3>
          <p style={{ margin: '0 0 4px', fontSize: 14, color: '#6b7280' }}>{role}</p>
          <p style={{ margin: 0, fontSize: 13, color: '#9ca3af' }}>{department}</p>
        </div>
        <StatusBadge status={status} />
      </div>
      <p style={{ margin: 0, fontSize: 13, color: '#6b7280' }}>
        Se unió hace {yearsActive} año{yearsActive !== 1 ? 's' : ''}
      </p>
    </div>
  )
}
