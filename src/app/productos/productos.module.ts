import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule } from '@nativescript/angular';
import { ProductosRoutingModule } from './productos-routing.module';
import { ProductosListaComponent } from './productos-lista/productos-lista.component';
import { ProductoDetalleComponent } from './producto-detalle/producto-detalle.component';

@NgModule({
  imports: [NativeScriptCommonModule, ProductosRoutingModule],
  declarations: [ProductosListaComponent, ProductoDetalleComponent],
  schemas: [NO_ERRORS_SCHEMA]
})
export class ProductosModule {}
