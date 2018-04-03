import { Directive, ExistingProvider, forwardRef, HostListener, ElementRef } from "@angular/core";
import { NG_VALUE_ACCESSOR } from "@angular/forms";
import { BaseValueAccessor } from "nativescript-angular";

import { InputMask } from "..";

const TEXT_VALUE_ACCESSOR: ExistingProvider = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => InputMaskTextValueAccessor),
  multi: true,
};

@Directive({
  selector: "InputMask[ngModel], InputMask[formControlName], InputMask[formControl]",
  providers: [ TEXT_VALUE_ACCESSOR ],
  host: {
    '(textChange)': 'onChange($event.value)'
  }
})
export class InputMaskTextValueAccessor extends BaseValueAccessor<InputMask> {

  constructor(private elementRef: ElementRef) {
    super(elementRef.nativeElement);
  }

  // @HostListener('textChange', ['$event'])
  // textChangeListener(event) {
  //   this.onChange(event.value);
  // }

  onTouched = () => { };

  writeValue(value: any) {
    const normalized = super.normalizeValue(value);
    this.view.text = normalized;
  }

}

export const DIRECTIVES = [ InputMaskTextValueAccessor ];
