interface UserGreetingProps {
  name: string
  occupation: string
}

export default function UserGreeting({ name, occupation }: UserGreetingProps) {
  const initials = name
    .split(' ')
    .map((word) => word[0])
    .join('')
    .toUpperCase()

  return (
    <div style={{ padding: 16, border: '1px solid #e5e7eb', borderRadius: 8, textAlign: 'center' }}>
      <div
        style={{
          width: 56,
          height: 56,
          borderRadius: '50%',
          backgroundColor: '#0070f3',
          color: 'white',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: 24,
          fontWeight: 'bold',
          margin: '0 auto 12px',
        }}
      >
        {initials}
      </div>
      <h2 style={{ margin: '0 0 4px', fontSize: 18, fontWeight: 600 }}>{name}</h2>
      <p style={{ margin: 0, fontSize: 14, color: '#6b7280' }}>{occupation}</p>
    </div>
  )
}
