import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NativeScriptCommonModule } from '@nativescript/angular';

import { ProductosRoutingModule } from './productos-routing.module';
import { ProductosListaComponent } from './productos-lista/productos-lista.component';
import { ProductoDetalleComponent } from './producto-detalle/producto-detalle.component';

@NgModule({
  imports: [
    NativeScriptCommonModule,
    FormsModule,
    ProductosRoutingModule
  ],
  declarations: [
    ProductosListaComponent,
    ProductoDetalleComponent
  ],
  schemas: [NO_ERRORS_SCHEMA]
})
export class ProductosModule {}
