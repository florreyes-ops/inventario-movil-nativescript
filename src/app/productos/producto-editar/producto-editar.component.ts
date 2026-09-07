import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  ValidationErrors,
  Validators
} from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { RouterExtensions } from '@nativescript/angular';

import { ProductoService } from '../../core/services/producto.service';

function textoMinimo(minimo: number) {
  return (control: AbstractControl): ValidationErrors | null => {
    const valor = (control.value || '').trim();

    if (!valor) {
      return null;
    }

    return valor.length >= minimo
      ? null
      : { textoMinimo: true };
  };
}

@Component({
  selector: 'ns-producto-editar',
  templateUrl: './producto-editar.component.html'
})
export class ProductoEditarComponent implements OnInit {

  productoId = 0;

  formulario = new FormGroup({
    nombre: new FormControl('', [
      Validators.required,
      textoMinimo(5)
    ]),
    descripcion: new FormControl('', [
      Validators.required,
      textoMinimo(10)
    ])
  });

  constructor(
    private route: ActivatedRoute,
    private productoService: ProductoService,
    private routerExtensions: RouterExtensions
  ) {}

  ngOnInit(): void {
    this.productoId = Number(
      this.route.snapshot.paramMap.get('id')
    );

    const producto =
      this.productoService.getProductoPorId(this.productoId);

    if (producto) {
      this.formulario.patchValue({
        nombre: producto.nombre,
        descripcion: producto.descripcion
      });
    }
  }

  get nombre() {
    return this.formulario.controls.nombre;
  }

  get descripcion() {
    return this.formulario.controls.descripcion;
  }

  guardar(): void {
    if (this.formulario.invalid) {
      this.formulario.markAllAsTouched();
      return;
    }

    const nombre = this.nombre.value || '';
    const descripcion = this.descripcion.value || '';

    this.productoService.actualizarProducto(
      this.productoId,
      nombre,
      descripcion
    );

    this.routerExtensions.back();
  }

  cancelar(): void {
    this.routerExtensions.back();
  }
}
