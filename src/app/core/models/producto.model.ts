export interface Opinion {
  id: number;
  usuario: string;
  comentario: string;
  votosPositivos: number;
  votosNegativos: number;
}

export interface Producto {
  id: number;
  nombre: string;
  imagen: string;
  categoria: string;
  precio: number;
  stock: number;
  descripcion: string;
  caracteristicas: string[];
  opiniones: Opinion[];
}
