interface ColoredBoxProps {
  color: string
  label: string
}

export default function ColoredBox({ color, label }: ColoredBoxProps) {
  return (
    <div
      style={{
        backgroundColor: color,
        padding: 24,
        borderRadius: 8,
        color: 'white',
        textAlign: 'center',
        fontWeight: 600,
        fontSize: 14,
        minWidth: 100,
      }}
    >
      {label}
    </div>
  )
}
