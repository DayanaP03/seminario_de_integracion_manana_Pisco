print ("condionales simples")
edad=input ("Ingrese su edad: ")

if (int(edad)) >=18:
    print ("Mayor de edad")

print ("condicionales de caminos ")
temperatura = input("Incluye temperatura?")
if (int (temperatura)>38):
    print ("temperatura alta")
else:
    print ("temperatura normal")


print ("condicionales de multiples ")
nota=input ("Ingrese nota")
if (int(nota)>=90):
    print ("Excelente")
elif (int(nota)>=80):
    print ("Bueno")
elif (int(nota)>=70):
    print ("Aprobado")
else:
    print ("Reprobado")



print ("condicionales if animados")
tiene_reserva=True 
dinero=25
plato="pizza"
if (tiene_reserva):
    if(dinero>=20):
        if (plato=="pizza"):
            print ("tu pizza cuesta $20 pedido confirmado")
        else:
            print ("plato disponible")
    else:
        print ("dinero insuficiente")        

else :
    print ("no tienes reserva")

##respasoooo
print("Evaluacion de empleados")

antiguedad = 2
calificacion = 9
salario = 900

if (antiguedad > 1):
    
    if (calificacion >= 8):
        
        print("Puede optar al bono")
        
        if (salario < 1000):
            print("Recibe bono de $200")
        else:
            print("Recibe bono de $100")
    
    else:
        print("No recibe bono por baja calificacion")

else:
    print("No cumple antiguedad suficiente")