

interface UserProfileCardProps {
  fullName: string
  email: string
  role: 'admin' | 'user' | 'moderator'
  isActive: boolean
  skills: string[]
  bio: string
}

export default function UserProfileCard_mp({
  fullName,
  email,
  role,
  isActive,
  skills,
  bio,
}: UserProfileCardProps) {
  const roleLabels: Record<string, string> = {
    admin: 'Gerente',
    user: 'Staff',
    moderator: 'Supervisor',
  }

  return (
    <div style={{ 
      border: '1px solid #e5e7eb', 
      borderRadius: '12px', 
      padding: 20, 
      maxWidth: 420,
      backgroundColor: '#ffffff',
      fontFamily: 'sans-serif'
    }}>
      <div style={{ marginBottom: 16 }}>
        <h2 style={{ margin: '0 0 4px', fontSize: 18, fontWeight: 'bold', color: '#111827' }}>{fullName}</h2>
        <p style={{ margin: '0 0 8px', fontSize: 14, color: '#6b7280' }}>{email}</p>
        
        <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
          <span
            style={{
              fontSize: 11,
              fontWeight: 'bold',
              textTransform: 'uppercase',
              backgroundColor: '#e0e7ff',
              color: '#3730a3',
              padding: '4px 10px',
              borderRadius: '6px',
            }}
          >
            {roleLabels[role]}
          </span>
          <span
            style={{
              fontSize: 11,
              fontWeight: 'bold',
              textTransform: 'uppercase',
              backgroundColor: isActive ? '#dcfce7' : '#fee2e2',
              color: isActive ? '#15803d' : '#991b1b',
              padding: '4px 10px',
              borderRadius: '6px',
            }}
          >
            {isActive ? 'Activo' : 'Inactivo'}
          </span>
        </div>
      </div>

      <p style={{ margin: '0 0 16px', fontSize: 14, color: '#4b5563', lineHeight: 1.6 }}>{bio}</p>

      <div>
        <p style={{ margin: '0 0 8px', fontSize: 13, fontWeight: 'bold', color: '#374151' }}>Especialidades:</p>
        <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap' }}>
          {skills.map((skill) => (
            <span
              key={skill}
              style={{
                fontSize: 12,
                backgroundColor: '#f3f4f6',
                color: '#374151',
                padding: '4px 10px',
                borderRadius: '16px',
                border: '1px solid #e5e7eb'
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