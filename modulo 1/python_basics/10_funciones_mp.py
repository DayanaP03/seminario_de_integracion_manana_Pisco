print("Funciones en Python")


print("Función básica")

def mostrar_hotel():
    print("Bienvenido al Hotel Paradise")

mostrar_hotel()


print("Función con parámetro")

def saludar_cliente(nombre_cliente):
    print(f"Hola {nombre_cliente}, disfrute su estadía.")

saludar_cliente("Dayana")
saludar_cliente("Carlos")
saludar_cliente("María")


print("Función que devuelve un valor con return")

def calcular_total(precio, noches):
    return precio * noches

print(calcular_total(80, 3))


print("Funciones con parámetros por posición y por nombre")

def registrar_reserva(cliente, habitacion, ciudad):
    print(f"{cliente} reservó la habitación {habitacion} en {ciudad}")

registrar_reserva("Ana", 205, "Quito")
registrar_reserva(ciudad="Guayaquil", cliente="Luis", habitacion=310)


print("Parámetros por defecto")

def mensaje_reserva(cliente, mensaje="Bienvenido", simbolo="!"):
    print(f"{mensaje} {cliente} {simbolo}")

mensaje_reserva("Pedro", "Buenas noches", "...")
mensaje_reserva("Carlos", simbolo=".")
mensaje_reserva("Lucía", "Gracias por reservar")


print("Funciones con parámetros posicionales")

def sumar_pagos(*pagos):
    print(f"Pagos recibidos: {pagos}")
    return sum(pagos)

print(sumar_pagos(100, 200, 300))
print(sumar_pagos(50, 80, 120, 40))
print(sumar_pagos(500, 250))


print("Funciones combinadas con parámetros posicionales")

def mostrar_servicios(titulo, *servicios):

    print(titulo)

    for servicio in servicios:
        print(f"- {servicio}")

mostrar_servicios(
    "Servicios del hotel",
    "Piscina",
    "WiFi",
    "Restaurante",
    "Spa"
)


print("Funciones con clave y valor")

def crear_reserva(**datos):

    print(f"Datos recibidos: {datos}")

    for clave, valor in datos.items():
        print(f"{clave}: {valor}")

crear_reserva(
    cliente="Ana",
    habitacion=405,
    noches=3,
    ciudad="Quito"
)


print("Funciones con combinación de parámetros")

def configurar_hotel(nombre, *pisos, disponible=True, **extras):

    print(f"Hotel: {nombre}")
    print(f"Pisos: {pisos}")
    print(f"Disponible: {disponible}")
    print(f"Extras: {extras}")

configurar_hotel(
    "Hotel Paradise",
    1, 2, 3, 4,
    disponible=True,
    piscina=True,
    gimnasio=True
)


print("Devolver múltiples valores")

def precio_min_max(precios):
    return min(precios), max(precios)

minimo, maximo = precio_min_max([80, 120, 200, 60])

print(f"Precio mínimo: {minimo}")
print(f"Precio máximo: {maximo}")

_, maximo = precio_min_max([300, 450, 600])

print(f"Solo precio máximo: {maximo}")


print("Devolver diccionario")

def analizar_reservas(valores):

    total = sum(valores)
    cantidad = len(valores)

    return {
        "total": total,
        "promedio": total / cantidad if cantidad > 0 else 0,
        "minimo": min(valores) if valores else None,
        "maximo": max(valores) if valores else None,
        "cantidad": cantidad
    }

datos_reservas = [120, 250, 300, 150]

estadisticas = analizar_reservas(datos_reservas)

print(f"Total: {estadisticas['total']}")
print(f"Promedio: {estadisticas['promedio']}")
print(f"Rango: {estadisticas['minimo']} - {estadisticas['maximo']}")


print("Funciones lambda")

def doble_precio(valor):
    return valor * 2

doble_lambda = lambda valor: valor * 2

print(doble_precio(50))
print(doble_lambda(50))

sumar_reserva = lambda a, b: a + b

print(sumar_reserva(300, 200))