import { NgModule, } from '@angular/core';
import { registerElement } from 'nativescript-angular';
import { DIRECTIVES } from './input-mask.directive';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [ DIRECTIVES ],
  providers: [],
  imports: [ FormsModule ],
  exports: [
    DIRECTIVES,
    FormsModule,
  ],
})
export class InputMaskModule {
}

registerElement('InputMask', () => require('../').InputMask);
