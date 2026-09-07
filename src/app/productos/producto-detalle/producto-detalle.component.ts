import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RouterExtensions } from '@nativescript/angular';
import { Producto } from '../../core/models/producto.model';
import { ProductoService } from '../../core/services/producto.service';

@Component({
  selector: 'ns-producto-detalle',
  templateUrl: './producto-detalle.component.html',
  styleUrls: ['./producto-detalle.component.css']
})
export class ProductoDetalleComponent implements OnInit {
  producto?: Producto;

  constructor(
    private route: ActivatedRoute,
    private productoService: ProductoService,
    private routerExtensions: RouterExtensions
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.params['id']);
    this.producto = this.productoService.getProductoById(id);
  }

  volver(): void {
    this.routerExtensions.back();
  }
}
