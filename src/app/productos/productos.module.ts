import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NativeScriptCommonModule } from '@nativescript/angular';

import { ProductosRoutingModule } from './productos-routing.module';

import { ProductosListaComponent } from './productos-lista/productos-lista.component';
import { ProductoDetalleComponent } from './producto-detalle/producto-detalle.component';
import { ProductoEditarComponent } from './producto-editar/producto-editar.component';

@NgModule({
  imports: [
    NativeScriptCommonModule,
    FormsModule,
    ReactiveFormsModule,
    ProductosRoutingModule
  ],
  declarations: [
    ProductosListaComponent,
    ProductoDetalleComponent,
    ProductoEditarComponent
  ],
  schemas: [NO_ERRORS_SCHEMA]
})
export class ProductosModule {}
