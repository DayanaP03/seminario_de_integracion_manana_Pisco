print("match case")

comando= input("comando proceso iniciar/parar/reiniciar")

match comando:
    case "iniciar":
        print ("proceso iniciado")
    case "parar":
         print ("detniendise")
    case "reiniciar":
        print ("reiniciando  el sistema ")
    case _:
        print (f"comando '{comando}' no reconocido")

print ("match _ condionales")
numero =7
match numero:
    case n if n<10:
        print (f"{n} es negatuvo ")

    case 0:
         print ("es cero ")
    case n if n%2==0:
        print (f"{n} es par")
    case n:
        print (f"{n} es positivo e impar")

