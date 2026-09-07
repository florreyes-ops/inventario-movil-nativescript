import { Component } from '@angular/core';
import { Application } from '@nativescript/core';
import { RadSideDrawer } from 'nativescript-ui-sidedrawer';

@Component({
  selector: 'ns-settings',
  templateUrl: './settings.component.html'
})
export class SettingsComponent {
  openDrawer(): void {
    const drawer = Application.getRootView() as RadSideDrawer;
    drawer.showDrawer();
  }
}
