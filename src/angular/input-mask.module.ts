import { NgModule, } from '@angular/core';
import { registerElement } from 'nativescript-angular';
import { InputMaskTextValueAccessor } from './input-mask.directive';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [ InputMaskTextValueAccessor ],
  providers: [],
  imports: [ FormsModule ],
  exports: [
    InputMaskTextValueAccessor,
    FormsModule,
  ],
})
export class InputMaskModule {
}

registerElement('InputMask', () => require('../').InputMask);
