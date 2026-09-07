<ActionBar title="Editar producto" class="action-bar">
  <NavigationButton text="Atrás" android.systemIcon="ic_menu_back" (tap)="cancelar()"></NavigationButton>
</ActionBar>

<ScrollView>
  <StackLayout class="editar-page" [formGroup]="formulario">
    <Label text="Edición de datos básicos" class="editar-titulo"></Label>
    <Label text="Modifica el nombre y la descripción del producto." class="editar-ayuda" textWrap="true"></Label>

    <Label text="Nombre *" class="campo-label"></Label>
    <TextField
      formControlName="nombre"
      hint="Nombre del producto"
      class="campo-input">
    </TextField>

    <Label
      *ngIf="nombre.touched && nombre.hasError('required')"
      text="El nombre es obligatorio."
      class="error-text">
    </Label>
    <Label
      *ngIf="nombre.touched && nombre.hasError('textoMinimo')"
      text="El nombre debe contener al menos 5 caracteres."
      class="error-text">
    </Label>

    <Label text="Descripción *" class="campo-label"></Label>
    <TextView
      formControlName="descripcion"
      hint="Descripción del producto"
      class="campo-textarea">
    </TextView>

    <Label
      *ngIf="descripcion.touched && descripcion.hasError('required')"
      text="La descripción es obligatoria."
      class="error-text">
    </Label>
    <Label
      *ngIf="descripcion.touched && descripcion.hasError('textoMinimo')"
      text="La descripción debe contener al menos 10 caracteres."
      class="error-text">
    </Label>

    <Button text="Guardar cambios" class="btn btn-primary guardar-btn" (tap)="guardar()"></Button>
    <Button text="Cancelar" class="btn cancelar-btn" (tap)="cancelar()"></Button>
  </StackLayout>
</ScrollView>
