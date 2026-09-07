import { Component } from '@angular/core';
import { Application } from '@nativescript/core';
import { RadSideDrawer } from 'nativescript-ui-sidedrawer';

@Component({
  selector: 'ns-browse',
  templateUrl: './browse.component.html'
})
export class BrowseComponent {
  openDrawer(): void {
    const drawer = Application.getRootView() as RadSideDrawer;
    drawer.showDrawer();
  }
}
