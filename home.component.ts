import { Component } from '@angular/core';
import { Application } from '@nativescript/core';
import { RadSideDrawer } from 'nativescript-ui-sidedrawer';

@Component({
  selector: 'ns-search',
  templateUrl: './search.component.html'
})
export class SearchComponent {
  openDrawer(): void {
    const drawer = Application.getRootView() as RadSideDrawer;
    drawer.showDrawer();
  }
}
