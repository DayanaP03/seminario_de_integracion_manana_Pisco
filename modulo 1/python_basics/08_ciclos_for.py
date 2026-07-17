print("ciclo for ")

frutas=["manzana", "banana", "pera"]
for fruta in frutas:
    print (fruta)

print ("recorrer palabras")
for letra in "manzana ":
    print (letra)


print ("recorrer rango")
for i in range (1,6):
    print (i)
    
print ("recorrer rango configurar paso")
for i in range (1,10,2):
    print (i)

print ("enumerar lista ")
for i, fruta in enumerate (frutas):
    print (i, fruta )

print ("dos listas a la vez ")
nombres=["Ana", "Luis"]
edades=[25, 30]
for nombre, edad in zip (nombres, edades):
    print (nombre, edad)


print ("control del ciclo")
print("break")
for i in range(5):
    if i == 3:
        break
    print(i)
print ("continue")
for i in range(5):
    if i==2:
        continue
    print(i)

#print ("for anidado")
for i in range(3):
    for j in range(2):
        print (i, j)
print("lista comprehesion forma corta")
cuadrados=[x**2 for x in range(5)]
print (cuadrados)


#repaso 


ventas = [120, 80, 200, 50, 300]
total = 0
bono = 0

for venta in ventas:
    if venta > 100:
        ventas += 1
        if venta > 250:
            bono += 30
        else:
            bono += 10

print(f"Total ventas validas: {ventas }")
print(f"Total bono acumulado: {bono}")


