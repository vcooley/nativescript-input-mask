import { Directive } from "@angular/core"; // TODO: check require .Directive without hacks

@Directive({
  selector: "InputMask"
})
export class InputMaskDirective { }

export const DIRECTIVES = [InputMaskDirective];
