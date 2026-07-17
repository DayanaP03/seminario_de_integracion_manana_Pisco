// src/App.tsx
import WelcomeBanner       from './components/WelcomeBanner'
import UserGreeting        from './components/UserGreeting'
import CurrentDateDisplay  from './components/CurrentDateDisplay'
import ColoredBox          from './components/ColoredBox'
import ConditionalGreeting from './components/ConditionalGreeting'
import FruitList           from './components/FruitList'
import PriceTag            from './components/PriceTag'
import StatusBadge         from './components/StatusBadge'
import MiniProfileCard     from './components/MiniProfileCard'
import SimpleInfoTable     from './components/SimpleInfoTable'
import ProductCard         from './components/ProductCard'
import ProductCatalogList  from './components/ProductCatalogList'
import UserProfileCard     from './components/UserProfileCard'
import DigitalCounter_mp from './01useState/DigitalCounter_mp'
import DigitalCounter from './01useState/DigitalCounter'
import SafeHotelCountermp from './01useState/SafeCounter_mp'
import HotelServicesManager from './01useState/TaskManager_mp'
import GuestRegistration from './01useState/UserProfileForm_mp'
import UserProfileForm_mp from './01useState/UserProfileForm_mp'
import DocumentTitle_mp from './02useEffect/DocumentTitle_mp'
import FechUsermp from './02useEffect/FetchUser_mp'
import AutoFocusForm_mp from './03useRef/AutoFocusForm_mp'
import InlineEditor_mp from './03useRef/InlineEditor_mp'
import ColoredBox_mp from './components/ColoredBox_mp'
import ConditionalGreenting_mp from './components/ConditionalGreeting_mp'
import CurrentDataDisplay_mp from './components/CurrentDateDisplay_mp'
import ListaDeAmenidades from './components/FruitList_MP'
import MiniProfileCard_mp from './components/MiniProfileCard_mp'
import PriceTag_mp from './components/PriceTag_mp'
import ProductCard_mp from './components/ProductCard_mp'
import ProductCatalogList_mp from './components/ProductCatalogList_mp'
import SimpleInfoTable_mp from './components/SimpleInfoTable_mp'
import UserGreeting_mp from './components/UserGreeting_mp'
import UserProfileCard_mp from './components/UserProfileCard_mp'
import WelcomeBanner_mp from './components/WelcomeBanner_mp'

// ┌──────────────────────────────────────────────────────────────────────────┐
// │  Cambia PASO y guarda (Ctrl+S) para navegar entre componentes.          │
// │   1  WelcomeBanner       — banner estático sin props                    │
// │   2  UserGreeting        — props string + cálculo de iniciales          │
// │   3  CurrentDateDisplay  — fecha calculada al renderizar                │
// │   4  ColoredBox          — estilos dinámicos con props numéricas        │
// │   5  ConditionalGreeting — renderizado condicional + tipo unión         │
// │   6  FruitList           — lista tipada con .map()                      │
// │   7  PriceTag            — cálculos con props numéricas                 │
// │   8  StatusBadge         — Record para mapear tipos a estilos           │
// │   9  MiniProfileCard     — composición de componentes                   │
// │  10  SimpleInfoTable     — tabla con rows tipadas                       │
// │  11  ProductCard         — interfaz de props con opcionales y booleanas │
// │  12  ProductCatalogList  — lista con renderizado condicional de items   │
// │  13  UserProfileCard     — ejercicio: props complejas + rol             │
// └──────────────────────────────────────────────────────────────────────────┘
const PASO: number = 33

const fruits = [
  { name: 'Manzana', emoji: '🍎', calories: 52 },
  { name: 'Banana',  emoji: '🍌', calories: 89 },
  { name: 'Naranja', emoji: '🍊', calories: 47 },
]

const catalog = [
  { id: 1, name: 'Teclado mecánico',  price: 89.99 },
  { id: 2, name: 'Monitor 27 pulgadas', price: 349.99 },
  { id: 3, name: 'Mouse inalámbrico', price: 29.99, outOfStock: true },
  { id: 4, name: 'Webcam HD',         price: 59.99 },
]
const listaCortesias = [
  { nombre: 'Jabón Artesanal', icono: '', precio: 5.00 },
  { nombre: 'Bata de Baño', icono: '', precio: 15.00 },
  { nombre: 'Café Premium', icono: '', precio: 3.50 }
]
const servicios = [
  { id: 1, nombre: 'Traslado al aeropuerto', precio: 25.00 },
  { id: 2, nombre: 'Tour de ciudad', precio: 45.00, sinCupo: true }
]
const detallesReserva = [
  { etiqueta: 'Habitación', valor: 'Suite Deluxe 402' },
  { etiqueta: 'Check-in', valor: '18 Julio' },
  { etiqueta: 'Total', valor: '$450.00', resaltar: true }
]

export default function App() {
  const content =
    PASO ===  1 ? <WelcomeBanner /> :
    PASO ===  2 ? <UserGreeting name="Ana García" occupation="Desarrolladora Frontend" /> :
    PASO ===  3 ? <CurrentDateDisplay /> :
    PASO ===  4 ? (
      <div style={{ display: 'flex', gap: 12 }}>
        <ColoredBox color="#0070f3" label="Primary" />
        <ColoredBox color="#22c55e" label="Success" />
        <ColoredBox color="#e00"    label="Danger" />
      </div>
    ) :
    PASO ===  5 ? <ConditionalGreeting isLoggedIn={true} userName="Ana" timeOfDay="afternoon" /> :
    PASO ===  6 ? <FruitList fruits={fruits} title="Frutas favoritas" /> :
    PASO ===  7 ? (
      <div style={{ display: 'flex', gap: 24, alignItems: 'flex-end' }}>
        <PriceTag amount={99.99} currency="USD" />
        <PriceTag amount={99.99} currency="USD" discountPercent={20} />
      </div>
    ) :
    PASO ===  8 ? (
      <div style={{ display: 'flex', gap: 8 }}>
        <StatusBadge status="active" />
        <StatusBadge status="pending" />
        <StatusBadge status="error" />
        <StatusBadge status="inactive" />
      </div>
    ) :
    PASO ===  9 ? (
      <MiniProfileCard
        fullName="Ana García"
        role="Senior Developer"
        department="Ingeniería"
        status="active"
        joinedYear={2019}
      />
    ) :
    PASO === 10 ? (
      <SimpleInfoTable
        title="Resumen del pedido"
        rows={[
          { label: 'Subtotal',  value: '$89.99' },
          { label: 'Envío',     value: '$5.00' },
          { label: 'Total',     value: '$94.99', highlight: true },
        ]}
      />
    ) :
    PASO === 11 ? <ProductCard title="Teclado inalámbrico" description="Bluetooth 5.0, retroiluminado" highlighted /> :
    PASO === 12 ? <ProductCatalogList products={catalog} title="Productos disponibles" /> :
    PASO === 13 ? (
      <UserProfileCard
        fullName="Ana García"
        email="ana@ejemplo.com"
        role="admin"
        isActive={true}
        skills={['TypeScript', 'React', 'Node.js']}
        bio="Desarrolladora fullstack con 5 años de experiencia."
      />
    ) :
    PASO === 14 ? (
  <div>
    <h2>Reserva tu Hotel</h2>
    <DigitalCounter_mp label="Habitaciones" initialValue={1} />
    <DigitalCounter_mp label="Adultos" initialValue={2} />
    <DigitalCounter_mp label="Niños" initialValue={0} min={0} />
  </div>
) :

   PASO === 15 ? <SafeHotelCountermp /> :
   PASO === 16 ? <HotelServicesManager /> :
   PASO === 17 ? <UserProfileForm_mp /> :
   PASO === 18 ? <DocumentTitle_mp /> :
   PASO === 19 ? <FechUsermp /> :
   PASO === 20 ? <AutoFocusForm_mp /> :
   PASO === 21 ? <InlineEditor_mp /> :
   PASO === 22 ? (
  <div style={{ display: 'flex', gap: 10 }}>
    <ColoredBox_mp color="#2ed573" estado="Disponible" />
    <ColoredBox_mp color="#ff4757" estado="Ocupada" />
    <ColoredBox_mp color="#ffa502" estado="En Limpieza" />
  </div>
) :
  PASO === 23 ? (
  <ConditionalGreenting_mp 
    estaConectado={true} 
    nombreUsuario="Administrador" 
    momentoDelDia="mañana" 
  />
) :
  PASO === 24 ? <CurrentDataDisplay_mp /> :
  PASO === 25 ? (
  <ListaDeAmenidades frutas={listaCortesias} titulo="Cortesías de Habitación" />
) :
  PASO === 26? (
  <MiniProfileCard_mp 
    nombreCompleto="Carlos Méndez" 
    puesto="Gerente de Recepción" 
    departamento="Front Office" 
    estado="active" 
    añoDeIngreso={2022} 
  />
) : 
PASO === 27 ? (
  <PriceTag_mp  monto={150.00}  moneda="USD" descuentoPorcentaje={10} 
  />
) : 
PASO === 28 ? (
  <ProductCard_mp
    titulo="Suite Presidencial" 
    descripcion="Habitación con vista al mar y servicio de conserjería 24/7." 
    destacada={true} 
  />
) : 
PASO === 29 ? (
  <ProductCatalogList_mp 
    servicios={servicios} 
    titulo="Servicios Disponibles" 
  />
) : 
PASO === 30 ? (
  <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
    <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
      <span>Reserva #101:</span>
      <UserGreeting_mp name="Ana García" occupation="Desarrolladora fullstack" />
    </div>
    <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
      <span>Reserva #102:</span>
      <UserGreeting_mp name="Luis Pérez" occupation="Recepcionista" />
    </div>
    <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
      <span>Reserva #103:</span>
      <UserGreeting_mp name="Marta López" occupation="Ama de Llaves" />
    </div>
  </div>
) :
PASO === 31 ? (
  <UserGreeting_mp
    name="Elena Vaca" 
    occupation="Gerente de Recepción" 
  />
) :

PASO === 32 ? (
  <UserProfileCard_mp
    fullName="Carlos Méndez"
    email="c.mendez@hotel.com"
    role="admin"
    isActive={true}
    skills={['Gestión de Personal', 'Idiomas', 'Reserva de Eventos']}
    bio="Gerente con 10 años de experiencia en la industria hotelera, especializado en atención al cliente de alto nivel."
  />
) : 
PASO ===  33 ? <WelcomeBanner_mp /> :
    <p style={{ color: '#e00' }}>Paso {PASO}: crea el componente primero</p>


  return (
    <main style={{ maxWidth: 540, margin: '40px auto', fontFamily: 'sans-serif', padding: '0 16px' }}>
      {content}
    </main>
  )
}