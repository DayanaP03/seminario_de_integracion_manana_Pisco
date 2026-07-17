interface ConditionalGreetingProps {
  isLoggedIn: boolean
  userName: string
  timeOfDay: 'morning' | 'afternoon' | 'evening'
}

export default function ConditionalGreeting({
  isLoggedIn,
  userName,
  timeOfDay,
}: ConditionalGreetingProps) {
  const greetings: Record<string, string> = {
    morning: '¡Buenos días',
    afternoon: '¡Buenas tardes',
    evening: '¡Buenas noches',
  }

  if (!isLoggedIn) {
    return (
      <div style={{ padding: 16, textAlign: 'center', color: '#6b7280' }}>
        <p>Por favor inicia sesión para continuar</p>
      </div>
    )
  }

  return (
    <div style={{ padding: 16, border: '1px solid #e5e7eb', borderRadius: 8, textAlign: 'center' }}>
      <p style={{ margin: 0, fontSize: 18, fontWeight: 500 }}>
        {greetings[timeOfDay]}, {userName}! 👋
      </p>
    </div>
  )
}
