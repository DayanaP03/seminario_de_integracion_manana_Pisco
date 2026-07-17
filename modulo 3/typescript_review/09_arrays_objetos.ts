// Concepto puro
type Producto = {
  id: number;
  nombre: string;
  precio: number;
  disponible: boolean;
};

const catalogo: Producto[] = [
  { id: 1, nombre: "Laptop",  precio: 999,  disponible: true },
  { id: 2, nombre: "Mouse",   precio: 25,   disponible: true },
  { id: 3, nombre: "Monitor", precio: 350,  disponible: false },
];

// TypeScript sabe que cada "p" es de tipo Producto
const disponibles: Producto[] = catalogo.filter((p) => p.disponible);
const nombres: string[] = catalogo.map((p) => p.nombre);
const masBarato: Producto | undefined = catalogo.reduce((min, p) =>
  p.precio < min.precio ? p : min
);

console.log(nombres);                  // ["Laptop", "Mouse", "Monitor"]
console.log(masBarato?.nombre);       // "Mouse"
console.log(disponibles.length);      // 2

//inlcuir extencia , incluir dos elementso de aaray y imprimir el arreglo completo imprimir la existencia
//del 4 elemento aaray 

// Añadir dos productos al catálogo, imprimir arreglo completo y comprobar existencia
catalogo.push(
  { id: 4, nombre: "Teclado", precio: 45, disponible: true },
  { id: 5, nombre: "Auriculares", precio: 60, disponible: true }
);

console.log('Catálogo completo:', catalogo);

// Comprobar existencia del 4º elemento (índice 3)
const cuarto = catalogo[3];
if (cuarto) {
  console.log(`Existe el 4º elemento: ${cuarto.nombre} (id=${cuarto.id})`);
} else {
  console.log('No existe el 4º elemento en el catálogo');
}

// Comprobar existencia por id (ej. id === 4)
const existeId4 = catalogo.some((p) => p.id === 4);
console.log(`¿Existe producto con id 4? ${existeId4}`);

