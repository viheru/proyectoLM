export interface Catalogo {
    nombreTienda: string
    productos: Producto[]
  }
  
  export interface Producto {
    id: number
    nombre: string
    descripcion: string
    precio: number
    imagen: string
    stock: number
  }

