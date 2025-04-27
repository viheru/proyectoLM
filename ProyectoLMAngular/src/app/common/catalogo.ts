export interface Catalogo {
  nombreTienda: string
  productos: Producto[]
}

export interface Producto {
  nombre: string
  descripcion: string
  precio: string
  talla: string
  stock: string
  imagen: string
}

