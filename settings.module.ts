import { platformNativeScriptDynamic, registerElement } from '@nativescript/angular';
import { PullToRefresh } from '@nativescript-community/ui-pulltorefresh';
import { AppModule } from './app/app.module';

// Registro del control nativo usado en la práctica de Pull To Refresh.
registerElement('PullToRefresh', () => PullToRefresh);

platformNativeScriptDynamic().bootstrapModule(AppModule);
