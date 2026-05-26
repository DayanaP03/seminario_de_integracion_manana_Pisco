vacio = {}

cliente = {
    "nombre": "Dayana",
    "edad": 22,
    "ciudad": "Quito"
}

hotel = dict(nombre="Hotel Paradise", habitaciones=120, disponible=True)

print(cliente["nombre"])

print(cliente.get("correo"))

print(cliente.get("correo", "No registrado"))

cliente["correo"] = "dayana@email.com"

cliente["edad"] = 23

del cliente["ciudad"]

valor = cliente.pop("correo")

print(cliente)

print("nombre" in cliente)

print("ciudad" in cliente)

print(cliente.keys())

print(cliente.values())

print(cliente.items())

for clave, valor in cliente.items():
    print(f"{clave}: {valor}")

cliente.update({
    "pais": "Ecuador",
    "telefono": "0999999999"
})

print(cliente)

extra = {
    "vip": True,
    "habitacion": 305
}

completo = cliente | extra

print(completo)

reservas = {
    "hotel": "Hotel Paradise",

    "clientes": {
        1: {"nombre": "Carlos", "habitacion": 101},
        2: {"nombre": "Ana", "habitacion": 205}
    },

    "servicios": ["Piscina", "Spa", "WiFi"]
}

print(reservas["clientes"][1]["nombre"])

reservas["clientes"][3] = {
    "nombre": "Lucía",
    "habitacion": 310
}

cliente.setdefault("pais", "Ecuador")

cliente.setdefault("nombre", "Invitado")