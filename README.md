# Inventario Móvil NativeScript – Catálogo de Productos

Proyecto académico desarrollado con **NativeScript + Angular** y basado en la arquitectura del template oficial **`@nativescript/template-drawer-navigation-ng`**. La aplicación conserva la navegación mediante **Side Drawer** y agrega una nueva feature llamada **Productos**, implementada como módulo Angular con ruteo propio, servicio global, listado y detalle.

## Base utilizada

El proyecto sigue el patrón del template Drawer Navigation de NativeScript:

```bash
ns create inventario-movil-nativescript --template @nativescript/template-drawer-navigation-ng
```

El `RadSideDrawer` se encuentra en `src/app/app.component.html` y las features se cargan desde `src/app/app-routing.module.ts` mediante `loadChildren`.

## Funcionalidad agregada

La opción **Productos** fue integrada al Side Drawer. Permite visualizar un pequeño catálogo de elementos eléctricos y abrir el detalle de cada producto. Los datos se obtienen desde `ProductoService`, inyectado globalmente mediante `providedIn: 'root'`.

## Evidencia de los 10 requisitos

| # | Requisito | Evidencia en el proyecto |
|---|---|---|
| 1 | Template Drawer + ruteo modularizado | `src/app/app.component.html`, `src/app/app-routing.module.ts` y módulos `home`, `browse`, `search`, `featured`, `settings` |
| 2 | Al menos 2 componentes nuevos | `ProductosListaComponent` y `ProductoDetalleComponent` |
| 3 | Nuevo módulo de feature | `src/app/productos/productos.module.ts` |
| 4 | Submódulo de ruteo | `src/app/productos/productos-routing.module.ts` |
| 5 | Integración al Side Drawer | Entrada **Productos** en `navigationItems`, `src/app/app.component.ts` |
| 6 | Service global por DI | `src/app/core/services/producto.service.ts`, con `providedIn: 'root'` |
| 7 | Uso de `ngFor` | `src/app/productos/productos-lista/productos-lista.component.html` |
| 8 | CSS Android/iOS con mismo nombre base | `productos-lista.component.android.css` y `productos-lista.component.ios.css` |
| 9 | Ícono personalizado en App_Resources | `App_Resources/Android/.../drawable/icon_productos.png` y `App_Resources/iOS/Assets.xcassets/icon_productos.imageset/` |
| 10 | Asignación solo en Android | `if (isAndroid)` en `productos-lista.component.ts` |

## Estructura principal

```text
src/app/
├── app.component.*
├── app-routing.module.ts
├── home/
├── browse/
├── search/
├── featured/
├── settings/
├── core/
│   ├── models/producto.model.ts
│   └── services/producto.service.ts
└── productos/
    ├── productos.module.ts
    ├── productos-routing.module.ts
    ├── productos-lista/
    │   ├── productos-lista.component.ts
    │   ├── productos-lista.component.html
    │   ├── productos-lista.component.css
    │   ├── productos-lista.component.android.css
    │   └── productos-lista.component.ios.css
    └── producto-detalle/
        ├── producto-detalle.component.ts
        ├── producto-detalle.component.html
        └── producto-detalle.component.css
```

## Ejecución

1. Instalar Node.js y NativeScript CLI.
2. En la carpeta del proyecto ejecutar:

```bash
npm install
ns doctor
ns run android
```

Para iOS se requiere macOS con Xcode:

```bash
ns run ios
```

## Nota académica

Este repositorio está preparado para que un evaluador pueda ubicar rápidamente cada evidencia solicitada en la rúbrica. La feature **Productos** es elaboración adicional sobre la navegación Drawer base.
