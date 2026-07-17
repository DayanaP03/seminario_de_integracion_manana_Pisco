class ClienteHotel:

    tipo_cliente = "Huésped"

    def __init__(self, nombre_cliente, dias_reserva):

        self.nombre_cliente = nombre_cliente
        self.dias_reserva = dias_reserva

    def mostrar_reserva(self):

        return f"Hola, soy {self.nombre_cliente} y reservé por {self.dias_reserva} días."

    def extender_estadia(self):

        self.dias_reserva += 1

        print(
            f"La estadía de {self.nombre_cliente} ahora es de {self.dias_reserva} días."
        )

    def __str__(self):

        return f"ClienteHotel({self.nombre_cliente}, {self.dias_reserva})"

    def __repr__(self):

        return (
            f"ClienteHotel(nombre_cliente={self.nombre_cliente!r}, "
            f"dias_reserva={self.dias_reserva!r})"
        )


cliente1 = ClienteHotel("Dayana Pérez", 3)

cliente2 = ClienteHotel("Carlos Ruiz", 5)

print(cliente1.mostrar_reserva())

print(cliente2.mostrar_reserva())

cliente1.extender_estadia()

print(str(cliente1))

print(repr(cliente1))

print(ClienteHotel.tipo_cliente)