print("Listas")

print("Crear listas")

habitaciones_vacias = []

print(habitaciones_vacias)

numeros_habitacion = [101, 102, 103, 104, 105]

print(numeros_habitacion)

clientes = ["Carlos", "María", "Ana", "Pedro", "Lucía"]

print(clientes)

datos_reserva = [205, "Suite", True, None, 150.75]

print(datos_reserva)

hotel = ["Recepción", ["Piscina", "Spa", ["Restaurante", "Bar"]]]

print(hotel)


print("Acceso a elementos")

print(clientes[0])

print(clientes[-1])

print(clientes[1:3])

print(clientes[::-1])


print("CRUD de listas")

servicios = ["Piscina", "WiFi", "Restaurante"]

# Agregar
servicios.append("Spa")

print(servicios)

servicios.insert(1, "Gimnasio")

print(servicios)

servicios.extend(["Bar", "Parqueadero"])

print(servicios)


# Modificar
servicios[0] = "Piscina Premium"

print(servicios)


# Eliminar
servicios.remove("WiFi")

print(servicios)

eliminado = servicios.pop()

print(servicios)

eliminado = servicios.pop(0)

print(servicios)

del servicios[0]

print(servicios)


print("Buscar valores en listas")

print("Bar" in servicios)

print(servicios.index("Bar"))

print(servicios.count("Bar"))


print("Ordenar listas")

precios_habitacion = [120, 80, 250, 150, 90]

print(precios_habitacion)

precios_habitacion.sort()

print(precios_habitacion)

precios_habitacion.sort(reverse=True)

print(precios_habitacion)

ordenados = sorted(precios_habitacion)

print(precios_habitacion)

print(ordenados)