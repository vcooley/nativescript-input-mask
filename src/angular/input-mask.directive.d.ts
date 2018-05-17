import { ElementRef } from "@angular/core";
import { ControlValueAccessor } from "@angular/forms";
import { BaseValueAccessor } from "nativescript-angular";
import { InputMask } from "..";
export declare class InputMaskTextValueAccessor extends BaseValueAccessor<InputMask> implements ControlValueAccessor {
    private elementRef;
    constructor(elementRef: ElementRef);
    onTouched: () => void;
    writeValue(value: any): void;
}
