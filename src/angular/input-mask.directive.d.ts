import { ElementRef } from "@angular/core";
import { BaseValueAccessor } from "nativescript-angular";
import { InputMask } from "..";
export declare class InputMaskTextValueAccessor extends BaseValueAccessor<InputMask> {
    private elementRef;
    constructor(elementRef: ElementRef);
    onTouched: () => void;
    writeValue(value: any): void;
}
export declare const DIRECTIVES: (typeof InputMaskTextValueAccessor)[];
