print("Condicionales simples")

cantidad_huespedes = input("Ingrese cantidad de huéspedes: ")

if int(cantidad_huespedes) >= 2:
    print("Reserva para varias personas")


print("Condicionales de caminos")

precio_habitacion = input("Ingrese precio de habitación: ")

if int(precio_habitacion) > 100:
    print("Habitación premium")
else:
    print("Habitación estándar")


print("Condicionales múltiples")

calificacion_hotel = input("Ingrese calificación del hotel: ")

if int(calificacion_hotel) >= 9:
    print("Hotel excelente")
elif int(calificacion_hotel) >= 7:
    print("Hotel bueno")
elif int(calificacion_hotel) >= 5:
    print("Hotel aceptable")
else:
    print("Hotel con baja calificación")


print("Condicionales if anidados")

tiene_reserva = True
saldo_cliente = 300
tipo_habitacion = "suite"

if tiene_reserva:

    if saldo_cliente >= 250:

        if tipo_habitacion == "suite":
            print("Reserva de suite confirmada")
        else:
            print("Habitación disponible")

    else:
        print("Saldo insuficiente")

else:
    print("No tiene reserva")


print("Evaluación de reservas")

dias_hospedaje = 5
puntaje_cliente = 9
gasto_total = 850

if dias_hospedaje > 3:

    if puntaje_cliente >= 8:

        print("Cliente VIP")

        if gasto_total < 1000:
            print("Obtiene descuento del 10%")
        else:
            print("Obtiene descuento del 15%")

    else:
        print("Cliente sin beneficios")

else:
    print("No cumple requisitos de hospedaje")