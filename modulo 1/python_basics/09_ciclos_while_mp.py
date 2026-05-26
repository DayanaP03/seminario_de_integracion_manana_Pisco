contador_reservas = 1

while contador_reservas <= 5:
    print(f"Reserva número: {contador_reservas}")
    contador_reservas += 1


print("Control del ciclo")

print("continue")

habitacion = 1

while habitacion < 5:

    habitacion += 1

    if habitacion == 3:
        continue

    print(f"Habitación: {habitacion}")


print("break")

piso = 1

while piso < 5:

    piso += 1

    if piso == 3:
        break

    print(f"Piso: {piso}")


numero_habitacion = int(input("Ingrese número de habitación: "))

while numero_habitacion != 0:

    print("Habitación seleccionada:", numero_habitacion)

    numero_habitacion = int(input("Ingrese número de habitación: "))


contador_clientes = 1

while contador_clientes <= 5:

    print(f"Cliente registrado: {contador_clientes}")

    contador_clientes += 1

else:
    print("Fin del registro de clientes")