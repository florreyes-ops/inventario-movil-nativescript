import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  ValidationErrors,
  ValidatorFn,
  Validators
} from '@angular/forms';
import { Dialogs } from '@nativescript/core';
import { RouterExtensions } from '@nativescript/angular';
import { Toasty } from '@triniwiz/nativescript-toasty';
import { ProductoService } from '../../core/services/producto.service';

// Validador personalizado: exige una longitud mínima ignorando espacios al inicio/final.
export function textoMinimo(minimo: number): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const valor = String(control.value ?? '').trim();
    return valor.length >= minimo
      ? null
      : { textoMinimo: { minimo, actual: valor.length } };
  };
}

@Component({
  selector: 'ns-producto-editar',
  templateUrl: './producto-editar.component.html',
  styleUrls: ['./producto-editar.component.css']
})
export class ProductoEditarComponent implements OnInit {
  productoId = 0;

  formulario = new FormGroup({
    nombre: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required, textoMinimo(5)]
    }),
    descripcion: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required, textoMinimo(10)]
    })
  });

  constructor(
    private route: ActivatedRoute,
    private productoService: ProductoService,
    private routerExtensions: RouterExtensions
  ) {}

  ngOnInit(): void {
    this.productoId = Number(this.route.snapshot.params['id']);
    const producto = this.productoService.getProductoById(this.productoId);

    if (!producto) {
      Dialogs.alert({
        title: 'Producto no encontrado',
        message: 'No fue posible cargar el elemento seleccionado.',
        okButtonText: 'Aceptar'
      }).then(() => this.routerExtensions.back());
      return;
    }

    this.formulario.setValue({
      nombre: producto.nombre,
      descripcion: producto.descripcion
    });
  }

  get nombre(): FormControl<string> {
    return this.formulario.controls.nombre;
  }

  get descripcion(): FormControl<string> {
    return this.formulario.controls.descripcion;
  }

  guardar(): void {
    this.formulario.markAllAsTouched();

    if (this.formulario.invalid) {
      Dialogs.alert({
        title: 'Formulario incompleto',
        message: 'Corrige los campos marcados antes de guardar.',
        okButtonText: 'Aceptar'
      });
      return;
    }

    this.productoService.actualizarProducto(this.productoId, {
      nombre: this.nombre.value.trim(),
      descripcion: this.descripcion.value.trim()
    });

    new Toasty({ text: 'Datos del producto editados correctamente' }).show();
    this.routerExtensions.back();
  }

  cancelar(): void {
    this.routerExtensions.back();
  }
}
