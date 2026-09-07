import { Injectable } from '@angular/core';
import { Producto } from '../models/producto.model';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  private readonly productos: Producto[] = [
    {
      id: 1,
      nombre: 'Multímetro digital',
      imagen: 'res://icon_productos',
      categoria: 'Medición',
      precio: 42.50,
      stock: 8,
      descripcion: 'Equipo portátil para mediciones básicas de tensión, corriente y resistencia.',
      caracteristicas: [
        'Pantalla digital',
        'Medición AC/DC',
        'Protección contra sobrecarga'
      ],
      opiniones: [
        {
          id: 101,
          usuario: 'Carlos',
          comentario: 'Muy útil para trabajos de campo.',
          votosPositivos: 4,
          votosNegativos: 0
        },
        {
          id: 102,
          usuario: 'Andrea',
          comentario: 'Lecturas claras y fácil de utilizar.',
          votosPositivos: 3,
          votosNegativos: 1
        }
      ]
    },
    {
      id: 2,
      nombre: 'Pinza amperimétrica',
      imagen: 'res://icon_productos',
      categoria: 'Medición',
      precio: 68.90,
      stock: 5,
      descripcion: 'Instrumento de medición de corriente sin abrir el circuito.',
      caracteristicas: [
        'Medición sin contacto',
        'Rango automático',
        'Diseño portátil'
      ],
      opiniones: [
        {
          id: 201,
          usuario: 'Luis',
          comentario: 'Práctica para mantenimiento eléctrico.',
          votosPositivos: 5,
          votosNegativos: 0
        },
        {
          id: 202,
          usuario: 'María',
          comentario: 'Buena relación entre precio y funciones.',
          votosPositivos: 2,
          votosNegativos: 0
        }
      ]
    },
    {
      id: 3,
      nombre: 'Breaker termomagnético',
      imagen: 'res://icon_productos',
      categoria: 'Protección',
      precio: 18.75,
      stock: 16,
      descripcion: 'Dispositivo de protección contra sobrecargas y cortocircuitos.',
      caracteristicas: [
        'Protección térmica',
        'Protección magnética',
        'Montaje en riel DIN'
      ],
      opiniones: [
        {
          id: 301,
          usuario: 'José',
          comentario: 'Instalación rápida y sencilla.',
          votosPositivos: 3,
          votosNegativos: 0
        }
      ]
    },
    {
      id: 4,
      nombre: 'Contactor trifásico',
      imagen: 'res://icon_productos',
      categoria: 'Control',
      precio: 31.20,
      stock: 7,
      descripcion: 'Elemento de maniobra para control de cargas eléctricas trifásicas.',
      caracteristicas: [
        'Tres polos',
        'Control electromagnético',
        'Uso industrial'
      ],
      opiniones: [
        {
          id: 401,
          usuario: 'Daniel',
          comentario: 'Funciona bien en tableros de control.',
          votosPositivos: 4,
          votosNegativos: 1
        }
      ]
    }
  ];

  // Devuelve todos los productos
  getProductos(): Producto[] {
    return [...this.productos];
  }

  // Se conserva porque puede estar siendo usado por el componente de detalle
  getProductoById(id: number): Producto | undefined {
    return this.productos.find(
      (producto) => producto.id === id
    );
  }

  // Método utilizado por ProductoEditarComponent
  getProductoPorId(id: number): Producto | undefined {
    return this.productos.find(
      (producto) => producto.id === id
    );
  }

  // Actualiza nombre y descripción
  actualizarProducto(
    id: number,
    nombre: string,
    descripcion: string
  ): boolean {

    const producto = this.productos.find(
      (item) => item.id === id
    );

    if (!producto) {
      return false;
    }

    producto.nombre = nombre;
    producto.descripcion = descripcion;

    return true;
  }
}
