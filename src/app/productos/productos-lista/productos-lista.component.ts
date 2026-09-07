import { Component, OnInit } from '@angular/core';
import { Application, isAndroid } from '@nativescript/core';
import { RouterExtensions } from '@nativescript/angular';
import { RadSideDrawer } from 'nativescript-ui-sidedrawer';
import { Producto } from '../../core/models/producto.model';
import { ProductoService } from '../../core/services/producto.service';

@Component({
  selector: 'ns-productos-lista',
  templateUrl: './productos-lista.component.html',
  styleUrls: ['./productos-lista.component.css']
})
export class ProductosListaComponent implements OnInit {

  productos: Producto[] = [];

  resultadosBusqueda: Producto[] = [];

  textoBusqueda: string = '';

  categorias = ['Medición', 'Protección', 'Control'];

  mensajePlataforma =
    'Aplicación ejecutándose en iOS u otra plataforma';

  constructor(
    private productoService: ProductoService,
    private routerExtensions: RouterExtensions
  ) {
    if (isAndroid) {
      this.mensajePlataforma =
        'Modo Android: interfaz optimizada para Material Design';
    }
  }

  ngOnInit(): void {
    this.productos = this.productoService.getProductos();

    this.resultadosBusqueda = [...this.productos];
  }

  openDrawer(): void {
    const drawer = Application.getRootView() as RadSideDrawer;
    drawer.showDrawer();
  }

  buscar(): void {
    const texto = this.textoBusqueda.toLowerCase().trim();

    if (!texto) {
      this.resultadosBusqueda = [...this.productos];
      return;
    }

    this.resultadosBusqueda = this.productos.filter(
      (producto: Producto) =>
        producto.nombre.toLowerCase().includes(texto) ||
        producto.descripcion.toLowerCase().includes(texto) ||
        producto.categoria.toLowerCase().includes(texto)
    );
  }

  verDetalle(producto: Producto): void {
    this.routerExtensions.navigate(['/productos', producto.id], {
      transition: {
        name: 'slideLeft'
      }
    });
  }
}
