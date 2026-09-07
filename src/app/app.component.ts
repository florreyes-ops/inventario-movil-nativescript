import { Component, ViewChild } from '@angular/core';
import { RouterExtensions } from '@nativescript/angular';
import { RadSideDrawer } from 'nativescript-ui-sidedrawer';
import { RadSideDrawerComponent } from 'nativescript-ui-sidedrawer/angular';

interface NavigationItem {
  title: string;
  route: string;
  icon: string;
}

@Component({
  selector: 'ns-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild(RadSideDrawerComponent, { static: false })
  drawerComponent!: RadSideDrawerComponent;

  navigationItems: NavigationItem[] = [
    { title: 'Inicio', route: '/home', icon: 'res://icon_home' },
    { title: 'Explorar', route: '/browse', icon: 'res://icon_browse' },
    { title: 'Buscar', route: '/search', icon: 'res://icon_search' },
    { title: 'Destacados', route: '/featured', icon: 'res://icon_featured' },
    { title: 'Configuración', route: '/settings', icon: 'res://icon_settings' },
    /* Integración de la nueva feature al Side Drawer */
    { title: 'Productos', route: '/productos', icon: 'res://icon_productos' }
  ];

  constructor(private routerExtensions: RouterExtensions) {}

  navigateTo(route: string): void {
    this.routerExtensions.navigate([route], { clearHistory: true });
    this.drawer.closeDrawer();
  }

  private get drawer(): RadSideDrawer {
    return this.drawerComponent.sideDrawer;
  }
}
