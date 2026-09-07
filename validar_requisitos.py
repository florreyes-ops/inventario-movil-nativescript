from pathlib import Path

root = Path(__file__).parent
checks = {
    '1 Drawer': 'RadSideDrawer' in (root/'src/app/app.component.html').read_text(encoding='utf-8'),
    '2 Dos componentes': all((root/p).exists() for p in [
        'src/app/productos/productos-lista/productos-lista.component.ts',
        'src/app/productos/producto-detalle/producto-detalle.component.ts']),
    '3 Modulo': (root/'src/app/productos/productos.module.ts').exists(),
    '4 Routing': (root/'src/app/productos/productos-routing.module.ts').exists(),
    '5 Drawer Productos': "title: 'Productos'" in (root/'src/app/app.component.ts').read_text(encoding='utf-8'),
    '6 Service global': "providedIn: 'root'" in (root/'src/app/core/services/producto.service.ts').read_text(encoding='utf-8'),
    '7 ngFor': '*ngFor' in (root/'src/app/productos/productos-lista/productos-lista.component.html').read_text(encoding='utf-8'),
    '8 CSS plataformas': all((root/p).exists() for p in [
        'src/app/productos/productos-lista/productos-lista.component.android.css',
        'src/app/productos/productos-lista/productos-lista.component.ios.css']),
    '9 Icono App_Resources': (root/'App_Resources/Android/src/main/res/drawable/icon_productos.png').exists(),
    '10 Android only': 'if (isAndroid)' in (root/'src/app/productos/productos-lista/productos-lista.component.ts').read_text(encoding='utf-8')
}
for k,v in checks.items():
    print(('OK' if v else 'FALTA') + ' - ' + k)
if not all(checks.values()):
    raise SystemExit(1)
