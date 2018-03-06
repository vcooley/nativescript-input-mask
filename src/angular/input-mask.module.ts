import { NgModule, } from '@angular/core';
import { registerElement } from 'nativescript-angular';
import { DIRECTIVES } from './input-mask.directive';

@NgModule({
  declarations: [DIRECTIVES],
  providers: [],
  imports: [],
  exports: [DIRECTIVES],
})
export class InputMaskModule {
}

registerElement('InputMask', () => require('../').InputMask);
