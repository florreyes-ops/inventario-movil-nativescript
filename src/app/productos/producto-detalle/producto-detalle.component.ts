import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EventData } from '@nativescript/core';
import { RouterExtensions } from '@nativescript/angular';

import { Opinion, Producto } from '../../core/models/producto.model';
import { ProductoService } from '../../core/services/producto.service';

@Component({
  selector: 'ns-producto-detalle',
  templateUrl: './producto-detalle.component.html',
  styleUrls: ['./producto-detalle.component.css']
})
export class ProductoDetalleComponent implements OnInit {

  producto?: Producto;
  opiniones: Opinion[] = [];

  private readonly nombres = [
    'Ana',
    'Miguel',
    'Sofía',
    'Roberto',
    'Elena',
    'Fernando'
  ];

  private readonly comentarios = [
    'Me pareció un producto muy práctico.',
    'Cumple bien para trabajos eléctricos básicos.',
    'La calidad es buena para su precio.',
    'Lo utilizaría nuevamente en mantenimiento.',
    'La descripción coincide con el producto recibido.',
    'Buen funcionamiento durante las pruebas.'
  ];

  constructor(
    private route: ActivatedRoute,
    private productoService: ProductoService,
    private routerExtensions: RouterExtensions
  ) {}

  ngOnInit(): void {
    const id = Number(
      this.route.snapshot.params['id']
    );

    this.producto =
      this.productoService.getProductoById(id);

    this.opiniones = this.producto
      ? [...this.producto.opiniones]
      : [];
  }

  volver(): void {
    this.routerExtensions.back();
  }

  // Navega al componente de edición
  editar(): void {
    if (!this.producto) {
      return;
    }

    this.routerExtensions.navigate(
      ['/productos', this.producto.id, 'editar'],
      {
        transition: {
          name: 'slideLeft'
        }
      }
    );
  }

  votar(
    opinion: Opinion,
    tipo: 'positivo' | 'negativo'
  ): void {

    if (tipo === 'positivo') {
      opinion.votosPositivos++;
    } else {
      opinion.votosNegativos++;
    }

    this.opiniones = [...this.opiniones];
  }

  // Pull to refresh: agrega una opinión aleatoria
  actualizarOpiniones(args: EventData): void {

    const control = args.object as any;

    setTimeout(() => {

      const nombre =
        this.nombres[
          Math.floor(Math.random() * this.nombres.length)
        ];

      const comentario =
        this.comentarios[
          Math.floor(Math.random() * this.comentarios.length)
        ];

      const nuevaOpinion: Opinion = {
        id: Date.now(),
        usuario: nombre,
        comentario,
        votosPositivos: Math.floor(Math.random() * 5),
        votosNegativos: Math.floor(Math.random() * 2)
      };

      this.opiniones = [
        nuevaOpinion,
        ...this.opiniones
      ];

      control.refreshing = false;

    }, 800);
  }
}
