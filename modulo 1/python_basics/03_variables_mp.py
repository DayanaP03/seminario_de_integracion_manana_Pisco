

nombre_huesped = "Carlos Mendoza"     # string
numero_habitacion = 305               # int
precio_noche = 89.50                  # float
reserva_activa = True                 # bool
comentario_extra = None               # NoneType

print(type(nombre_huesped))
print(type(numero_habitacion))
print(type(precio_noche))
print(type(reserva_activa))
print(type(comentario_extra))



piso, adultos, dias_estadia = 5, 2, 4

print(piso)
print(adultos)
print(dias_estadia)




habitacion1 = habitacion2 = habitacion3 = "Disponible"

print(habitacion1)
print(habitacion2)
print(habitacion3)



habitacionA, habitacionB = 101, 202

print(habitacionA, habitacionB)

habitacionA, habitacionB = habitacionB, habitacionA

print(habitacionA, habitacionB)

nombre_cliente = "Carlos Mendoza"      # snake_case
numeroReserva = 4587                   # camelCase (no recomendado)
MAX_HABITACIONES = 100                 # constante
_estado_interno = "ocupada"            # uso interno




habitaciones_disponibles = 42
habitaciones_ocupadas = -5
ingresos_hotel = 1_500_000
numero_reservas = 2 ** 8

print(habitaciones_disponibles)
print(habitaciones_ocupadas)
print(ingresos_hotel)
print(numero_reservas)




habitacion_binaria = 0b1010
habitacion_octal = 0o52
habitacion_hexadecimal = 0xFF

print(habitacion_binaria, habitacion_octal, habitacion_hexadecimal)



print(bin(255))
print(oct(255))
print(hex(255))