

precio_habitacion = 120
noches_reserva = 5

print("Suma")
print(precio_habitacion, "+", noches_reserva, "=", precio_habitacion + noches_reserva)

print("Resta")
print(precio_habitacion, "-", noches_reserva, "=", precio_habitacion - noches_reserva)

print("Multiplicación")
print(precio_habitacion, "*", noches_reserva, "=", precio_habitacion * noches_reserva)

print("División")
print(precio_habitacion, "/", noches_reserva, "=", precio_habitacion / noches_reserva)

print("División entera")
print(precio_habitacion, "//", noches_reserva, "=", precio_habitacion // noches_reserva)

print("Módulo")
print(precio_habitacion, "%", noches_reserva, "=", precio_habitacion % noches_reserva)


print("Operadores de Asignación")
print("========================")

total_pago = 200

total_pago += 50
print("total_pago += 50 =", total_pago)

total_pago -= 30
print("total_pago -= 30 =", total_pago)

total_pago *= 2
print("total_pago *= 2 =", total_pago)

total_pago /= 10
print("total_pago /= 10 =", total_pago)

total_pago //= 2
print("total_pago //= 2 =", total_pago)

total_pago **= 2
print("total_pago **= 2 =", total_pago)



habitaciones_disponibles = 8
reserva_confirmada = True

print(habitaciones_disponibles > 5)
print(habitaciones_disponibles < 5)
print(habitaciones_disponibles == 8)
print(habitaciones_disponibles != 10)

print(reserva_confirmada and habitaciones_disponibles > 0)
print(reserva_confirmada or habitaciones_disponibles < 0)
print(not reserva_confirmada)