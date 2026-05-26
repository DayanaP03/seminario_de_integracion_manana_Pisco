print("Match Case")

opcion_reserva = input("Seleccione una opción: reservar/cancelar/consultar ")

match opcion_reserva:
    case "reservar":
        print("Reserva realizada correctamente")

    case "cancelar":
        print("Reserva cancelada")

    case "consultar":
        print("Consultando disponibilidad de habitaciones")

    case _:
        print(f"La opción '{opcion_reserva}' no es válida")


print("Match con condicionales")

numero_habitacion = 12

match numero_habitacion:

    case n if n < 10:
        print(f"La habitación {n} es estándar")

    case 0:
        print("Número inválido")

    case n if n % 2 == 0:
        print(f"La habitación {n} pertenece al piso par")

    case n:
        print(f"La habitación {n} pertenece al piso impar")