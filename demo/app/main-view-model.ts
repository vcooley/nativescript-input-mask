import { Observable } from 'tns-core-modules/data/observable';
import { InputMask } from 'nativescript-input-mask';

export class HelloWorldModel extends Observable {
  public message: string;
  private inputMask: InputMask;

  constructor() {
    super();

    this.inputMask = new InputMask();
    this.message = this.inputMask.message;
  }
}
