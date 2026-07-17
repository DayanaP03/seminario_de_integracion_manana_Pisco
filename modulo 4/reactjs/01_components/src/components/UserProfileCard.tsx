interface UserProfileCardProps {
  fullName: string
  email: string
  role: 'admin' | 'user' | 'moderator'
  isActive: boolean
  skills: string[]
  bio: string
}

export default function UserProfileCard({
  fullName,
  email,
  role,
  isActive,
  skills,
  bio,
}: UserProfileCardProps) {
  const roleLabels: Record<string, string> = {
    admin: 'Administrador',
    user: 'Usuario',
    moderator: 'Moderador',
  }

  return (
    <div style={{ border: '1px solid #e5e7eb', borderRadius: 8, padding: 20, maxWidth: 420 }}>
      <div style={{ marginBottom: 16 }}>
        <h2 style={{ margin: '0 0 4px', fontSize: 18, fontWeight: 700 }}>{fullName}</h2>
        <p style={{ margin: '0 0 8px', fontSize: 14, color: '#6b7280' }}>{email}</p>
        <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
          <span
            style={{
              fontSize: 12,
              fontWeight: 600,
              backgroundColor: '#dbeafe',
              color: '#1e40af',
              padding: '2px 8px',
              borderRadius: 4,
            }}
          >
            {roleLabels[role]}
          </span>
          <span
            style={{
              fontSize: 12,
              fontWeight: 600,
              backgroundColor: isActive ? '#dcfce7' : '#fee2e2',
              color: isActive ? '#15803d' : '#991b1b',
              padding: '2px 8px',
              borderRadius: 4,
            }}
          >
            {isActive ? 'Activo' : 'Inactivo'}
          </span>
        </div>
      </div>

      <p style={{ margin: '0 0 12px', fontSize: 14, color: '#4b5563', lineHeight: 1.5 }}>{bio}</p>

      <div>
        <p style={{ margin: '0 0 8px', fontSize: 13, fontWeight: 600, color: '#374151' }}>Habilidades:</p>
        <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap' }}>
          {skills.map((skill) => (
            <span
              key={skill}
              style={{
                fontSize: 12,
                backgroundColor: '#f3f4f6',
                color: '#1f2937',
                padding: '4px 10px',
                borderRadius: 16,
              }}
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}
