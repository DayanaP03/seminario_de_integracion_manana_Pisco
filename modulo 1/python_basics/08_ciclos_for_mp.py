print("Ciclo for")

habitaciones = ["Suite", "Doble", "Simple"]

for tipo in habitaciones:
    print(tipo)


print("Recorrer palabras")

for letra in "hotel":
    print(letra)


print("Recorrer rango")

for numero in range(1, 6):
    print(numero)


print("Recorrer rango con paso")

for piso in range(1, 10, 2):
    print(piso)


print("Enumerar lista")

for posicion, tipo in enumerate(habitaciones):
    print(posicion, tipo)


print("Dos listas a la vez")

clientes = ["Carlos", "María"]
dias = [3, 5]

for cliente, estadia in zip(clientes, dias):
    print(cliente, estadia)


print("Control del ciclo")

print("break")

for habitacion in range(5):

    if habitacion == 3:
        break

    print(habitacion)


print("continue")

for habitacion in range(5):

    if habitacion == 2:
        continue

    print(habitacion)


print("For anidado")

for piso in range(3):

    for cuarto in range(2):
        print(piso, cuarto)


print("Lista comprehension")

precios = [x * 50 for x in range(5)]

print(precios)


print("Repaso")

reservas = [120, 80, 200, 50, 300]

total_reservas = 0
descuento = 0

for reserva in reservas:

    if reserva > 100:

        total_reservas += 1

        if reserva > 250:
            descuento += 30

        else:
            descuento += 10

print(f"Total reservas válidas: {total_reservas}")
print(f"Total descuentos acumulados: {descuento}")