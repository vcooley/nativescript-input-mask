import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { registerElement } from 'nativescript-angular';
import { AppComponent } from "./app.component";

import { InputMaskModule } from 'nativescript-input-mask/angular';
import { InputMask } from 'nativescript-input-mask';

// registerElement('InputMask', () => InputMask);

@NgModule({
    bootstrap: [
        AppComponent
    ],
    imports: [
        NativeScriptModule,
        InputMaskModule,
    ],
    declarations: [
        AppComponent,
    ],
    providers: [],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
/*
Pass your application module to the bootstrapModule function located in main.ts to start your app
*/
export class AppModule { }
