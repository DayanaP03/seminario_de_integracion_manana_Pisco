class Reserva:

    def __init__(self, cliente, mensaje):

        self.cliente = cliente
        self.mensaje = mensaje

    def confirmar(self):

        raise NotImplementedError(
            "Las subclases deben implementar confirmar()"
        )

    def __str__(self):

        return (
            f"{self.__class__.__name__} -> {self.cliente}"
        )


class ReservaWeb(Reserva):

    def __init__(self, cliente, mensaje, pagina="Hotel Paradise"):

        super().__init__(cliente, mensaje)

        self.pagina = pagina

    def confirmar(self):

        return (
            f"🌐 Reserva web para {self.cliente}: "
            f"[{self.pagina}] {self.mensaje}"
        )


class ReservaTelefono(Reserva):

    def confirmar(self):

        return (
            f"📞 Reserva telefónica para {self.cliente}: "
            f"{self.mensaje}"
        )


class ReservaApp(Reserva):

    def confirmar(self):

        return (
            f"📱 Reserva desde app para {self.cliente}: "
            f"{self.mensaje[:50]}..."
        )


class ReservaRecepcion(Reserva):

    def __init__(self, recepcion, mensaje):

        super().__init__(recepcion, mensaje)

    def confirmar(self):

        return (
            f"🏨 Reserva en recepción para "
            f"{self.cliente}: {self.mensaje}"
        )


def confirmar_reservas(lista_reservas):

    for reserva in lista_reservas:

        print(f"{reserva.confirmar()}")


reservas = [

    ReservaWeb(
        "dayana@email.com",
        "Habitación reservada correctamente",
        "Hotel Paradise"
    ),

    ReservaTelefono(
        "0999999999",
        "Reserva confirmada vía telefónica"
    ),

    ReservaApp(
        "cliente-app",
        "Su reserva fue realizada exitosamente"
    ),

    ReservaRecepcion(
        "Recepción Principal",
        "Check-in realizado"
    )
]

print("Confirmando reservas")

confirmar_reservas(reservas)


class ArchivoReservaLocal:

    def leer(self):

        return "reservas desde archivo local"

    def escribir(self, datos):

        print(
            f"Guardando reservas en disco: "
            f"{datos[:30]}..."
        )


class ArchivoReservaNube:

    def leer(self):

        return "reservas desde la nube"

    def escribir(self, datos):

        print(
            f"Subiendo reservas a la nube: "
            f"{datos[:30]}..."
        )


class ArchivoReservaBD:

    def leer(self):

        return "reservas desde base de datos"

    def escribir(self, datos):

        print(
            f"Insertando reservas en BD: "
            f"{datos[:30]}..."
        )


def procesar_reserva(archivo):

    contenido = archivo.leer()

    print(f"Procesando: {contenido}")

    archivo.escribir(f"resultado_{contenido}")


for archivo in [
    ArchivoReservaLocal(),
    ArchivoReservaNube(),
    ArchivoReservaBD()
]:

    procesar_reserva(archivo)