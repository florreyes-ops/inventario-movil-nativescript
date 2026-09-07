import { Injectable } from '@angular/core';
import { Producto } from '../models/producto.model';

@Injectable({
  providedIn: 'root' // Inyección de dependencias a nivel global
})
export class ProductoService {
  private readonly productos: Producto[] = [
    {
      id: 1,
      nombre: 'Multímetro digital',
      categoria: 'Medición',
      precio: 42.50,
      stock: 8,
      descripcion: 'Equipo portátil para mediciones básicas de tensión, corriente y resistencia.'
    },
    {
      id: 2,
      nombre: 'Pinza amperimétrica',
      categoria: 'Medición',
      precio: 68.90,
      stock: 5,
      descripcion: 'Instrumento de medición de corriente sin abrir el circuito.'
    },
    {
      id: 3,
      nombre: 'Breaker termomagnético',
      categoria: 'Protección',
      precio: 18.75,
      stock: 16,
      descripcion: 'Dispositivo de protección contra sobrecargas y cortocircuitos.'
    },
    {
      id: 4,
      nombre: 'Contactor trifásico',
      categoria: 'Control',
      precio: 31.20,
      stock: 7,
      descripcion: 'Elemento de maniobra para control de cargas eléctricas trifásicas.'
    }
  ];

  getProductos(): Producto[] {
    return [...this.productos];
  }

  getProductoById(id: number): Producto | undefined {
    return this.productos.find((producto) => producto.id === id);
  }
}
