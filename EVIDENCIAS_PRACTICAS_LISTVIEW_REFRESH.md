# Evidencias de prácticas: ListView, detalle y Pull to Refresh

## Práctica: listado maestro y navegación a detalle

1. **Dos componentes**
   - `src/app/productos/productos-lista/productos-lista.component.ts`
   - `src/app/productos/producto-detalle/producto-detalle.component.ts`

2. **ListView con plantilla anidada y FlexboxLayout**
   - `src/app/productos/productos-lista/productos-lista.component.html`
   - Estructura: `ListView > ng-template > FlexboxLayout`.

3. **Binding de imagen y texto**
   - `[src]="producto.imagen"`
   - `[text]="producto.nombre"`

4. **Reacción al tap**
   - `(tap)="verDetalle(producto)"` sobre el `FlexboxLayout`.

5. **Navegación mediante RouterExtensions**
   - `ProductosListaComponent.verDetalle()` navega a `/productos/:id` con `RouterExtensions`.

## Práctica: opiniones y Pull to Refresh

1. **Segundo ListView en la vista de detalle**
   - `src/app/productos/producto-detalle/producto-detalle.component.html`
   - Lista el arreglo `opiniones` del producto.

2. **GridLayout anidado**
   - Cada opinión usa un `GridLayout` con usuario, comentario y controles de voto.

3. **Íconos de opciones**
   - Font Awesome `thumbs-up` (`&#xf164;`) y `thumbs-down` (`&#xf165;`).
   - Los íconos reaccionan a `tap` mediante `votar(...)`.

4. **Pull to refresh y nuevos elementos aleatorios**
   - Control `PullToRefresh` registrado en `src/main.ts`.
   - Dependencia `@nativescript-community/ui-pulltorefresh` en `package.json`.
   - `actualizarOpiniones()` crea una opinión aleatoria y la inserta al inicio.
   - Al terminar se establece `control.refreshing = false`.

## Compatibilidad con la práctica anterior

Se conserva el uso explícito de `*ngFor` en categorías/características, los estilos Android/iOS, el servicio global, el módulo de productos y la lógica exclusiva para Android.
