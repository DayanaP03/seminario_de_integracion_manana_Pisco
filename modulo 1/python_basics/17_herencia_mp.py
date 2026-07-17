class Habitacion:

    def __init__(self, tipo, numero, precio):

        self.tipo = tipo
        self.numero = numero
        self.precio = precio
        self._estado = "Disponible"

    def reservar(self):

        self._estado = "Reservada"

        return self

    def liberar(self):

        self._estado = "Disponible"

        return self

    def __str__(self):

        return (
            f"{self.tipo} #{self.numero} "
            f"- ${self.precio} - {self._estado}"
        )


class HabitacionSimple(Habitacion):

    def __init__(self, tipo, numero, precio, camas=1):

        super().__init__(tipo, numero, precio)

        self.camas = camas

    def servicio_basico(self):

        return (
            f"Habitación {self.numero}: "
            f"Servicio básico incluido"
        )

    def __str__(self):

        return (
            f"{super().__str__()} "
            f"({self.camas} cama)"
        )


class HabitacionSuite(Habitacion):

    def __init__(self, tipo, numero, precio, jacuzzi):

        super().__init__(tipo, numero, precio)

        self.jacuzzi = jacuzzi

    def servicio_premium(self):

        return (
            f"Suite {self.numero}: "
            f"Acceso premium habilitado"
        )

    def __str__(self):

        return (
            f"{super().__str__()} "
            f"(Jacuzzi: {self.jacuzzi})"
        )


class SuitePresidencial(HabitacionSuite):

    def __init__(self, tipo, numero, precio, jacuzzi):

        super().__init__(tipo, numero, precio, jacuzzi)

        self.__vip = True

        self.__descuento = 20

    def aplicar_descuento(self, porcentaje=10):

        self.__descuento += porcentaje

        return self

    @property
    def descuento_total(self):

        return self.__descuento

    def __str__(self):

        return (
            f"{super().__str__()} | "
            f"VIP: {self.__vip} | "
            f"Descuento: {self.__descuento}%"
        )


suite = SuitePresidencial(
    "Presidencial",
    501,
    800,
    True
)

suite.reservar()

print(suite)

print(isinstance(suite, SuitePresidencial))

print(isinstance(suite, HabitacionSuite))

print(isinstance(suite, HabitacionSimple))

print(isinstance(suite, Habitacion))

print(SuitePresidencial.__mro__)