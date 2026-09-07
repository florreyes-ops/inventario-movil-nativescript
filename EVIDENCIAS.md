# Evidencias para evaluación por pares

## 1. Template Drawer y ruteo modularizado
- `src/app/app.component.html`: contiene `RadSideDrawer`, `tkDrawerContent` y `tkMainContent`.
- `src/app/app-routing.module.ts`: carga las features con `loadChildren`.

## 2. Dos componentes nuevos
- `src/app/productos/productos-lista/productos-lista.component.ts`
- `src/app/productos/producto-detalle/producto-detalle.component.ts`

## 3. Nuevo módulo
- `src/app/productos/productos.module.ts`

## 4. Routing del nuevo módulo
- `src/app/productos/productos-routing.module.ts`

## 5. Integración en Side Drawer
- `src/app/app.component.ts`: objeto `{ title: 'Productos', route: '/productos', icon: 'res://icon_productos' }`.

## 6. Service Angular global
- `src/app/core/services/producto.service.ts` usa `@Injectable({ providedIn: 'root' })`.
- Se inyecta en los dos componentes de la feature Productos.

## 7. ngFor
- `productos-lista.component.html`: `*ngFor="let producto of productos"`.

## 8. CSS Android/iOS
- `productos-lista.component.android.css`
- `productos-lista.component.ios.css`

Ambos comparten el nombre base `productos-lista.component` y personalizan el mismo componente por plataforma.

## 9. Ícono personalizado
- Android: `App_Resources/Android/src/main/res/drawable/icon_productos.png`
- iOS: `App_Resources/iOS/Assets.xcassets/icon_productos.imageset/`
- Se utiliza como `res://icon_productos` en el drawer y en Productos.

## 10. Código exclusivo Android
En `productos-lista.component.ts`:

```ts
if (isAndroid) {
  this.mensajePlataforma = 'Modo Android: interfaz optimizada para Material Design';
}
```
