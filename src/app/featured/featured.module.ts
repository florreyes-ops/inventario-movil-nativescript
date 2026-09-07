import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule } from '@nativescript/angular';
import { FeaturedComponent } from './featured.component';
import { FeaturedRoutingModule } from './featured.routing.module';

@NgModule({
  imports: [NativeScriptCommonModule, FeaturedRoutingModule],
  declarations: [FeaturedComponent],
  schemas: [NO_ERRORS_SCHEMA]
})
export class FeaturedModule {}
