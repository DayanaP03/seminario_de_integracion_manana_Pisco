class ReservaHotel:

    def __init__(self, cliente, saldo_inicial=0):

        self.cliente = cliente
        self.__saldo = saldo_inicial
        self.__historial = []
        self.__reserva_activa = True

        self.__registrar(
            f"Reserva creada con saldo inicial de ${saldo_inicial}"
        )

    @property
    def saldo(self):

        return self.__saldo

    @property
    def reserva_activa(self):

        return self.__reserva_activa

    @property
    def historial(self):

        return list(self.__historial)

    def agregar_pago(self, cantidad):

        if cantidad <= 0:
            raise ValueError(
                "La cantidad debe ser positiva"
            )

        self.__saldo += cantidad

        self.__registrar(
            f"Pago agregado: +${cantidad}"
        )

        return self

    def realizar_consumo(self, cantidad):

        if cantidad <= 0:
            raise ValueError(
                "La cantidad debe ser positiva"
            )

        if cantidad > self.__saldo:
            raise ValueError(
                f"Saldo insuficiente (${self.__saldo})"
            )

        self.__saldo -= cantidad

        self.__registrar(
            f"Consumo realizado: -${cantidad}"
        )

        return self

    def transferir_reserva(self, destino, cantidad):

        self.realizar_consumo(cantidad)

        destino.agregar_pago(cantidad)

        self.__registrar(
            f"Transferencia a {destino.cliente}: -${cantidad}"
        )

        return self

    def __registrar(self, operacion):

        from datetime import datetime

        hora = datetime.now().strftime("%H:%M:%S")

        self.__historial.append(
            f"[{hora}] {operacion}"
        )

    def __str__(self):

        return (
            f"ReservaHotel({self.cliente}: ${self.__saldo})"
        )


reserva1 = ReservaHotel("Dayana Pérez", 500)

reserva2 = ReservaHotel("Carlos Ruiz", 300)

reserva1.agregar_pago(200).realizar_consumo(150)

reserva1.transferir_reserva(reserva2, 100)

print(reserva1)

print(reserva2)

print(f"Saldo disponible: ${reserva1.saldo}")

for movimiento in reserva1.historial:

    print(f"{movimiento}")