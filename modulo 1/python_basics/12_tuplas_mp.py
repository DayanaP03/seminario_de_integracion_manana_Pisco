vacia = ()

habitacion_unica = (101,)

habitacion = (205, 4)

precio_suite = (250, 180, 150)

cliente = ("Dayana", 22, "Quito")

reserva = 305, "Suite"

print(type(reserva))

print(cliente[0])

print(cliente[-1])

print(cliente[1:])

nombre_cliente, edad_cliente, ciudad_cliente = cliente

print(nombre_cliente, edad_cliente, ciudad_cliente)

primera_habitacion, *habitaciones_restantes = (101, 102, 103, 104, 105)

print(primera_habitacion)

print(habitaciones_restantes)

*pisos, ultimo_piso = (1, 2, 3, 4, 5)

print(pisos)

print(ultimo_piso)


def calcular_pago(precio, noches):

    if noches == 0:
        return None, "No puede reservar 0 noches"

    return precio * noches, None


total, error = calcular_pago(120, 3)

if error:
    print(f"Error: {error}")

else:
    print(f"Total a pagar: {total:.2f}")


habitaciones_hotel = {
    (1, 101): "Disponible",
    (2, 205): "Ocupada",
    (3, 301): "Reservada"
}

print(habitaciones_hotel[(1, 101)])