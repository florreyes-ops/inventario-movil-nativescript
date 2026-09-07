import { Injectable } from '@angular/core';
import { Producto } from '../models/producto.model';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  /*
   * Listado local de productos.
   *
   * Se utilizan imágenes de distintos orígenes:
   *
   * 1. res://  -> App_Resources
   * 2. https:// -> URL pública
   * 3. ~/      -> archivo dentro de la aplicación
   */
  private readonly productos: Producto[] = [

    // =====================================================
    // PRODUCTO 1
    // Imagen cargada desde App_Resources
    // =====================================================
    {
      id: 1,
      nombre: 'Multímetro digital',
      imagen: 'res://icon_productos',
      categoria: 'Medición',
      precio: 42.50,
      stock: 8,
      descripcion:
        'Equipo portátil para mediciones básicas de tensión, corriente y resistencia.',

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

    // =====================================================
    // PRODUCTO 2
    // Imagen cargada desde una URL pública
    // =====================================================
    {
      id: 2,
      nombre: 'Pinza amperimétrica',
      imagen:
        'https://placehold.co/200x200/png?text=Pinza+amperimetrica',
      categoria: 'Medición',
      precio: 68.90,
      stock: 5,
      descripcion:
        'Instrumento de medición de corriente sin abrir el circuito.',

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

    // =====================================================
    // PRODUCTO 3
    // Imagen cargada desde un path de la aplicación
    // usando el token ~/
    // =====================================================
    {
      id: 3,
      nombre: 'Breaker termomagnético',
      imagen: '~/assets/images/producto-local.png',
      categoria: 'Protección',
      precio: 18.75,
      stock: 16,
      descripcion:
        'Dispositivo de protección contra sobrecargas y cortocircuitos.',

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

    // =====================================================
    // PRODUCTO 4
    // Segunda imagen desde App_Resources
    // =====================================================
    {
      id: 4,
      nombre: 'Contactor trifásico',
      imagen: 'res://logo',
      categoria: 'Control',
      precio: 31.20,
      stock: 7,
      descripcion:
        'Elemento de maniobra para control de cargas eléctricas trifásicas.',

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

  /*
   * Array local para almacenar productos archivados.
   * Se utilizará en la práctica de Long Press.
   */
  private readonly productosArchivados: Producto[] = [];

  // =====================================================
  // OBTENER TODOS LOS PRODUCTOS
  // =====================================================
  getProductos(): Producto[] {
    return [...this.productos];
  }

  // =====================================================
  // OBTENER PRODUCTO POR ID
  // Se conserva para ProductoDetalleComponent
  // =====================================================
  getProductoById(id: number): Producto | undefined {
    return this.productos.find(
      (producto: Producto) => producto.id === id
    );
  }

  // =====================================================
  // OBTENER PRODUCTO POR ID
  // Utilizado por ProductoEditarComponent
  // =====================================================
  getProductoPorId(id: number): Producto | undefined {
    return this.productos.find(
      (producto: Producto) => producto.id === id
    );
  }

  // =====================================================
  // ACTUALIZAR PRODUCTO
  // Modifica nombre y descripción
  // =====================================================
  actualizarProducto(
    id: number,
    nombre: string,
    descripcion: string
  ): boolean {

    const producto = this.productos.find(
      (item: Producto) => item.id === id
    );

    if (!producto) {
      return false;
    }

    producto.nombre = nombre;
    producto.descripcion = descripcion;

    return true;
  }

  // =====================================================
  // ARCHIVAR PRODUCTO
  // Mueve el producto del array principal al array
  // de productos archivados.
  // =====================================================
  archivarProducto(id: number): boolean {

    const indice = this.productos.findIndex(
      (producto: Producto) => producto.id === id
    );

    if (indice === -1) {
      return false;
    }

    const producto = this.productos[indice];

    this.productosArchivados.push(producto);
    this.productos.splice(indice, 1);

    return true;
  }

  // =====================================================
  // BORRAR PRODUCTO
  // Elimina el producto del array local
  // =====================================================
  borrarProducto(id: number): boolean {

    const indice = this.productos.findIndex(
      (producto: Producto) => producto.id === id
    );

    if (indice === -1) {
      return false;
    }

    this.productos.splice(indice, 1);

    return true;
  }

  // =====================================================
  // OBTENER PRODUCTOS ARCHIVADOS
  // =====================================================
  getProductosArchivados(): Producto[] {
    return [...this.productosArchivados];
  }
}
