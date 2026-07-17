interface PropsIndicador {
  color: string
  estado: string
}

export default function ColoredBox_mp({ color, estado }: PropsIndicador) {
  return (
    <div
      style={{
        backgroundColor: color,
        padding: '12px 24px',
        borderRadius: 8,
        color: 'white',
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: '14px',
        minWidth: '120px',
        fontFamily: 'sans-serif',
        boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
      }}
    >
      {estado}
    </div>
  )
}