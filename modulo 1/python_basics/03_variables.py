#Enteros , cadena de carcteres, booleano, none 

nombre= "Ana Garcia" #string 
edad = 28  #init
altura = 1.65  #float 
activo = True   #bool
nulo = None   #NoneType 

print (type(nombre))
print (type(edad))
print (type(altura))
print (type(activo))
print (type(nulo))

#Asugnar valores a multiples variables

a,b,c = 12,13,14

print (a)
print (b)
print (c)

#Asignar el mismo valor a multiples variables

a =b=c=0

print (a)
print (b)
print (c)


#intervacion de valores
x,y =10, 20

print (x,y)
x, y = y,x
print (x,y)


#conversion de nombres

nombre_completo = "Ana Garcia"       #SNAKE_CASE 
nombreCompleto = "Ana Garcia"        #no usar camelacase
MAX_REINTENTOS = 3                  # mayusculas sosotenidas para convertir 
_variable_interna ="privada"        # pasar uso interno 


#manejo de enteros 
pequeno =  42 
negativo = -17
grande = 100_000_000
enorme = 2 **100

print (pequeno)
print (negativo)
print (grande)
print (enorme)

#bases numericas 
binario= 0b1010
octal = 0o52
hexadecimal = 0xFF
print (binario, octal, hexadecimal)



#convertir de decimal a otras bases 

print (bin(255))
print (oct(255))
print (hex(255))


