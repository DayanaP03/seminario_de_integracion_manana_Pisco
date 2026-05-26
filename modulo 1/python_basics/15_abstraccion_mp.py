from abc import ABC, abstractmethod


class Habitacion(ABC):

    def __init__(self, tipo="Estándar"):

        self.tipo = tipo

    @abstractmethod
    def costo(self) -> float:
        pass

    @abstractmethod
    def capacidad(self) -> int:
        pass

    def describir(self):

        return (
            f"{self.__class__.__name__} {self.tipo}: "
            f"costo=${self.costo():.2f}, capacidad={self.capacidad()} personas"
        )


class HabitacionSimple(Habitacion):

    def __init__(self, precio, tipo="Simple"):

        super().__init__(tipo)

        self.precio = precio

    def costo(self):

        return self.precio

    def capacidad(self):

        return 2


class HabitacionDoble(Habitacion):

    def __init__(self, precio, tipo="Doble"):

        super().__init__(tipo)

        self.precio = precio

    def costo(self):

        return self.precio

    def capacidad(self):

        return 4


class Suite(Habitacion):

    def __init__(self, precio, tipo="Suite"):

        super().__init__(tipo)

        self.precio = precio

    def costo(self):

        return self.precio

    def capacidad(self):

        return 6


habitaciones = [
    HabitacionSimple(80),
    HabitacionDoble(150),
    Suite(300)
]

for habitacion in habitaciones:

    print(habitacion.describir())


costo_total = sum(h.costo() for h in habitaciones)

print(f"Costo total: ${costo_total:.2f}")